(function () {
  'use strict';

  /** Apply saved theme or system preference */
  function initTheme() {
    var stored = localStorage.getItem('archivon-theme');
    var preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (preferDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);

    var select = document.getElementById('theme-select');
    if (select) {
      select.value = theme;
      select.addEventListener('change', function () {
        var v = select.value;
        document.documentElement.setAttribute('data-theme', v);
        localStorage.setItem('archivon-theme', v);
      });
    }
  }

  /** Fill directory from config (optional) */
  function initDirectory() {
    var grid = document.getElementById('directory-grid');
    var config = window.ARCHIVON_CONFIG;
    if (!grid || !config || !config.directory) return;

    grid.innerHTML = '';
    var sanitizeUrl = (window.ARCHIVON_SANITIZE && window.ARCHIVON_SANITIZE.sanitizeUrl) ? window.ARCHIVON_SANITIZE.sanitizeUrl : function (u) { return u == null ? '#' : u; };
    var escapeHtml = (window.ARCHIVON_SANITIZE && window.ARCHIVON_SANITIZE.escapeHtml) ? window.ARCHIVON_SANITIZE.escapeHtml : function (s) { var d = document.createElement('div'); d.textContent = s == null ? '' : s; return d.innerHTML; };
    config.directory.forEach(function (column) {
      var col = document.createElement('div');
      col.className = 'directory-column';
      column.forEach(function (item) {
        var a = document.createElement('a');
        a.href = sanitizeUrl(item.href);
        a.textContent = item.label;
        col.appendChild(a);
      });
      grid.appendChild(col);
    });
  }

  /** Search na barra do header (à direita da nav, estilo Microsoft Learn) */
  function initSearchButton() {
    var btn = document.getElementById('btn-search');
    if (!btn) return;

    var headerActions = btn.closest('.header-actions');
    if (!headerActions) return;

    var searchInline = document.getElementById('search-overlay-inline');
    if (!searchInline) {
      searchInline = document.createElement('div');
      searchInline.id = 'search-overlay-inline';
      searchInline.className = 'search-overlay-inline';
      searchInline.setAttribute('role', 'search');
      searchInline.innerHTML =
        '<form class="search-overlay-form" action="index.html" method="get" role="search">' +
          '<input type="search" name="q" class="search-overlay-input" placeholder="Search" aria-label="Search" autocomplete="off">' +
        '</form>' +
        '<button type="button" class="search-overlay-close" id="search-overlay-close" aria-label="Close search">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
        '</button>';
      headerActions.appendChild(searchInline);
    }

    var overlayInput = searchInline.querySelector('.search-overlay-input');
    var closeBtn = document.getElementById('search-overlay-close');

    function openSearch() {
      headerActions.classList.add('header-search-open');
      if (overlayInput) {
        overlayInput.value = '';
        overlayInput.focus();
      }
    }

    function closeSearch() {
      headerActions.classList.remove('header-search-open');
    }

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openSearch();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeSearch);

    if (overlayInput) {
      overlayInput.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeSearch();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && headerActions.classList.contains('header-search-open')) closeSearch();
    });

    var header = btn.closest('.header');
    document.addEventListener('click', function (e) {
      if (!headerActions.classList.contains('header-search-open')) return;
      if (header && header.contains(e.target)) return;
      closeSearch();
    });
  }

  /** Documentation dropdown: open/close on click */
  function initNavDropdown() {
    var trigger = document.querySelector('.nav-dropdown-trigger');
    var dropdown = document.querySelector('.nav-dropdown');
    if (!trigger || !dropdown) return;

    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      dropdown.classList.toggle('nav-dropdown-open');
    });

    document.addEventListener('click', function (e) {
      if (dropdown.contains(e.target)) return;
      dropdown.classList.remove('nav-dropdown-open');
    });
  }

  initTheme();
  initDirectory();
  initSearchButton();
  initNavDropdown();
})();
