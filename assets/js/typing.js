(function () {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const lines = [
    'Java & Spring Boot Engineer',
    'Cloud & Platform Engineer',
    'AI-Assisted Developer (Kiro + MCP)',
    'Clean Code Practitioner',
    'M.S. Artificial Intelligence'
  ];

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = lines[0];
    return;
  }

  let li = 0, ci = 0, deleting = false;

  function type() {
    const line = lines[li];
    if (!deleting) {
      el.textContent = line.slice(0, ++ci);
      if (ci === line.length) { deleting = true; setTimeout(type, 2000); return; }
    } else {
      el.textContent = line.slice(0, --ci);
      if (ci === 0) { deleting = false; li = (li + 1) % lines.length; }
    }
    setTimeout(type, deleting ? 40 : 65);
  }

  setTimeout(type, 1200);
})();
