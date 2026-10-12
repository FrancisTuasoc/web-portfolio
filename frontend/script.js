
    // Theme toggle
    const html = document.documentElement;
    const themeBtn = document.getElementById('themeBtn');
    const heroPortrait = document.querySelector('.hero-portrait');

    themeBtn.addEventListener('click', function() {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        themeBtn.textContent = 'Dark';
        heroPortrait.src = 'asset/takamura.webp';
      } else {
        html.classList.add('dark');
        themeBtn.textContent = 'Light';
        heroPortrait.src = 'asset/serious%20takamura.webp';
      }
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