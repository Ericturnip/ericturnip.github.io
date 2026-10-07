import assert from 'node:assert/strict';
import { home } from '../src/home.mjs';
import { layout } from '../src/layout.mjs';
import { projects } from '../src/content.mjs';
import { projectPage } from '../src/project.mjs';

const html = layout({
  title: 'Test',
  description: 'Test page',
  body: home(),
});
const roman = layout({
  title: 'Roman',
  description: 'Roman project',
  body: projectPage(projects.find((project) => project.slug === 'roman')),
});

function anchors(markup) {
  return [...markup.matchAll(/<a\b[^>]*>/g)].map(([tag]) => tag);
}
function firstAnchor(markup, predicate, description) {
  const found = anchors(markup).find(predicate);
  assert.ok(found, `missing ${description} anchor`);
  return found;
}
function assertNewTab(tag, description) {
  assert.match(tag, /target="_blank"/, `${description} should open a new tab`);
  assert.match(tag, /rel="noopener noreferrer"/, `${description} should protect the opener`);
}

assertNewTab(firstAnchor(html, (tag) => tag.includes('class="nav-resume"'), 'Résumé'), 'Résumé');
assertNewTab(firstAnchor(html, (tag) => tag.includes('class="primary-link"'), 'primary CTA'), 'primary CTA');
assertNewTab(firstAnchor(html, (tag) => tag.includes('class="pdf-link"'), 'PDF action'), 'PDF action');
assertNewTab(firstAnchor(html, (tag) => tag.includes('href="/downloads/eric-chen-resume.pdf"'), 'full résumé'), 'full résumé');
assertNewTab(firstAnchor(roman, (tag) => tag.includes('class="material-link"'), 'project material'), 'project material');
assertNewTab(firstAnchor(roman, (tag) => tag.includes('Download presentation'), 'presentation action'), 'presentation action');
assert.doesNotMatch(firstAnchor(html, (tag) => tag.includes('href="/#work"') || tag.includes('href="#work"'), 'in-page Work navigation'), /target="_blank"/);

console.log('PASS: button-style calls to action and document actions open a new tab; in-page navigation stays in the current tab.');
