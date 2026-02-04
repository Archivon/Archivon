(function (global) {
  'use strict';

  function escapeHtml(s) {
    if (s == null || s === undefined) return '';
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  /**
   * Permite apenas URLs seguras (relativas ou http/https). Evita javascript: e data:.
   */
  function sanitizeUrl(url) {
    if (url == null || typeof url !== 'string') return '#';
    var t = url.trim().toLowerCase();
    if (t === '' || t === '#') return url;
    if (t.indexOf('javascript:') === 0 || t.indexOf('data:') === 0) return '#';
    if (t.indexOf('http:') === 0 || t.indexOf('https:') === 0 || t.indexOf('/') === 0 || t.indexOf('./') === 0 || t.indexOf('../') === 0) return url;
    if (t.indexOf('.') === -1 && t.indexOf(':') === -1) return url;
    return url;
  }

  global.ARCHIVON_SANITIZE = {
    escapeHtml: escapeHtml,
    sanitizeUrl: sanitizeUrl
  };
})(typeof window !== 'undefined' ? window : this);
