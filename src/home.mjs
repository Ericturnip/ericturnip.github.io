import { projects, profile, outputs, experience, repositories } from './content.mjs';
import { escape } from './layout.mjs';

export function projectCards(group) {
  return projects.filter(p=>p.group === group).map(p => `<article class="project-card">
    <div class="card-top"><span class="eyebrow">${p.category}</span><span class="project-number">${p.number}</span></div>
    <h3><a href="${p.externalHref || `/work/${p.slug}/`}">${escape(p.title)}</a></h3>
    <p class="project-description">${escape(p.description)}</p>
    <p class="project-affiliation">${escape(p.affiliation)}${p.year ? ` <span>· ${p.year}</span>` : ''}</p>
    <div class="card-bottom"><ul class="tags" aria-label="Topics">${p.tags.map(t=>`<li>${escape(t)}</li>`).join('')}</ul>
    <a class="text-link" href="${p.externalHref || `/work/${p.slug}/`}" aria-label="${p.externalHref ? 'View code for' : 'Read about'} ${escape(p.shortTitle)}">${p.externalHref ? 'View on GitHub' : 'View project'} <span aria-hidden="true">↗</span></a></div>
  </article>`).join('');
}

export function home() {
  return `<section class="hero wrap" aria-labelledby="intro-title">
    <div class="hero-copy">
      <p class="eyebrow hero-eyebrow">ASTROPHYSICS / SCIENTIFIC COMPUTING</p>
      <h1 id="intro-title">Eric Chen<span class="blue">.</span></h1>
      <p class="hero-lead">Astrophysics, scientific computing,<br>and space instrumentation.</p>
      <p class="hero-description">I’m an astrophysics student at UC Berkeley. My work spans telescope integrated modeling, machine learning for astronomical data, geomagnetic forecasting, and LLM tool integration.</p>
      <div class="hero-links"><a class="primary-link" href="#work">Explore my work <span aria-hidden="true">↓</span></a><a class="text-link" href="mailto:${profile.email}">Get in touch <span aria-hidden="true">↗</span></a></div>
      <p class="location">UC Berkeley <span aria-hidden="true">/</span> Berkeley, California</p>
    </div>
    <figure class="portrait"><img src="/images/eric-chen.jpg" alt="Eric Chen standing outside a NASA building" width="4284" height="5712" fetchpriority="high"><figcaption><span>Outside NASA</span><span>Eric Chen</span></figcaption></figure>
  </section>
  <section id="work" class="work-section section wrap" aria-labelledby="work-title">
    <div class="section-heading"><div><p class="eyebrow">SELECTED WORK</p><h2 id="work-title">Research & space systems</h2></div><p>Integrated modeling, scientific ML,<br>and heliophysics.</p></div>
    <div class="project-grid">${projectCards('research')}</div>
    <div class="industry-group" aria-labelledby="industry-title"><div class="section-heading"><div><p class="eyebrow">INDUSTRY EXPERIENCE</p><h2 id="industry-title">Industry software</h2></div></div><div class="project-grid industry-grid">${projectCards('industry')}</div></div>
  </section>
  <section id="experience" class="section wrap" aria-labelledby="experience-title">
    <div class="section-heading"><div><p class="eyebrow">EXPERIENCE</p><h2 id="experience-title">Research & engineering appointments</h2></div><a class="text-link" href="${profile.resume}">Full résumé <span aria-hidden="true">↗</span></a></div>
    <div class="experience-list">${experience.map(e=>`<article class="experience-row">
      <p class="experience-date">${e.date}</p>
      <div class="experience-organization"><h3>${e.href ? `<a href="${e.href}">${escape(e.organization)}</a>` : escape(e.organization)}</h3>${e.team?`<p>${escape(e.team)}</p>`:''}${e.state?`<span class="state-label">${e.state}</span>`:''}</div>
      <div class="experience-description"><h4>${escape(e.role)}</h4><p>${escape(e.description)}</p></div>
    </article>`).join('')}</div>
  </section>
  <section id="outputs" class="section wrap" aria-labelledby="outputs-title">
    <div class="section-heading"><div><p class="eyebrow">RESEARCH OUTPUTS</p><h2 id="outputs-title">Papers, abstracts & presentations</h2></div></div>
    <div class="output-list">${outputs.map(o=>`<article class="output-row">
      <div class="output-type"><span>${escape(o.type)}</span><p>${escape(o.date)}</p></div>
      <div class="output-content"><h3>${o.href?`<a href="${o.href}">${escape(o.title)}</a>`:escape(o.title)}</h3><p class="output-authors">${escape(o.authors)}</p><p class="output-status">${escape(o.status)}</p></div>
      <div class="output-action">${o.href?`<a class="pdf-link" href="${o.href}" aria-label="${o.format === 'PPTX' ? 'Download PowerPoint' : 'Read PDF'}: ${escape(o.title)}">${o.format || 'PDF'} <span aria-hidden="true">↗</span></a>`:'<span class="no-file">Forthcoming</span>'}</div>
    </article>`).join('')}</div>
  </section>
  <section id="about" class="section wrap about-section" aria-labelledby="about-title">
    <div class="about-copy"><p class="eyebrow">ABOUT</p><h2 id="about-title">Background & research interests</h2>
      <p>I’m studying astrophysics at UC Berkeley after two years at UC San Diego. My work has taken me from radio astronomy and solar-wind data to telescope simulations and language-model tooling.</p>
      <p>I like problems that call for both a physical understanding of a system and the practical work of building software to study it. Python and MATLAB are my main tools, with machine learning and scientific data processing woven into much of my research.</p>
      <p>Beyond my own projects, I’ve helped organize the LIVE AI Best Coast Hackathon at UCSD, coordinating speakers, student organizers, and event logistics for more than 100 participants.</p>
      <div class="about-contact"><a class="text-link" href="mailto:${profile.email}">${profile.email} <span aria-hidden="true">↗</span></a><a class="text-link" href="${profile.linkedin}">LinkedIn <span aria-hidden="true">↗</span></a></div>
    </div>
    <aside class="code-aside" aria-labelledby="code-title"><p class="eyebrow">CODE & REPOSITORIES</p><h3 id="code-title">Research code</h3>
      <ul class="repo-list">${repositories.map(r=>`<li><a href="${r.href}">${r.name} <span aria-hidden="true">↗</span></a><p>${escape(r.description)}</p></li>`).join('')}</ul>
      <a class="text-link" href="${profile.github}">GitHub profile <span aria-hidden="true">↗</span></a>
    </aside>
  </section>`;
}
