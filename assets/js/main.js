(function () {
  "use strict";

  const D = window.SITE_DATA;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const UI = {
    tr: {
      "nav.about": "Hakkımda",
      "nav.experience": "Deneyim",
      "nav.projects": "Projeler",
      "nav.skills": "Yetenekler",
      "nav.contact": "İletişim",
      "hero.status": "Ankara · Yeni fırsatlara açık",
      "hero.sub": "Kurumsal ölçekte .NET mikroservisleri, modern frontend'ler ve kritik sağlık entegrasyonları geliştiren ekipleri yönetiyorum.",
      "hero.cta1": "Projeleri gör",
      "hero.cta2": "İletişime geç",
      "about.location": "Konum",
      "about.education": "Eğitim",
      "about.languages": "Diller",
      "about.focus": "Odak",
      "about.focusVal": "Mimari · Liderlik · DevOps",
      "projects.all": "Tümü",
      "projects.limak": "Limak Technology",
      "projects.health": "Sağlık Bilişimi",
      "projects.details": "Detaylar",
      "projects.highlights": "Öne çıkanlar",
      "projects.tech": "Teknolojiler",
      "exp.more": "Detayları göster",
      "exp.less": "Detayları gizle",
      "edu.title": "Eğitim",
      "contact.title": "Birlikte bir şeyler inşa edelim.",
      "contact.text": "Mimari, ekip liderliği veya yeni bir proje hakkında konuşmak için bana e-posta ya da LinkedIn üzerinden ulaşabilirsin.",
      "contact.copy": "kopyala",
      "contact.copied": "E-posta adresi kopyalandı ✓",
      "footer.made": "HTML, CSS ve vanilla JS ile yapıldı · GitHub Pages"
    },
    en: {
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "hero.status": "Ankara · Open to new opportunities",
      "hero.sub": "I lead teams building enterprise-scale .NET microservices, modern frontends and mission-critical healthcare integrations.",
      "hero.cta1": "View projects",
      "hero.cta2": "Get in touch",
      "about.location": "Location",
      "about.education": "Education",
      "about.languages": "Languages",
      "about.focus": "Focus",
      "about.focusVal": "Architecture · Leadership · DevOps",
      "projects.all": "All",
      "projects.limak": "Limak Technology",
      "projects.health": "Healthcare IT",
      "projects.details": "Details",
      "projects.highlights": "Highlights",
      "projects.tech": "Tech stack",
      "exp.more": "Show details",
      "exp.less": "Hide details",
      "edu.title": "Education",
      "contact.title": "Let's build something together.",
      "contact.text": "Reach out by email or LinkedIn to talk about architecture, team leadership or a new project.",
      "contact.copy": "copy",
      "contact.copied": "Email address copied ✓",
      "footer.made": "Built with HTML, CSS & vanilla JS · GitHub Pages"
    }
  };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  let lang = store.get("lang") || ((navigator.language || "").toLowerCase().startsWith("tr") ? "tr" : "en");
  let filter = "all";
  let firstRender = true;

  const t = (key) => UI[lang][key] || key;
  const L = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] : v);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Theme ---------- */
  const root = document.documentElement;
  const savedTheme = store.get("theme");
  root.dataset.theme = savedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  $("#themeBtn").addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    store.set("theme", root.dataset.theme);
    bg.refreshColors();
  });

  /* ---------- Language ---------- */
  $("#langBtn").addEventListener("click", () => {
    lang = lang === "tr" ? "en" : "tr";
    store.set("lang", lang);
    render();
  });

  /* ---------- Rendering ---------- */
  function renderHeroName() {
    const parts = D.name.split(" ");
    $("#heroName").innerHTML = parts
      .map((w, i) => `<span class="word"><span class="${i === parts.length - 1 ? "grad" : ""}" style="animation-delay:${0.1 + i * 0.12}s">${esc(w)}</span></span>`)
      .join(" ");
  }

  function renderStats() {
    $("#stats").innerHTML = D.stats
      .map((s) => `<div class="stat reveal"><div class="stat-value"><span data-count="${s.value}" data-suffix="${esc(s.suffix)}">${firstRender ? 0 : formatNum(s.value) + s.suffix}</span></div><div class="stat-label">${esc(L(s.label))}</div></div>`)
      .join("");
  }

  function renderAbout() {
    $("#summary").textContent = L(D.summary);
    $("#location").textContent = L(D.location);
    $("#eduShort").textContent = D.education.school;
    $("#langs").textContent = L(D.languages).join(", ");
  }

  function renderTimeline() {
    const open = new Set($$(".t-item.open").map((el) => el.dataset.i));
    if (firstRender) open.add("0");
    $("#timeline").innerHTML = D.experience
      .map((job, i) => {
        const isOpen = open.has(String(i));
        return `
        <li class="t-item reveal ${isOpen ? "open" : ""}" data-i="${i}">
          <div class="t-card">
            <div class="t-head"><span class="t-company">${esc(job.company)}</span><span class="t-loc mono">${esc(job.location)}</span></div>
            <div class="t-positions">${job.positions.map((p) => `<div class="t-pos"><b>${esc(L(p.title))}</b><span class="mono">${esc(L(p.period))}</span></div>`).join("")}</div>
            <div class="t-body"><div><ul>${L(job.bullets).map((b) => `<li>${esc(b)}</li>`).join("")}</ul></div></div>
            <div class="tags">${job.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
            <button class="t-toggle mono" type="button" aria-expanded="${isOpen}"><span class="lbl">${t(isOpen ? "exp.less" : "exp.more")}</span><span class="chev">⌄</span></button>
          </div>
        </li>`;
      })
      .join("");
  }

  function renderFilters() {
    const cats = ["all", "limak", "health"];
    const count = (c) => (c === "all" ? D.projects.length : D.projects.filter((p) => p.category === c).length);
    $("#filters").innerHTML = cats
      .map((c) => `<button class="filter ${filter === c ? "active" : ""}" type="button" role="tab" aria-selected="${filter === c}" data-filter="${c}">${t("projects." + c)}<span class="count mono">${count(c)}</span></button>`)
      .join("");
  }

  function renderProjects() {
    $("#projectGrid").innerHTML = D.projects
      .map((p) => `
      <div class="project reveal ${filter !== "all" && p.category !== filter ? "hide" : ""}" data-id="${p.id}" data-cat="${p.category}" role="button" tabindex="0" aria-label="${esc(L(p.name))} — ${t("projects.details")}">
        <div class="p-top"><span class="p-cat mono"${p.category === "limak" ? ' lang="en"' : ""}>${t("projects." + p.category)}</span><span class="p-arrow">↗</span></div>
        <div class="p-name">${esc(L(p.name))}</div>
        <div class="p-tag">${esc(L(p.tagline))}</div>
        ${p.metrics.length ? `<div class="p-metrics">${p.metrics.slice(0, 3).map((m) => `<div class="p-metric"><b>${esc(L(m.value))}</b><span>${esc(L(m.label))}</span></div>`).join("")}</div>` : ""}
        <div class="tags">${p.tech.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>
      </div>`)
      .join("");
  }

  function renderSkills() {
    $("#skillGrid").innerHTML = D.skills
      .map((g) => `<div class="skill-card reveal"><h3>${esc(L(g.group))}</h3><div class="chips">${g.items.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div></div>`)
      .join("");
    const e = D.education;
    $("#edu").innerHTML = `
      <div>
        <p class="mono">${t("edu.title")}</p>
        <h3>${esc(e.school)} · ${esc(e.location)}</h3>
        <p>${L(e.degrees).map(esc).join(" · ")}</p>
        <p>${esc(L(e.note))}</p>
      </div>
      <div class="year mono">${esc(e.year)}</div>`;
  }

  function renderContact() {
    $("#emailText").textContent = D.email;
    $("#linkedinLink").href = D.linkedin;
    $("#githubLink").href = D.github;
    $("#footName").textContent = D.name;
    $("#year").textContent = new Date().getFullYear();
  }

  function applyI18n() {
    root.lang = lang;
    $("#langBtn").textContent = lang === "tr" ? "EN" : "TR";
    $("#langBtn").setAttribute("aria-label", lang === "tr" ? "Switch to English" : "Türkçeye geç");
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  }

  function render() {
    applyI18n();
    renderAbout();
    renderStats();
    renderTimeline();
    renderFilters();
    renderProjects();
    renderSkills();
    renderContact();
    typer.restart();
    if (firstRender) {
      renderHeroName();
      observeReveals();
    } else {
      $$(".reveal").forEach((el) => el.classList.add("in"));
    }
    firstRender = false;
  }

  /* ---------- Typing effect ---------- */
  const typer = (() => {
    const el = $("#typed");
    let timer, wi = 0, ci = 0, deleting = false;
    function tick() {
      const words = D.roles[lang];
      const word = words[wi % words.length];
      if (reduceMotion) { el.textContent = word; return; }
      ci += deleting ? -1 : 1;
      el.textContent = word.slice(0, ci);
      let delay = deleting ? 35 : 70;
      if (!deleting && ci === word.length) { deleting = true; delay = 1800; }
      else if (deleting && ci === 0) { deleting = false; wi++; delay = 350; }
      timer = setTimeout(tick, delay);
    }
    return { restart() { clearTimeout(timer); ci = 0; deleting = false; timer = setTimeout(tick, firstRender ? 700 : 100); } };
  })();

  /* ---------- Counters ---------- */
  function formatNum(n) { return n.toLocaleString(lang === "tr" ? "tr-TR" : "en-US"); }
  function animateCount(el) {
    const target = +el.dataset.count, suffix = el.dataset.suffix || "";
    if (reduceMotion) { el.textContent = formatNum(target) + suffix; return; }
    const start = performance.now(), dur = 1600;
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatNum(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }

  /* ---------- Reveal on scroll ---------- */
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach((el) => el.classList.add("in"));
      $$("[data-count]").forEach(animateCount);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const siblings = el.parentElement ? $$(":scope > .reveal", el.parentElement) : [];
        el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 6) * 70}ms`;
        el.classList.add("in");
        $$("[data-count]", el).forEach(animateCount);
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach((el) => io.observe(el));
  }

  /* ---------- Interactions ---------- */
  document.addEventListener("click", (e) => {
    const tog = e.target.closest(".t-toggle");
    if (tog) {
      const item = tog.closest(".t-item");
      const open = item.classList.toggle("open");
      tog.setAttribute("aria-expanded", open);
      $(".lbl", tog).textContent = t(open ? "exp.less" : "exp.more");
      return;
    }
    const f = e.target.closest(".filter");
    if (f) { setFilter(f.dataset.filter); return; }
    const card = e.target.closest(".project");
    if (card) { openModal(card.dataset.id); return; }
    if (e.target.closest("[data-close]")) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
    const card = e.target.closest && e.target.closest(".project");
    if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openModal(card.dataset.id); }
  });

  function setFilter(c) {
    filter = c;
    renderFilters();
    $$(".project").forEach((p) => {
      const show = c === "all" || p.dataset.cat === c;
      p.classList.toggle("hide", !show);
      p.classList.remove("enter");
      if (show) { void p.offsetWidth; p.classList.add("enter", "in"); }
    });
  }

  // Cursor spotlight + subtle tilt on project cards
  const grid = $("#projectGrid");
  grid.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".project");
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    card.style.setProperty("--mx", x + "px");
    card.style.setProperty("--my", y + "px");
    if (!reduceMotion && e.pointerType === "mouse") {
      const rx = ((y / r.height) - 0.5) * -6, ry = ((x / r.width) - 0.5) * 6;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    }
  });
  grid.addEventListener("pointerout", (e) => {
    const card = e.target.closest(".project");
    if (card && !card.contains(e.relatedTarget)) card.style.transform = "";
  });

  // Modal
  const modal = $("#modal");
  let lastFocus = null;
  function openModal(id) {
    const p = D.projects.find((x) => x.id === id);
    if (!p) return;
    lastFocus = document.activeElement;
    $("#modalBody").innerHTML = `
      <span class="p-cat mono"${p.category === "limak" ? ' lang="en"' : ""}>${t("projects." + p.category)}</span>
      <h3 id="modalTitle">${esc(L(p.name))}</h3>
      <p class="p-tag">${esc(L(p.tagline))}</p>
      <p class="desc">${esc(L(p.description))}</p>
      ${p.metrics.length ? `<div class="p-metrics">${p.metrics.map((m) => `<div class="p-metric"><b>${esc(L(m.value))}</b><span>${esc(L(m.label))}</span></div>`).join("")}</div>` : ""}
      <h4>${t("projects.highlights")}</h4>
      <ul>${L(p.highlights).map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
      <h4>${t("projects.tech")}</h4>
      <div class="tags">${p.tech.map((x) => `<span class="tag">${esc(x)}</span>`).join("")}</div>`;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $(".modal-close", modal).focus();
  }
  function closeModal() {
    if (modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  // Copy email
  const toast = $("#toast");
  let toastTimer;
  $("#copyEmail").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(D.email);
      toast.textContent = t("contact.copied");
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
    } catch (e) {
      window.location.href = "mailto:" + D.email;
    }
  });

  // Mobile menu
  const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  navLinks.addEventListener("click", (e) => {
    if (e.target.closest("a")) { navLinks.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // Scroll: nav state, progress bar, active link, timeline fill
  const nav = $("#nav"), progress = $(".progress"), timeline = $("#timeline");
  const sections = ["about", "experience", "projects", "skills", "contact"].map((id) => document.getElementById(id));
  let ticking = false;
  function onScroll() {
    ticking = false;
    const y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
    nav.classList.toggle("scrolled", y > 20);
    progress.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    let current = "";
    sections.forEach((s) => { if (s.getBoundingClientRect().top < window.innerHeight * 0.4) current = s.id; });
    $$(".nav-links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
    const r = timeline.getBoundingClientRect();
    const fill = Math.max(0, Math.min(1, (window.innerHeight * 0.6 - r.top) / r.height));
    timeline.style.setProperty("--line", (fill * 100).toFixed(1) + "%");
  }
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* ---------- Background: connected node network ---------- */
  const bg = (() => {
    const canvas = $("#bg"), ctx = canvas.getContext("2d");
    let w, h, dpr, nodes = [], color = "", raf;
    const mouse = { x: -9999, y: -9999 };

    function refreshColors() {
      color = getComputedStyle(root).getPropertyValue("--accent").trim() || "#7c6cff";
      if (reduceMotion) draw();
    }
    function hexToRgb(hex) {
      const m = hex.replace("#", "").match(/.{2}/g);
      return m ? m.map((x) => parseInt(x, 16)).join(",") : "124,108,255";
    }
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = window.innerWidth * dpr;
      h = canvas.height = window.innerHeight * dpr;
      const count = Math.round(Math.min(90, (window.innerWidth * window.innerHeight) / 16000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25 * dpr, vy: (Math.random() - 0.5) * 0.25 * dpr,
        r: (Math.random() * 1.4 + 0.6) * dpr
      }));
      if (reduceMotion) draw();
    }
    function draw() {
      const rgb = hexToRgb(color);
      const link = 140 * dpr;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
          if (d < link) {
            ctx.strokeStyle = `rgba(${rgb},${(1 - d / link) * 0.22})`;
            ctx.lineWidth = dpr * 0.8;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = `rgba(${rgb},0.55)`;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
      }
    }
    function step() {
      const mx = mouse.x * dpr, my = mouse.y * dpr;
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        const dx = mx - n.x, dy = my - n.y, d = Math.hypot(dx, dy);
        if (d < 180 * dpr && d > 1) { n.x -= (dx / d) * 0.6 * dpr; n.y -= (dy / d) * 0.6 * dpr; }
      });
      draw();
      raf = requestAnimationFrame(step);
    }
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
    document.addEventListener("visibilitychange", () => {
      if (reduceMotion) return;
      if (document.hidden) cancelAnimationFrame(raf); else raf = requestAnimationFrame(step);
    });
    function start() { refreshColors(); resize(); if (!reduceMotion) raf = requestAnimationFrame(step); }
    return { start, refreshColors };
  })();

  render();
  bg.start();
  onScroll();
})();
