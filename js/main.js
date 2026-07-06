(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const navLinks = document.getElementById('navLinks');
  const navToggle = document.getElementById('navToggle');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  const statValues = document.querySelectorAll('.stat-value[data-target]');
  let countersStarted = false;

  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const isDecimal = target % 1 !== 0;
    const duration = 1600;
    const start = performance.now();
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = isDecimal ? current.toFixed(2) : Math.floor(current);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = isDecimal ? target.toFixed(2) : target;
    }
    requestAnimationFrame(step);
  }

  const statsSection = document.querySelector('.stats');
  if (statsSection) {
    const statsObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !countersStarted) {
        countersStarted = true;
        statValues.forEach(animateCounter);
      }
    }, { threshold: 0.3 });
    statsObserver.observe(statsSection);
  }

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute('id');
      }
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      if (form.action.includes('xplaceholder')) {
        e.preventDefault();
        const name = form.querySelector('[name="name"]').value;
        const email = form.querySelector('[name="email"]').value;
        const message = form.querySelector('[name="message"]').value;
        const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:yashrakeshsoni@gmail.com?subject=${subject}&body=${body}`;
      }
    });
  }
})();
