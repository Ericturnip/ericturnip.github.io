import { profile } from './content.mjs';

export const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function layout({ title, description, body, path = '/' }) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escape(description)}">
  <meta name="theme-color" content="#fafbfc">
  <title>${escape(title)}</title>
  <link rel="canonical" href="https://ericturnip.github.io${path}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="top-line"></div>
  <header class="site-header wrap">
    <a class="wordmark" href="/" aria-label="Eric Chen, home">ec<span>.</span></a>
    <nav aria-label="Main navigation">
      <a href="/#work">Work</a>
      <a href="/#experience">Experience</a>
      <a href="/#outputs">Research outputs</a>
      <a href="/#about">About</a>
      <a class="nav-resume" href="${profile.resume}">Résumé <span aria-hidden="true">↗</span></a>
    </nav>
  </header>
  <main id="main">${body}</main>
  <footer class="site-footer wrap">
    <div><a class="footer-name" href="/">Eric Chen</a><p>Astrophysics & scientific computing.</p></div>
    <div class="footer-links"><a href="mailto:${profile.email}">Email</a><a href="${profile.linkedin}">LinkedIn</a><a href="https://github.com/Ericturnip/ericturnip.github.io">Site source</a></div>
    <p class="copyright">© 2026 Eric Chen</p>
  </footer>
</body>
</html>`;
}
