(function () {
  'use strict';

  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  var samples = window.ARCHIVON_SAMPLES || [];
  var sample = id ? samples.find(function (s) { return String(s.id) === String(id); }) : null;

  var titleEl = document.getElementById('sample-view-title');
  var dateEl = document.getElementById('sample-view-date');
  var descEl = document.getElementById('sample-view-desc');
  var tagsEl = document.getElementById('sample-view-tags');
  var codeEl = document.getElementById('sample-view-code');
  var langEl = document.getElementById('sample-view-lang');
  var notfoundEl = document.getElementById('sample-view-notfound');
  var contentEl = document.getElementById('sample-view-content');
  var breadcrumbTitleEl = document.getElementById('sample-breadcrumb-title');
  var codeBlock = document.getElementById('sample-view-code-block');
  var codeBlockCopyBtn = document.getElementById('code-block-copy');

  function escapeHtml(s) {
    if (s == null || s === undefined) return '';
    if (window.ARCHIVON_SANITIZE && window.ARCHIVON_SANITIZE.escapeHtml) return window.ARCHIVON_SANITIZE.escapeHtml(s);
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function setPageTitle(title) {
    if (title && document.title) document.title = title + ' — Archivon';
  }

  function copyCode() {
    if (!sample || !codeEl) return;
    navigator.clipboard.writeText(sample.code || '').then(function () {
      if (codeBlockCopyBtn) {
        var t = codeBlockCopyBtn.textContent;
        codeBlockCopyBtn.textContent = 'Copied!';
        setTimeout(function () { codeBlockCopyBtn.textContent = t; }, 2000);
      }
    });
  }

  if (!sample) {
    if (contentEl) contentEl.hidden = true;
    if (notfoundEl) notfoundEl.hidden = false;
    if (titleEl) titleEl.textContent = 'Sample not found';
  } else {
    if (notfoundEl) notfoundEl.hidden = true;
    if (titleEl) titleEl.textContent = sample.title;
    if (dateEl) {
      dateEl.textContent = sample.date;
      dateEl.setAttribute('datetime', sample.date);
    }
    if (descEl) descEl.innerHTML = escapeHtml(sample.description || '').replace(/\n/g, '<br>');
    if (tagsEl) {
      tagsEl.innerHTML = (sample.tags || []).map(function (t) {
        return '<span class="sample-tag">' + escapeHtml(t) + '</span>';
      }).join('');
    }
    if (codeEl) codeEl.textContent = sample.code || '';
    if (langEl) langEl.textContent = sample.language || 'text';
    setPageTitle(sample.title);
    if (breadcrumbTitleEl) breadcrumbTitleEl.textContent = sample.title;

    if (codeBlockCopyBtn) codeBlockCopyBtn.addEventListener('click', copyCode);
  }
})();
