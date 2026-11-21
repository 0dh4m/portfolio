/* ==========================================================================
   Projects page — renders all cards from projects-data.js with Filtering
   Dark/Light theme · EN/FR i18n · Scroll reveals · Dynamic Category Filters
   ========================================================================== */
(function () {
  'use strict';

  const root = document.documentElement;

  /* ===================== THEME (dark / light) ===================== */
  const themeBtn  = document.getElementById('themeToggle');
  const themeIcon = themeBtn.querySelector('i');

  function applyTheme(theme) {
    root.setAttribute('data-bs-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    themeIcon.className = theme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
  }
  applyTheme(
    localStorage.getItem('portfolio-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );
  themeBtn.addEventListener('click', () => {
    applyTheme(root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark');
  });

  /* ===================== I18N (EN / FR) ===================== */
  const langLabel = document.getElementById('langLabel');
  const langNames = { en: 'EN', fr: 'FR' };
  let currentLang = 'en';

  function t(key) {
    const val = key.split('.').reduce((obj, k) => (obj || {})[k], translations[currentLang]);
    return typeof val === 'string' ? val : '';
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
  }

  /* ===================== SCROLL REVEAL ===================== */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
    });
  }, { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ===================== RENDER PROJECT CARDS & FILTERING ===================== */
  const grid = document.getElementById('projectsGrid');
  let firstRender = true;
  let activeFilter = 'all';

  function renderProjects() {
    grid.innerHTML = '';
    const filtered = projectsData.filter(p => activeFilter === 'all' || p.category === activeFilter);
    filtered.forEach((p, idx) => {
      let demoLink = p.demo;
      if (p.id === 'movies') {
        demoLink = 'demos/movies/index.html';
      }
      if (p.id === 'pharmacare' && (!p.github || p.github.includes('portfolio'))) {
        p.github = 'https://github.com/0dh4m/pharmacare-pro-ai';
      }
      const demoExt = demoLink && demoLink !== '#';
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4 reveal' + (firstRender ? '' : ' visible');
      col.style.animation = `cardEntrance 0.35s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.04}s forwards`;
      col.innerHTML = `
        <article class="project-card card-custom h-100">
          <div class="project-thumb ${p.gradient}">
            <i class="bi ${p.icon}"></i>
            <span class="project-tag">${p.tag[currentLang] || p.tag.en}</span>
          </div>
          <div class="p-4 d-flex flex-column flex-grow-1">
            <h3 class="h5 fw-bold">${p.title[currentLang] || p.title.en}</h3>
            <p class="text-muted-custom flex-grow-1">${p.desc[currentLang] || p.desc.en}</p>
            <div class="d-flex flex-wrap gap-2 mb-3">
              ${p.tech.map(x => `<span class="tech-badge">${x}</span>`).join('')}
            </div>
            <div class="d-flex gap-2">
              <a href="${demoLink}" class="project-demo-btn flex-grow-1"${demoExt ? ' target="_blank" rel="noopener"' : ''}>
                <span>${t('projects.demo') || 'Live Demo'}</span>
                <i class="bi bi-box-arrow-up-right"></i>
              </a>
              ${p.github ? `
              <a href="${p.github}" target="_blank" rel="noopener" class="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center px-3 rounded-pill" title="GitHub Repository">
                <i class="bi bi-github fs-6"></i>
              </a>` : ''}
            </div>
          </div>
        </article>`;
      grid.appendChild(col);
      if (firstRender) io.observe(col);
    });
    firstRender = false;
    grid.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
  }

  // Filter click handler
  document.querySelectorAll('#projectFilters .btn-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#projectFilters .btn-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter || 'all';
      renderProjects();
    });
  });

  function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    root.setAttribute('lang', lang);
    root.setAttribute('dir', 'ltr');
    langLabel.textContent = langNames[lang];
    applyTranslations();
    renderProjects();
  }

  document.querySelectorAll('.lang-item').forEach(item => {
    item.addEventListener('click', e => { e.preventDefault(); setLanguage(item.dataset.lang); });
  });

  // Init language (this also renders the cards)
  setLanguage(localStorage.getItem('portfolio-lang') || 'en');

  /* ===================== BACK TO TOP ===================== */
  const backTop = document.getElementById('backToTop');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('show', window.scrollY > 500);
    }, { passive: true });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ===================== FOOTER YEAR ===================== */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
