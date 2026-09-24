import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { layout } from '../src/layout.mjs';
import { home } from '../src/home.mjs';
import { projects } from '../src/content.mjs';
import { projectPage } from '../src/project.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = resolve(root, 'dist');
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(resolve(root, 'public'), out, { recursive: true });
await writeFile(resolve(out, '.nojekyll'), '');
await writeFile(resolve(out, 'index.html'), layout({
  title: 'Eric Chen — Astrophysics & Scientific Computing',
  description: 'Eric Chen is an astrophysics student at UC Berkeley working across scientific machine learning, space instrumentation, and research software.',
  body: home(),
}));
for (const project of projects.filter(project => !project.externalHref)) {
  const path = `/work/${project.slug}/`;
  const directory = resolve(out, 'work', project.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, 'index.html'), layout({
    title: `${project.shortTitle} — Eric Chen`,
    description: project.description,
    body: projectPage(project),
    path,
  }));
}
await writeFile(resolve(out, '404.html'), layout({
  title: 'Page not found — Eric Chen',
  description: 'Return to Eric Chen’s research and engineering portfolio.',
  path: '/404.html',
  body: '<section class="wrap not-found"><p class="eyebrow">404 · PAGE NOT FOUND</p><h1>A different direction.</h1><p>This page isn’t here. You can find my projects and research on the homepage.</p><a class="primary-link" href="/">Back to the homepage</a></section>',
}));
console.log(`Built 6 HTML pages and supplied assets at ${out}`);
