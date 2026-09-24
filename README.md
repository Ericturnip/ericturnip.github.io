# Eric Chen — personal website

A static research and engineering portfolio for ericturnip.github.io.

## Local draft

Build with Node.js 20 or later:

```sh
node scripts/build.mjs
python3 scripts/check-site.py
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:4173/. Rebuild after source edits, then refresh the page. No package installation is needed.

## Editing

- `src/content.mjs`: profile, selected projects, experience, repository links, and research outputs.
- `src/home.mjs`: homepage layout, including the standalone PUNCH pipeline entry.
- `src/project.mjs`: project narratives and material links.
- `src/layout.mjs`: shared navigation, footer, and page metadata.
- `public/style.css`: responsive styles.
- `public/downloads/`: approved PDFs; Roman slides are intentionally absent.
- `public/images/`: supplied portrait and an original embedded figure from the H I paper.

The builder publishes only the intended `public/` assets and generated HTML into `dist/`. The validation script checks every local reference, anchors, document landmarks, image attributes, and the full output-file allowlist.

## Draft and publishing status

This branch is for local review. Nothing has been pushed or deployed. The legacy Jekyll source and workflows remain outside the generated output; before deploying the replacement, retire those theme files and configure GitHub Pages to publish `dist/`. The existing github.io address remains the production target.

AGU entries are submissions, not accepted presentations. They have no abstract text yet. The H I paper retains its original authorship and equal-contribution note. The private HIShells link is labeled as requiring access. The full unmodified resume PDF contains the contact information supplied by Eric.
