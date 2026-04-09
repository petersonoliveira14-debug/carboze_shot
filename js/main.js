'use strict';

const qs  = (s, c = document) => c.querySelector(s);
const qsa = (s, c = document) => [...c.querySelectorAll(s)];

/* ─── Particles ──────────────────────────── */
(function initParticles() {
  const canvas = qs('#particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h;
  const COUNT = window.innerWidth < 600 ? 28 : 50;
  const RGB   = '108,192,0';
  let particles = [];

  function resize() {
    w = canvas.width  = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function mkParticle(spreadY = false) {
    return {
      x:       Math.random() * (w || window.innerWidth),
      y:       spreadY ? Math.random() * (h || window.innerHeight) : (h || window.innerHeight) + 20,
      r:       Math.random() * 1.8 + 0.4,
      vy:      Math.random() * 0.45 + 0.18,
      vx:      (Math.random() - 0.5) * 0.25,
      opacity: Math.random() * 0.45 + 0.08,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, () => mkParticle(true));
  }

  function tick() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${RGB},${p.opacity})`;
      ctx.fill();
      p.y -= p.vy;
      p.x += p.vx;
      p.opacity -= 0.0003;
      if (p.y < -10 || p.opacity < 0.02) {
        particles[i] = mkParticle(false);
      }
    }
    requestAnimationFrame(tick);
  }

  window.addEventListener('resize', resize, { passive: true });
  init();
  tick();
})();


/* ─── Reveal on Scroll ───────────────────── */
(function initReveal() {
  const els = qsa('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -36px 0px' });

  els.forEach(el => io.observe(el));
})();


/* ─── Hero Parallax ──────────────────────── */
(function initParallax() {
  const img = qs('.hero__img');
  if (!img) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const sy = window.scrollY;
      const vh = window.innerHeight;
      if (sy <= vh * 1.2) {
        img.style.transform = `scale(1.06) translateY(${(sy / vh) * 32}px)`;
      }
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();


/* ─── 3D Tilt on Benefit Cards ──────────── */
(function initTilt() {
  const cards = qsa('.tilt-card');
  if (!cards.length) return;
  if (window.matchMedia('(pointer: coarse)').matches) return; // touch device — skip

  const MAX = 8;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r  = card.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
      const dy = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
      card.style.transform  = `perspective(640px) rotateX(${-dy * MAX}deg) rotateY(${dx * MAX}deg) translateZ(10px)`;
      card.style.transition = 'transform 80ms ease';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform  = '';
      card.style.transition = 'transform 420ms cubic-bezier(0.34,1.56,0.64,1), border-color 260ms ease, box-shadow 260ms ease';
    });
  });
})();


/* ─── Smooth Scroll ──────────────────────── */
(function initSmoothScroll() {
  qsa('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = qs(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();


/* ─── Sache entrance sparkle ─────────────── */
(function initSacheReveal() {
  const wrapper = qs('.product__sache-wrapper');
  if (!wrapper) return;

  const io = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      wrapper.style.transition = 'filter 0.6s ease';
      io.disconnect();
    }
  }, { threshold: 0.4 });

  io.observe(wrapper);
})();
