# Eric Chen personal website

## Purpose and agreed direction

Rebuild the existing `Ericturnip/ericturnip.github.io` website from scratch for research collaborators and industry employers. Graduate admissions are not the current target. Preserve the GitHub Pages address and repository history. The first version should make Eric's contributions, scientific interests, engineering experience, and available work easy to assess.

The user approved the research-and-engineering portfolio direction, authorized linking all GitHub repositories, requested a portrait, and identified two COSPAR abstracts and the H I shell paper as presentable materials. The user also supplied metadata for two AGU December 2026 abstract submissions; their text is not yet available. The user subsequently requested including the existing Roman PowerPoint from Downloads in the local draft, with an updated version to replace it later. New roles should have minimal descriptions; SEB has a concrete antenna-tracking project.

## Experience and visual design

A focused homepage introduces Eric, shows selected work, and leads into concise project pages. White backgrounds, dark ink, a restrained blue accent, readable typography, and real research figures establish the visual direction. Use the supplied NASA portrait as the main personal image. Preserve the person and setting without generative alterations; layout may frame the original through CSS.

Navigation: Work, Experience, Research outputs, About, Resume. Use section links on the homepage and a clear home link on project pages. Layout must work on narrow screens, support keyboard navigation and reduced motion, and keep body text at least 16px. Avoid stock space imagery, decorative animations, proficiency meters, and empty sections.

## Homepage

1. Name, UC Berkeley astrophysics affiliation, portrait, and a short introduction connecting scientific computing, machine learning, and space systems. Describe interests without implying that all incoming roles have started substantive research.
2. Research & space systems contains four equal-level cards: Roman integrated modeling first, H I shell detection second, Kp forecasting third, and PUNCH data processing fourth. PUNCH links directly to `https://github.com/Ericturnip/SolarResearch`; the other three link to project pages. Foxit appears in a separate Industry software group with a project page. Use technical, subject-specific titles throughout, aimed at researchers and technical employers.
3. Compact experience timeline: Berkeley Lab/Lazuli, SEB, NASA Goddard, UCSD research, Tsinghua research, and Foxit. Describe Lazuli as an upcoming research role with details to follow. SEB text: "Working on rotating a ground radio dish to track a rocket during launch and maintain the radio link." Do not claim flight validation or completed performance improvements.
4. Research outputs: the two COSPAR abstracts, the June 23 H I paper, two AGU December 2026 submissions, and the existing Roman presentation. Roman links to the original PowerPoint and is labeled PPTX. AGU materials remain forthcoming without download links.
5. Brief About section with the UCSD-to-Berkeley path and hackathon organizing. Contact links and downloadable resume. No invented hobbies, career availability, or job-search claims.

## Project pages

Each uses the same lightweight structure: question or engineering problem, Eric's contribution, approach, outcomes and limitations, collaborators/affiliations, and available materials. Keep technical detail useful to both scientists and engineering teams.

### H I shell detection

Use this attribution:

> I carried out most of this research during my internship at Tsinghua University, then continued it for a data science course at UC San Diego, where Joseph Rodriguez contributed to the project.

The paper remains credited to Eric Chen and Joseph Rodriguez. Eric clarified that contributions were not equal and that he did most of the research. Remove equal-contribution claims from website copy; retain Joseph's co-authorship without inventing specific task ownership. The original paper PDF remains unchanged.

Describe standardized position-velocity cuts from THINGS data, a U-Net candidate finder, sky-plane aggregation, and the study of catalog selection effects. Use one or two existing paper figures with captions retaining evaluation context. Link `HIShell` and the June 23, 2026 draft paper.

Numerical claims must distinguish patch detection from pixel segmentation and validation from testing. Table 2 reports validation patch precision 0.80, recall 0.97, and F1 0.88 at threshold 0.40; do not call those numbers test-set accuracy. Avoid the resume's rounded "100%" as a standalone headline. Explain that candidates require follow-up, not that all detections are confirmed shells.

### Kp forecasting and heliophysics

Describe mapping forecast solar-wind drivers to Kp estimates and storm-watch signals up to five days ahead. Explain the emphasis on recall and the false-positive tradeoff without promising operational forecast accuracy. The July Kp report can inform copy but is not an additional downloadable output in the first version.

Include a separate paragraph for solar-jet research using Parker WISPR and a link to its COSPAR abstract. Avoid assigning a specific contribution to Eric that the abstract does not establish. Link the public `SolarResearch` repository as PUNCH data processing; do not label it as the Kp forecasting codebase or as the WISPR project itself.

### Roman integrated modeling

Use the supplied resume and the 10-slide `Eric Chen Presentation.pptx` in Downloads. Add it unchanged as `public/downloads/roman-integrated-modeling-slides.pptx` to the local draft, per the user’s updated instruction. Describe STOP log streaming, the standalone MATLAB refactor, structural frequency-response precomputation and interpolation. Attribute approximately 2× speedup with about 1% error to the presentation. Do not claim the file has received NASA clearance. No other NASA files are included. A later version can replace this stable download path.

### Foxit LLM integration

Describe the MCP bridge, Qwen/API integration, and local evaluation of tool selection and multistep execution from the resume. No invented public demo, repository, throughput, or evaluation results.

## Research outputs and sources

Use a "Research outputs" heading instead of implying all materials are peer-reviewed publications. Preserve titles and author order in the source documents. Use concise topic labels for scanning, with full titles in each entry or linked project page.

