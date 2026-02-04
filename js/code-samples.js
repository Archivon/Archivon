(function () {
  'use strict';

  var samples = window.ARCHIVON_SAMPLES || [];
  var gridEl = document.getElementById('samples-grid');
  var countEl = document.getElementById('samples-results-count');
  var emptyEl = document.getElementById('samples-empty');
  var searchInput = document.getElementById('samples-search');
  var selectedTopics = {};
  var selectedLangs = {};

  function getUniqueTags() {
    var topics = {};
    var langs = {};
    samples.forEach(function (s) {
      (s.tags || []).forEach(function (tag) {
        topics[tag] = true;
        langs[tag] = true;
      });
    });
    return { topics: Object.keys(topics).sort(), langs: Object.keys(langs).sort() };
  }

  function renderFilters() {
    var uniq = getUniqueTags();
    var topicsList = document.getElementById('filter-topics-list');
    var langsList = document.getElementById('filter-langs-list');
    if (topicsList) {
      topicsList.innerHTML = uniq.topics.map(function (t) {
        return '<label class="samples-checkbox"><input type="checkbox" data-filter="topic" value="' + escapeHtml(t) + '"> ' + escapeHtml(t) + '</label>';
      }).join('');
    }
    if (langsList) {
      langsList.innerHTML = uniq.langs.map(function (l) {
        return '<label class="samples-checkbox"><input type="checkbox" data-filter="lang" value="' + escapeHtml(l) + '"> ' + escapeHtml(l) + '</label>';
      }).join('');
    }
    [topicsList, langsList].forEach(function (list) {
      if (!list) return;
      list.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
        cb.addEventListener('change', applyFilters);
      });
    });
  }

  function escapeHtml(s) {
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function getSearchQuery() {
    return (searchInput && searchInput.value) ? searchInput.value.trim().toLowerCase() : '';
  }

  function getSelectedFilters() {
    var topics = [];
    var langs = [];
    document.querySelectorAll('#filter-topics-list input:checked').forEach(function (cb) {
      topics.push(cb.value);
    });
    document.querySelectorAll('#filter-langs-list input:checked').forEach(function (cb) {
      langs.push(cb.value);
    });
    return { topics: topics, langs: langs };
  }

  function applyFilters() {
    var query = getSearchQuery();
    var filters = getSelectedFilters();
    var filtered = samples.filter(function (s) {
      var matchQuery = !query || (s.title + ' ' + (s.description || '') + ' ' + (s.tags || []).join(' ')).toLowerCase().indexOf(query) >= 0;
      var matchTopic = filters.topics.length === 0 || (s.tags || []).some(function (t) { return filters.topics.indexOf(t) >= 0; });
      var matchLang = filters.langs.length === 0 || (s.tags || []).some(function (l) { return filters.langs.indexOf(l) >= 0; });
      return matchQuery && matchTopic && matchLang;
    });
    renderGrid(filtered);
    if (countEl) countEl.textContent = filtered.length + ' result' + (filtered.length !== 1 ? 's' : '');
    if (emptyEl) emptyEl.hidden = filtered.length > 0;
  }

  function renderGrid(list) {
    if (!gridEl) return;
    gridEl.innerHTML = list.map(function (s) {
      var tagsHtml = (s.tags || []).map(function (t) {
        return '<span class="sample-tag">' + escapeHtml(t) + '</span>';
      }).join('');
      return (
        '<article class="sample-card">' +
          '<a href="code-samples/view.html?id=' + encodeURIComponent(s.id) + '" class="sample-card-link">' +
            '<h3 class="sample-card-title">' + escapeHtml(s.title) + '</h3>' +
            '<time class="sample-card-date" datetime="' + escapeHtml(s.date) + '">' + escapeHtml(s.date) + '</time>' +
            '<p class="sample-card-desc">' + escapeHtml(s.description || '') + '</p>' +
            '<div class="sample-card-tags">' + tagsHtml + '</div>' +
          '</a>' +
          '<button type="button" class="sample-card-add" aria-label="Add to collection" title="Add to collection">+ Add</button>' +
        '</article>'
      );
    }).join('');
  }

  function init() {
    renderFilters();
    applyFilters();
    if (searchInput) {
      searchInput.addEventListener('input', applyFilters);
      searchInput.addEventListener('change', applyFilters);
    }
    var form = document.querySelector('.samples-search-form');
    if (form) form.addEventListener('submit', function (e) { e.preventDefault(); applyFilters(); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
