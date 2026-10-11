
    // Theme toggle
    const html = document.documentElement;
    const themeBtn = document.getElementById('themeBtn');

    // Restore saved theme on page load
    if (localStorage.getItem('ft-theme') === 'dark') {
      html.classList.add('dark');
      themeBtn.textContent = 'Light';
    }

    themeBtn.addEventListener('click', function() {
      html.classList.toggle('dark');
      let isDark = html.classList.contains('dark');
      localStorage.setItem('ft-theme', isDark ? 'dark' : 'light');
      themeBtn.textContent = isDark ? 'Light' : 'Dark';
    });

    // Hamburger menu
    let hamburger = document.getElementById('hamburger');
    let nav = document.getElementById('nav');

    hamburger.addEventListener('click', function() {
      nav.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });

    // Active nav link on scroll
    let sections = document.querySelectorAll('section[id]');
    let navLinks = document.querySelectorAll('.nav-link');

    let observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function(link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(function(sec) {
      observer.observe(sec);
    });