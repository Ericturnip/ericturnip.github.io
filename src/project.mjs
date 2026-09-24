import { escape } from './layout.mjs';
import { projects, outputs } from './content.mjs';

const material = (href, label) => `<a class="material-link" href="${href}">${label}<span aria-hidden="true">↗</span></a>`;
const section = (title, content) => `<section class="project-section"><h2>${title}</h2>${content}</section>`;

const stories = {
  'hi-shells': {
    intro: 'A machine-learning pipeline for finding expanding H I structures in nearby galaxies, with a closer look at the selection effects behind their catalog labels.',
    context: 'Tsinghua University · UC San Diego', date: '2025–2026',
    body: section('H I shell detection in position–velocity data', `<p>Supernovae and stellar winds push neutral hydrogen into expanding shells. In radio observations, those structures can appear as rings or arcs in position–velocity slices. Finding them by hand is slow, and their appearance depends on resolution and viewing conditions.</p><p>The project uses THINGS radio astronomy data and the Bagetakos H I hole catalog to build a first-pass candidate finder.</p>`)
      + section('My contribution & collaboration', `<p>I carried out most of this research during my internship at Tsinghua University, then continued it for a data science course at UC San Diego, where Joseph Rodriguez contributed to the project.</p><p>The resulting paper, <em>The Sea Shells of the Universe: Automating H I Shell Detection</em>, is co-authored by Eric Chen and Joseph Rodriguez. It brings together the detection pipeline and a statistical study of the catalog’s shell types.</p>`)
      + section('U-Net segmentation & sky-plane aggregation', `<ol class="method-list"><li><strong>Standardize the observations.</strong> Convert H I cubes into position–velocity cuts with a shared physical scale, then construct catalog-based labels.</li><li><strong>Find candidate structure.</strong> Train a U-Net with a loss that gives extra weight to missed detections, then calibrate a probability threshold.</li><li><strong>Return to the sky.</strong> Aggregate evidence from multiple cuts into ranked candidate maps for each galaxy.</li><li><strong>Question the labels.</strong> Use statistical comparisons to investigate whether catalog types reflect distinct physical populations or observational detectability.</li></ol>`)
      + `<figure class="science-figure"><a href="/downloads/hi-shell-detection-2026.pdf"><img src="/images/hi-shell-predictions.png" alt="Position–velocity inputs with catalog contours and U-Net predictions, showing clean overlaps alongside less precise masks" loading="lazy" width="2254" height="3754"></a><figcaption>Figure 5 from the June 2026 paper: predictions and catalog labels on held-out cuts. The prediction display threshold is 0.075 for visibility, distinct from the calibrated operating threshold of 0.40.</figcaption></figure>`
      + section('Validation metrics & selection effects', `<p>At the calibrated threshold of 0.40, the paper reports <strong>0.97 patch recall, 0.80 precision, and 0.88 F1 on the validation set</strong>. These scores measure candidate detection within a patch, rather than the accuracy of every pixel in a segmentation mask.</p><p>The model is a screening tool: high recall helps retain interesting structures for follow-up, while false positives and uncertain boundaries still need attention. The catalog analysis also suggests that observed shell types are strongly influenced by detectability, making the labels useful context rather than an unquestioned physical classification.</p>`),
    resources: material('/downloads/hi-shell-detection-2026.pdf', 'Read the paper · PDF') + material('https://github.com/Ericturnip/HIShell', 'Paper code · HIShell'),
    note: 'Research/course-project paper · Draft dated June 23, 2026',
  },
  heliophysics: {
    intro: 'Working across geomagnetic forecasting, solar-jet research, and the pipelines that make heliospheric observations usable.',
    context: 'UC San Diego · Astrophysics research', date: '2025–present',
    body: section('Five-day geomagnetic activity forecasting', `<p>Conditions in the solar wind shape geomagnetic activity near Earth. Our UCSD research explores how forecast magnetic-field components, velocity, and density can be used to estimate the Kp index up to five days ahead.</p><p>My work includes neural-network models for geomagnetic forecasting and data pipelines for collecting and processing NASA observations.</p>`)
      + section('Kp estimation & storm-detection tradeoffs', `<p>The model maps forecast solar-wind drivers to Kp estimates for the corresponding future time. A central aim is to retain the signal of elevated geomagnetic activity across the forecast horizon.</p><p>That requires balancing missed storms against false alarms. A model designed to catch more events can also flag many quiet intervals, so recall alone is not a complete picture of forecast quality. The work treats that precision–recall tradeoff as a scientific question to evaluate, not just a score to maximize.</p>`)
      + section('Solar jets & the solar wind', `<p>I’m also a co-author on our COSPAR 2026 abstract about solar jets viewed in Parker Solar Probe’s WISPR data. The study asks how much these events contribute to the solar wind’s mass and energy, using observations and three-dimensional reconstruction.</p><p>The first author is Unity Listiak. The abstract is available below, alongside the Kp forecasting abstract led by Bernard Jackson.</p>`)
      + section('Research software: PUNCH data processing', `<p>My public <em>SolarResearch</em> repository contains a PUNCH data-processing pipeline. It handles FITS observations, spatial and temporal filtering, background removal, and exports for coronal tomography.</p><p>The repository includes polarized and unpolarized workflows and diagnostic tools. It is a separate software contribution within the broader heliophysics work.</p>`)
      + section('Upcoming conference submissions', `<div class="submission-note"><p class="eyebrow">AGU · DECEMBER 2026</p>${outputs.filter(o=>o.type==='AGU submission').map(o=>`<div><h3>${escape(o.title)}</h3><p>${escape(o.authors)}</p><p class="output-status">${escape(o.status)}</p></div>`).join('')}</div>`),
    resources: material('https://github.com/Ericturnip/kp-index-forecasting', 'Kp forecasting repository · GitHub') + material('/downloads/cospar-2026-kp-forecast.pdf', 'Kp forecast abstract · PDF') + material('/downloads/cospar-2026-solar-jets.pdf', 'Solar jets abstract · PDF') + material('https://github.com/Ericturnip/SolarResearch', 'PUNCH processing code · GitHub'),
    note: 'COSPAR 2026 abstracts · AGU December 2026 submissions',
  },
  roman: {
    intro: 'Improving the simulation workflows used to understand how structural behavior affects the Roman Space Telescope’s optical performance.',
    context: 'NASA Goddard · Integrated Modeling Intern', date: 'June–August 2026',
    body: section('Structural, thermal & optical performance modeling', `<p>Telescope performance depends on more than the optics alone. Structural motion, thermal effects, and vibration can affect the measurements an observatory makes.</p><p>During my internship with the Roman Space Telescope team at NASA Goddard, I worked on integrated modeling workflows involving structural dynamics and jitter analysis.</p>`)
      + section('Real-time STOP pipeline log streaming', `<p>I implemented real-time log streaming for the Structural, Thermal, and Optical Performance (STOP) pipeline, enabling continuous remote monitoring of simulation progress.</p><p>This work made long-running simulations easier to follow as they ran, bringing their progress into view without waiting for the complete run to finish.</p>`)
      + section('JittTool refactoring & frequency-response interpolation', `<p>I refactored a monolithic MATLAB analysis script into a standalone function with explicit inputs and analysis-specific error handling.</p><p>To reduce repeated matrix solves, I changed the calculation order: precompute the structural frequency response on a frequency grid, then interpolate it at disturbance frequencies for the sampled reaction-wheel speeds. The presentation reports approximately 2× faster analysis with about 1% error compared with the original method.</p>`)
      + section('Presentation', `<div class="presentation-material"><span class="eyebrow">SUMMER 2026 INTERNSHIP</span><h3>STOP Pipeline and Jitter Analysis</h3><p>The slides cover distributed simulation log streaming, the JittTool refactor, and frequency-response precomputation.</p><p><a class="text-link" href="/downloads/roman-integrated-modeling-slides.pptx">Download presentation · PPTX <span aria-hidden="true">↗</span></a></p></div>`),
    resources: material('/downloads/roman-integrated-modeling-slides.pptx', 'Presentation · PowerPoint') + material('/downloads/eric-chen-resume.pdf', 'Experience summary · Résumé PDF'),
    note: 'Summer 2026 internship presentation',
  },
  foxit: {
    intro: 'Connecting a language model to real software tools, and evaluating how it chooses and combines them.',
    context: 'Foxit Software · LLM Integration Intern', date: 'June–September 2025',
    body: section('Qwen integration with Foxit APIs', `<p>Language-model applications become more useful when they can act through existing software APIs. They also become harder to evaluate: choosing the right tool is only one part of completing a multistep task.</p><p>At Foxit, I worked on connecting Qwen to the Foxit API suite through the Model Context Protocol (MCP).</p>`)
      + section('MCP bridge server', `<p>I developed an MCP bridge server that enabled the model to invoke tools across Foxit APIs and carry out multistep workflows. This connected the model’s tool-use decisions to the software operations needed to execute them.</p>`)
      + section('Tool-selection & orchestration evaluation', `<p>I built a local evaluation framework to test tool selection and multistep orchestration. The focus was on the complete workflow: how the model chooses tools and coordinates their execution across a task.</p><p>The project brought together API integration, model tooling, and evaluation, with an emphasis on making behavior observable and testable.</p>`),
    resources: material('/downloads/eric-chen-resume.pdf', 'Experience summary · Résumé PDF'),
    note: 'Industry internship · Summer 2025',
  },
};

