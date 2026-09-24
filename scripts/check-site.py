"""Check the built static site using only Python's standard library."""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1] / 'dist'


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.ids = []
        self.references = []
        self.h1 = 0
        self.main = 0
        self.title = 0
        self.description = 0
        self.problems = []
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        self.h1 += tag == 'h1'
        self.main += tag == 'main'
        self.title += tag == 'title'
        self.description += tag == 'meta' and attrs.get('name') == 'description' and bool(attrs.get('content'))
        if tag == 'img':
            if not attrs.get('alt'):
                self.problems.append('Image is missing descriptive alt text')
            if not attrs.get('width') or not attrs.get('height'):
                self.problems.append('Image is missing intrinsic dimensions')
        if tag in ('a', 'link', 'img', 'script'):
            reference = attrs.get('href') if tag in ('a', 'link') else attrs.get('src')
            if reference is not None:
                self.references.append(reference)


pages = {p.resolve(): Page(p) for p in ROOT.rglob('*.html')}
problems = []
if len(pages) != 6:
    problems.append(f'Expected homepage, four projects and 404; got {len(pages)} HTML pages')
for path, page in pages.items():
    for label, count in [('h1', page.h1), ('main', page.main), ('title', page.title), ('description', page.description)]:
        if count != 1:
            page.problems.append(f'Expected one {label}; got {count}')
    duplicates = [id_ for id_, count in Counter(page.ids).items() if count > 1]
    if duplicates:
        page.problems.append(f'Duplicate IDs: {duplicates}')
    for reference in page.references:
        url = urlsplit(reference)
        if url.scheme or url.netloc:
            continue
        if not reference:
            page.problems.append('Empty URL')
            continue
        decoded = unquote(url.path)
        target = (ROOT / decoded.lstrip('/')) if decoded.startswith('/') else (path.parent / decoded if decoded else path)
        if target.is_dir():
            target /= 'index.html'
        target = target.resolve()
        if not target.is_relative_to(ROOT.resolve()) or not target.is_file():
            page.problems.append(f'Missing local target: {reference}')
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            page.problems.append(f'Missing anchor: {reference}')
    html = path.read_text()
    if '/Users/' in html or 'localhost' in html:
        page.problems.append('Local environment path leaked into output')
    problems.extend(f'{path.relative_to(ROOT)}: {issue}' for issue in page.problems)

allowed_files = {
    '.nojekyll', 'index.html', '404.html', 'style.css', 'favicon.svg',
    'images/eric-chen.jpg', 'images/hi-shell-predictions.png',
    'downloads/eric-chen-resume.pdf', 'downloads/hi-shell-detection-2026.pdf',
    'downloads/cospar-2026-kp-forecast.pdf', 'downloads/cospar-2026-solar-jets.pdf',
    'downloads/roman-integrated-modeling-slides.pptx',
    'work/hi-shells/index.html', 'work/heliophysics/index.html',
    'work/roman/index.html', 'work/foxit/index.html',
}
actual_files = {p.relative_to(ROOT).as_posix() for p in ROOT.rglob('*') if p.is_file()}
if actual_files != allowed_files:
    problems.append(f'Output manifest mismatch; extra={actual_files - allowed_files}; missing={allowed_files - actual_files}')

if problems:
    raise SystemExit('\n'.join(problems))
print(f'PASS: {len(pages)} pages, {sum(len(p.references) for p in pages.values())} references, metadata, landmarks, image attributes and {len(actual_files)} allowlisted files.')
