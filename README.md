# Eric Chen — personal website

A static research and engineering portfolio for ericturnip.github.io.

## Local preview

Build with Node.js 20 or later:

```sh
node scripts/build.mjs
python3 scripts/check-site.py
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:4173/. Rebuild after source edits, then refresh the page. No package installation is needed.

## Editing

- `src/content.mjs`: profile, selected projects, experience, repository links, and research outputs.
- `src/home.mjs`: homepage layout, with Research & space systems and Industry software groups. PUNCH is a research card linking directly to GitHub.
- `src/project.mjs`: project narratives and material links.
- `src/layout.mjs`: shared navigation, footer, and page metadata.
- `public/style.css`: responsive styles.
- `public/downloads/`: the supplied PDFs and Roman internship PowerPoint presentation.
- `public/images/`: supplied portrait, an original embedded figure from the H I paper, and a 1200 × 627 share card made with the portrait and site typography.

The builder publishes only the intended `public/` assets and generated HTML into `dist/`. The validation script checks every local reference, anchors, document landmarks, Open Graph metadata, image attributes, and the full output-file allowlist.

## Optional privacy-friendly analytics

The site supports GoatCounter, which is free for reasonable personal-site use. Register the site at [GoatCounter](https://www.goatcounter.com/), then set `profile.goatCounterEndpoint` in `src/content.mjs` to the site's `/count` URL (for example, `https://example.goatcounter.com/count`). The tracking script is omitted while this value is empty. `node scripts/test-analytics.mjs` checks both inactive and configured output.

## Publishing

The public site is https://ericturnip.github.io/. GitHub Actions builds and validates the site on every push to `master`, then deploys only `dist/` to GitHub Pages. Repository Settings → Pages must use **GitHub Actions** as the source. The previous Jekyll theme and workflows are preserved in Git history.

AGU entries are submissions, not accepted presentations. They have no abstract text yet. The H I paper PDF remains unmodified; website copy reflects Eric's clarification that contributions were not equal. Only the polished HIShell repository is linked, along with Kp forecasting and PUNCH code. The unmodified résumé PDF contains the contact information supplied by Eric.
