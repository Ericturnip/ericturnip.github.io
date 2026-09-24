# Personal Website Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Deliver a complete local first draft for Eric to inspect, without publishing.

**Architecture:** A dependency-free static generator consumes structured content and shared templates, emitting an allowlisted `dist/` directory. All routes work as ordinary HTML with no client JavaScript dependency.

**Tech Stack:** Node.js, HTML, CSS, original supplied JPEG/PNG/PDF assets.

**Spec:** `docs/superpowers/specs/2026-09-23-personal-website-design.md`

## Global Constraints

- Keep the GitHub Pages production address unchanged; this turn delivers a local draft.
- Preserve original portrait and PDFs. Exclude uncleared Roman material.
- Label AGU submissions and unavailable materials accurately.
- Retain the Tsinghua origin, UCSD extension, and coauthored paper attribution.
- Use ordinary navigation, responsive layout, accessible text and focus indicators.
- New roles get brief copy; no invented achievements.

## Review Focus

- All internal routes, anchor links, and downloads resolve, including nested project routes.
- Public output excludes local file paths, planning docs, and unapproved materials.
- AGU entries have submission status and no fabricated abstracts or links.
- Metrics distinguish calibration/validation from testing and mention tradeoffs.
- Long research titles and the portrait have explicit responsive CSS behavior.

## Task 1: Meaningful homepage preview

Files: `scripts/build.mjs`, `src/layout.mjs`, `src/home.mjs`, `src/content.mjs`, `public/style.css`, `public/images/`, `public/downloads/`, `package.json`.

Interfaces: content exports `projects`, `outputs`, `experience`, and `profile`; layout exports `layout({title,description,body,path})`; home exports `home()`; build writes standalone HTML to `dist/` and copies only `public/`.

- [x] Copy the portrait, current resume, two COSPAR abstracts, newer H I paper, and an embedded H I figure. Extract LinkedIn from the resume.
- [x] Implement shared metadata, navigation, footer, and a coherent homepage slice with the personal introduction, portrait, and selected work.
- [x] Build with `node scripts/build.mjs`; check generated entrypoint and asset presence.
- [x] Start a retained local server at `http://127.0.0.1:4173`, request that exact URL, and open it in Codex before expanding the draft.

## Task 2: Complete content and project routes

Files: `src/content.mjs`, `src/home.mjs`, `src/project.mjs`, `public/style.css`, `scripts/build.mjs`, `README.md`, `.gitignore`.

Interfaces: `projectPage(project)` produces project body HTML for each content record's unique `slug`; links use `/work/<slug>/`. The homepage uses `#work`, `#experience`, `#outputs`, and `#about` anchors.

- [x] Add four complete project pages, experience, all output entries, About, public/private repository labels, and a helpful 404 page.
- [x] Include the original scientific figure and full download titles; all empty materials remain plain text.
- [x] Add mobile layout and text-wrapping rules. Use no client scripts or unnecessary UI controls.
- [x] Rebuild and validate every generated page and local reference with an HTML parser. Check for duplicate IDs, missing image alt text, and unexpected output files.
- [x] Keep legacy template files outside `dist/` for the draft; defer removal and replacement of production CI until publishing is requested. Document the simple build/preview commands.

## Task 3: Review and deliver

- [x] Run the complete build and static integrity validation, inspect diffs, and check source syntax.
- [x] Request one independent source review while checking the served routes and asset responses locally. Resolve material findings.
- [x] Keep the preview server available for Eric, and deliver its URL. No remote push, deployment, or changes to GitHub Pages settings.

## Execution rulings and progress

- User explicitly requested making the first draft for inspection; proceed directly with local implementation rather than another plan-approval exchange.
- The fresh task-specific clone is already on `codex/personal-site-rebuild`, with a clean baseline. Use this isolated checkout without adding another worktree.
- Static presentation changes use build, link, asset, and content verification; no redundant unit tests for markup or CSS, per developer guidance.
- The first-draft request scopes delivery to local review. Hosting and production CI changes are deferred, and the server remains running so the delivered preview works.

- Task 1 complete: original assets copied, meaningful homepage built, localhost returned HTTP 200, preview opened in Codex. Server session 79900 remains running for review.
- Task 2 complete: six generated HTML pages, all requested content and downloads, responsive styles, and source documentation. Added PUNCH as a separate selected-work entry per user steering.
- Task 3 review: independent source review found no critical or important issues. Corrected intrinsic figure dimensions and body text sizes. Static checker passed for six pages, 131 references, and the 15-file public allowlist. No browser testing was requested; rendered appearance is left for user inspection. External links use verified supplied/profile/repository URLs; no external-availability claim is made.

## Draft revision requested after inspection

- Reorganized selected work into Research & space systems (Roman first, H I, Kp, PUNCH) and Industry software (Foxit). PUNCH uses the same card component and links straight to SolarResearch.
- Replaced abstract project titles and surrounding slogan headings with technical subject names.
- Added the user-requested original 10-slide Roman presentation from Downloads, without modifying it. Updated the output allowlist and PowerPoint link labels. This supersedes the earlier Roman-placeholder instruction for the local draft.
- Changed Ericturnip/HIShells to public using GitHub settings after the user completed required passkey verification. GitHub displayed “This repository is currently public.” Removed private labels and linked both H I code repositories from the project page.
- Kept production website deployment unchanged. The local draft remains the review surface.
