/* ── Custom cursor ─────────────────────────── */
(function () {
  if (window.innerWidth <= 768) return;
  const dot  = document.createElement('div');
  const ring = document.createElement('div');
  dot.className  = 'cursor-dot';
  ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });
  (function tick() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(tick);
  })();

  document.querySelectorAll('a, button, [data-tilt], input, textarea, select').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
})();

/* ── Navbar ────────────────────────────────── */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 10);
  update();
  window.addEventListener('scroll', update, { passive: true });

  // Active link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
  });
})();

/* ── Mobile menu ───────────────────────────── */
(function () {
  const btn   = document.getElementById('hamburger');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  let open = false;
  btn.addEventListener('click', () => {
    open = !open;
    if (open) {
      Object.assign(links.style, {
        display: 'flex', flexDirection: 'column',
        position: 'fixed', inset: '0',
        background: 'var(--cream)', alignItems: 'center',
        justifyContent: 'center', gap: '32px', zIndex: '98',
      });
    } else {
      links.style.cssText = '';
    }
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    open = false; links.style.cssText = '';
  }));
})();

/* ── Scroll reveal ─────────────────────────── */
(function () {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });
  document.querySelectorAll('.fade-up, .fade-in').forEach(el => obs.observe(el));
})();

/* ── Card 3D tilt ──────────────────────────── */
(function () {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const x  = e.clientX - r.left, y = e.clientY - r.top;
      const cx = r.width / 2,       cy = r.height / 2;
      const rX = -(y - cy) / cy * 7;
      const rY =  (x - cx) / cx * 7;
      card.style.transition = 'transform .05s';
      card.style.transform  = `perspective(800px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.015,1.015,1.015)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform .6s cubic-bezier(.03,.98,.52,.99)';
      card.style.transform  = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    });
  });
})();

/* ── Animated counters ─────────────────────── */
(function () {
  const nums = document.querySelectorAll('[data-count]');
  if (!nums.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const end = parseFloat(el.dataset.count);
      const pfx = el.dataset.prefix || '';
      const sfx = el.dataset.suffix || '';
      const dec = (el.dataset.count.includes('.')) ? 1 : 0;
      const dur = 1600;
      const t0  = performance.now();
      const tick = now => {
        const p = Math.min((now - t0) / dur, 1);
        const v = 1 - Math.pow(1 - p, 3);
        el.textContent = pfx + (end * v).toFixed(dec) + sfx;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  nums.forEach(el => obs.observe(el));
})();
