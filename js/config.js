/**
 * Archivon site configuration.
 * Define directory topics and other options here.
 */
window.ARCHIVON_CONFIG = {
  /** Topics shown in the home directory (3 columns) */
  directory: [
    [
      { label: 'Introduction', href: 'docs/introducao.html' },
      { label: 'JavaScript · Variables', href: 'docs/js-variaveis.html' },
      { label: 'JavaScript · Functions', href: 'docs/js-funcoes.html' },
    ],
    [
      { label: 'React · Components', href: 'docs/react-componentes.html' },
      { label: 'HTML and CSS', href: 'docs/html-css.html' },
      { label: 'Questions', href: 'questoes.html' },
    ],
    [
      { label: 'Node.js', href: 'docs/nodejs.html' },
      { label: 'Git', href: 'docs/git.html' },
      { label: 'Code samples', href: '#codigos' },
    ],
  ],

  /** Sidebar links on documentation pages */
  sidebarDocs: [
    { group: 'Home', links: [{ label: 'Home', href: '../index.html' }, { label: 'Questions', href: '../questoes.html' }] },
    { group: 'Introduction', links: [{ label: 'Welcome', href: 'introducao.html' }] },
    { group: 'JavaScript', links: [{ label: 'Variables', href: 'js-variaveis.html' }, { label: 'Functions', href: 'js-funcoes.html' }] },
    { group: 'React', links: [{ label: 'Components', href: 'react-componentes.html' }] },
  ],
};
