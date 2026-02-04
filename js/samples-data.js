/**
 * Code samples data: title, description, date, tags.
 * Add new samples here to show them on the Code samples page.
 */
window.ARCHIVON_SAMPLES = [
  {
    id: 1,
    title: 'Sum of two numbers',
    description: 'A simple function that takes two numbers and returns their sum. Good starter example for functions and parameters.',
    date: '02/04/2026',
    tags: ['JavaScript', 'Functions'],
    code: 'function sum(a, b) {\n  return a + b;\n}\nsum(2, 3); // 5',
    language: 'javascript',
  },
  {
    id: 2,
    title: 'React component with props',
    description: 'A minimal React component that receives a name prop and renders a greeting. Shows the basic structure of a functional component.',
    date: '02/03/2026',
    tags: ['React', 'JavaScript', 'Components'],
    code: 'function Greeting({ name }) {\n  return <h1>Hello, {name}!</h1>;\n}\n// Usage: <Greeting name="Archivon" />',
    language: 'jsx',
  },
  {
    id: 3,
    title: 'Array map and filter',
    description: 'Combine map and filter to transform and filter an array in one pass. Common pattern for list rendering and data processing.',
    date: '02/02/2026',
    tags: ['JavaScript', 'Arrays'],
    code: 'const numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.filter(n => n > 2).map(n => n * 2);\n// [6, 8, 10]',
    language: 'javascript',
  },
  {
    id: 4,
    title: 'Async fetch with error handling',
    description: 'Fetch data from an API using async/await with try/catch for error handling. Includes a simple loading state.',
    date: '02/01/2026',
    tags: ['JavaScript', 'Async', 'API'],
    code: 'async function fetchUser(id) {\n  try {\n    const res = await fetch(`/api/users/${id}`);\n    if (!res.ok) throw new Error(res.statusText);\n    return await res.json();\n  } catch (e) {\n    console.error(e);\n    return null;\n  }\n}',
    language: 'javascript',
  },
  {
    id: 5,
    title: 'CSS grid responsive layout',
    description: 'A simple responsive grid that shows 3 columns on desktop, 2 on tablet, and 1 on mobile using CSS Grid.',
    date: '01/30/2026',
    tags: ['CSS', 'Layout'],
    code: '.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1rem;\n}',
    language: 'css',
  },
  {
    id: 6,
    title: 'LocalStorage helper',
    description: 'Small utility to get and set JSON in localStorage with a default value. Handles parse errors safely.',
    date: '01/29/2026',
    tags: ['JavaScript', 'Browser'],
    code: 'function getStorage(key, fallback = null) {\n  try {\n    const raw = localStorage.getItem(key);\n    return raw ? JSON.parse(raw) : fallback;\n  } catch { return fallback; }\n}\nfunction setStorage(key, value) {\n  localStorage.setItem(key, JSON.stringify(value));\n}',
    language: 'javascript',
  },
  {
    id: 7,
    title: 'PHP PDO database connection',
    description: 'Connect to a MySQL database using PDO (PHP Data Objects). Sets UTF-8 charset and exception mode for errors. Replace host, dbname, user and password with your values.',
    date: '02/04/2026',
    tags: ['PHP', 'Database'],
    code: '<?php\n$host = "localhost"; // database server\n$dbname = "nome_do_banco"; // database name\n$user = "usuario"; // username\n$password = "senha"; // password\n\n// connect to database\ntry {\n  $pdo = new PDO(\n    "mysql:host=$host;dbname=$dbname;charset=utf8",\n    $user,\n    $password\n  );\n  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n  echo "Conectado com sucesso!";\n} catch (PDOException $e) {\n  die("Erro na conexão: " . $e->getMessage());\n}\n?>',
    language: 'php',
  },
];