export function projectPage(project) {
  const story = stories[project.slug];
  if (!story) throw new Error(`Missing project story: ${project.slug}`);
  const localProjects = projects.filter(p => !p.externalHref);
  const next = localProjects[(localProjects.indexOf(project) + 1) % localProjects.length];
  return `<div class="wrap project-page">
    <a class="back-link" href="/#work"><span aria-hidden="true">←</span> Selected work</a>
    <header class="project-header"><p class="eyebrow">${project.category}</p><h1>${escape(project.shortTitle)}</h1><p class="project-intro">${escape(story.intro)}</p><div class="project-meta"><span>${escape(story.context)}</span><span>${story.date}</span></div></header>
    <div class="project-body"><article class="project-story" aria-label="Project details">${story.body}</article><aside class="project-resources" aria-label="Project materials"><p class="eyebrow">EXPLORE THE WORK</p>${story.resources}<p class="resource-note">${escape(story.note)}</p><ul class="tags" aria-label="Project topics">${project.tags.map(t=>`<li>${escape(t)}</li>`).join('')}</ul></aside></div>
    <a class="next-project" href="/work/${next.slug}/"><span class="eyebrow">NEXT PROJECT</span><span>${escape(next.shortTitle)} <span aria-hidden="true">↗</span></span></a>
  </div>`;
}
