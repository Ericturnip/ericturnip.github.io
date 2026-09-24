import { profile } from './content.mjs';

export const escape = (value) => String(value).replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function layout({ title, description, body, path = '/' }) {
  const pageUrl = new URL(path, 'https://ericturnip.github.io').href;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escape(description)}">
  <meta name="theme-color" content="#fafbfc">
  <title>${escape(title)}</title>
  <link rel="canonical" href="${escape(pageUrl)}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Eric Chen">
  <meta property="og:title" content="${escape(title)}">
  <meta property="og:description" content="${escape(description)}">
  <meta property="og:url" content="${escape(pageUrl)}">
  <meta property="og:image" content="${escape(profile.shareImage)}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="627">
  <meta property="og:image:alt" content="Eric Chen, astrophysics junior at UC Berkeley, Class of 2028">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escape(title)}">
  <meta name="twitter:description" content="${escape(description)}">
  <meta name="twitter:image" content="${escape(profile.shareImage)}">
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
    <div><a class="footer-name" href="/">Eric Chen</a><p>Astrophysics · Instrumentation · Scientific computing</p></div>
    <div class="footer-links"><a href="${escape(profile.gmailComposeUrl)}" target="_blank" rel="noopener noreferrer" aria-label="Compose email in Gmail, opens in a new tab">Email via Gmail</a><a href="${profile.linkedin}">LinkedIn</a><a href="https://github.com/Ericturnip/ericturnip.github.io">Site source</a></div>
    <p class="copyright">© 2026 Eric Chen</p>
  </footer>
</body>
</html>`;
}
