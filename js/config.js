/**
 * Archivon site configuration.
 * Define directory topics and other options here.
 */
window.ARCHIVON_CONFIG = {
  /** Topics shown in the home directory (cards: Introduction + languages) */
  directory: [
    { label: 'Introduction', href: 'docs/introducao.html' },
    { label: 'PHP', href: 'docs/php.html' },
    { label: 'JavaScript', href: 'docs/javascript.html' },
    { label: 'Python', href: 'docs/python.html' },
    { label: 'Java', href: 'docs/java.html' },
    { label: 'Kotlin', href: 'docs/kotlin.html' },
    { label: 'C#', href: 'docs/csharp.html' },
    { label: 'C++', href: 'docs/cpp.html' },
    { label: 'C', href: 'docs/c.html' },
  ],

  /** Sidebar links on documentation pages */
  sidebarDocs: [
    { group: 'Home', links: [{ label: 'Home', href: '../index.html' }, { label: 'Questions', href: '../questoes.html' }] },
    { group: 'Introduction', links: [{ label: 'Welcome', href: 'introducao.html' }] },
    { group: 'JavaScript', links: [{ label: 'Variables', href: 'js-variaveis.html' }, { label: 'Functions', href: 'js-funcoes.html' }] },
    { group: 'React', links: [{ label: 'Components', href: 'react-componentes.html' }] },
  ],
};
