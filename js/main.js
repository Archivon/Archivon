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
    config.directory.forEach(function (column) {
      var col = document.createElement('div');
      col.className = 'directory-column';
      column.forEach(function (item) {
        var a = document.createElement('a');
        a.href = item.href;
        a.textContent = item.label;
        col.appendChild(a);
      });
      grid.appendChild(col);
    });
  }

  /** Search button: focus hero input */
  function initSearchButton() {
    var btn = document.getElementById('btn-search');
    var input = document.querySelector('.hero-search-input');
    if (btn && input) {
      btn.addEventListener('click', function () {
        input.focus();
      });
    }
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
