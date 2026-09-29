const base = () => window.hlx?.codeBasePath || '';

export function createNeurosparkXNavMain() {
  const main = document.createElement('main');
  const logo = `${base()}/assets/NeurosparkX/logo.svg`;

  const brand = document.createElement('div');
  brand.innerHTML = `<p><a href="/" title="NeurosparkX home"><img src="${logo}" alt="NeurosparkX" width="160" height="32"></a></p>`;

  const sections = document.createElement('div');
  const sectionsWrap = document.createElement('div');
  sectionsWrap.classList.add('default-content-wrapper');
  sectionsWrap.innerHTML = `
    <ul>
      <li><a href="/#platform">Platform</a></li>
      <li><a href="/#solutions">Solutions</a></li>
      <li><a href="/#industries">Industries</a>
        <ul>
          <li><a href="/#healthcare">Healthcare</a></li>
          <li><a href="/#finance">Financial Services</a></li>
          <li><a href="/#manufacturing">Manufacturing</a></li>
        </ul>
      </li>
      <li><a href="/#resources">Resources</a></li>
      <li><a href="/#company">Company</a></li>
    </ul>`;
  sections.append(sectionsWrap);

  const tools = document.createElement('div');
  tools.innerHTML = `
    <p class="button-wrapper"><a class="button secondary" href="/#signin">Sign in</a></p>
    <p class="button-wrapper"><a class="button primary" href="/#contact">Contact sales</a></p>`;

  main.append(brand, sections, tools);
  return main;
}

export function createNeurosparkXFooterMain() {
  const main = document.createElement('main');
  const logo = `${base()}/assets/NeurosparkX/logo.svg`;

  const section = document.createElement('div');
  section.classList.add('footer-grid');
  section.innerHTML = `
    <div class="footer-brand-col">
      <p><a href="/"><img src="${logo}" alt="NeurosparkX" width="140" height="28"></a></p>
      <p>Enterprise neural intelligence for regulated, global organizations.</p>
    </div>
    <div>
      <p><strong>Product</strong></p>
      <ul>
        <li><a href="/#platform">Platform</a></li>
        <li><a href="/#api">API</a></li>
        <li><a href="/#pricing">Pricing</a></li>
      </ul>
    </div>
    <div>
      <p><strong>Company</strong></p>
      <ul>
        <li><a href="/#about">About</a></li>
        <li><a href="/#careers">Careers</a></li>
        <li><a href="/#news">News</a></li>
      </ul>
    </div>
    <div>
      <p><strong>Legal</strong></p>
      <ul>
        <li><a href="/#privacy">Privacy</a></li>
        <li><a href="/#terms">Terms</a></li>
        <li><a href="/#security">Security</a></li>
      </ul>
    </div>`;

  const legal = document.createElement('div');
  legal.classList.add('footer-legal');
  legal.innerHTML = '<p>© 2026 NeurosparkX, Inc. All rights reserved.</p>';

  main.append(section, legal);
  return main;
}