| Output | Source | Display status |
| --- | --- | --- |
| Kp forecast to five days | `D3.7-0013-26-oral.pdf` in Desktop/Helio Research/Abstracts | COSPAR 2026 abstract; co-author |
| Solar jetting in Parker WISPR data | `Listiak_nopref_40311.pdf` in the same folder | COSPAR 2026 abstract; co-author |
| The Sea Shells of the Universe: Automating H I Shell Detection | `The_Sea_Shells_of_the_Universe__Automating_Shell_Detection__5_ (1).pdf` in Downloads | Research/course-project paper, draft dated June 23, 2026 |
| Roman presentation | `Eric Chen Presentation.pptx` in Downloads | Summer internship presentation · PPTX |

### AGU December 2026 submissions

Use the following exact titles and submission IDs supplied by the user:

| Submission ID | Title | First author |
| --- | --- | --- |
| 2095467 | Interplanetary Scintillation Data and Thomson Scattering Forecasts of Transient Solar Wind Structures | Bernard Jackson |
| 2095723 | Solar Jets Viewed in Parker WISPR Data and Their Contribution to the Composition of the Solar Wind | Unity Listiak |

Label both "AGU, December 2026 · Submitted; abstract text forthcoming." These are submissions, not confirmed accepted presentations or publications. Display the supplied first author as "First author" rather than inventing the complete author list, Eric's author position, presentation format, or results. Retain the submission IDs as secondary metadata. Do not create an abstract summary from the title or reuse COSPAR text as AGU text. Do not invent program URLs, DOI links, or PDF download buttons. The user supplied first-author emails for reference; the public entries need only names, not those contact addresses.

The COSPAR abstract PDFs express presentation preferences, not proof of the final presentation format. Do not claim Eric delivered an oral talk or poster. Preserve the original PDFs without changing authorship or scientific content.

Portrait source: `IMG_9560.jpg` on Desktop. Resume source: `Eric Chen Resume.pdf` on Desktop. Only intended site assets are copied into deployable output. The page contact area uses professional links and email, not street address or phone number. Extract LinkedIn from the resume's hyperlink annotations before including it; omit if no verified URL is available.

Shared page metadata includes the Open Graph fields LinkedIn needs (`og:title`, `og:description`, `og:url`, and `og:image`). The 1200 × 627 share card uses the existing Building 29 portrait and site typography and palette; no generated artwork.

## GitHub links

Link the selected repositories, following the user's latest revision:

- `https://github.com/Ericturnip/HIShell` — public H I shell research code.
- `https://github.com/Ericturnip/SolarResearch` — public PUNCH data-processing code.
- `https://github.com/Ericturnip/ericturnip.github.io` — public website source, best placed in the footer.
- `https://github.com/Ericturnip/kp-index-forecasting` — newly created public Kp repository under Eric's account. The local research project has a different upstream; a selected source snapshot is prepared in a separate checkout. The user explicitly approved publishing the prepared snapshot; commit 8406a4e is now published on main.

Do not link the active `HIShells` project; only `HIShell` accompanies the paper. The previous visibility change to `HIShells` remains in place, since the user asked to remove its website link, not change its visibility.

## Personal introduction revision

Show “UC Berkeley · Class of 2028” above the name and explicitly describe Eric as a junior. Use “Astrophysics, instrumentation, and scientific computing” as a two-line introduction. Caption the portrait “Outside Building 29 at Goddard Space Flight Center.” Do not claim a cleanroom size ranking. Use “Where I've worked” for experience. Remove LIVE AI and its attendance claim. Email links open browser-based Gmail compose windows; the address remains visible for copying. Do not add a phone number to page copy. The user-provided résumé PDF remains unchanged.

Also link the GitHub profile for future projects. Do not add a backend or live API integration just to display repository links.

## Implementation architecture

Use a static site with shared templates/content and CSS, producing standalone HTML pages and an explicit public asset directory. A small build script can assemble the homepage and four project pages into `dist/`; no client framework or server is needed. The output must be GitHub Pages-compatible, with stable project paths, a 404 page, and meaningful page titles/descriptions.

Keep source content separate from shared layout so future work entries and the cleared Roman slide link can be updated without redesigning the site. Use ordinary anchors for navigation and PDF links. Build only an allowlist of intended public files; exclude planning docs, machine paths, drafts not selected for publication, and the legacy theme assets from deployed output.

The existing Jekyll template is replaced in the rebuild branch; repository history preserves the prior version. Update the old theme build configuration for the selected static output. GitHub Pages remains the production destination. Any Sites preview must remain secondary and must not replace the requested github.io address.

## Verification and delivery

Check the built routes, internal anchors, downloadable files, page metadata, image dimensions, accessibility basics in source, and that the public output contains only intended assets. Verify each repository URL's configured visibility. Ensure the Roman download resolves and is labeled PowerPoint/PPTX rather than PDF.

Verify attribution and metric wording against the source documents and user corrections. Present a meaningful local preview when available. Perform browser interaction/visual testing only if requested, following the Sites skill. Run the production build and inspect its result before claiming completion.

Keep the rebuild reviewable on a `codex/` branch. Publishing the replacement and changing live deployment settings are a distinct delivery step after the complete site is ready to review; do not replace the live site during discovery.

## Excluded from the first version

Blog, contact form, analytics, login, content management system, fabricated demos, extra downloadable Kp drafts, additional NASA material beyond the explicitly requested deck, detailed claims for roles not yet begun, and speculative interests. A short personal-interest sentence can be added later if Eric supplies one.

## Review status

The user authorized building the first draft for inspection. The local draft implements this design; publication remains a later step.
