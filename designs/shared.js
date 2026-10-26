// Shared helpers for the design concepts: language state, text lookup and the concept switcher bar.
(function () {
  "use strict";

  const D = window.SITE_DATA;
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
  };

  const CONCEPTS = [
    { file: "1-swiss.html", name: "Swiss" },
    { file: "2-bento.html", name: "Bento" },
    { file: "3-blueprint.html", name: "Blueprint" },
    { file: "4-kinetic.html", name: "Kinetic" },
    { file: "5-orbit.html", name: "Orbit" }
  ];

  const S = {
    D,
    lang: store.get("lang") || ((navigator.language || "").toLowerCase().startsWith("tr") ? "tr" : "en"),
    ui: { tr: {}, en: {} },
    reduceMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    L(v) { return v && typeof v === "object" && !Array.isArray(v) ? v[S.lang] : v; },
    t(k) { return S.ui[S.lang][k] || k; },
    esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); },
    $(s, el = document) { return el.querySelector(s); },
    $$(s, el = document) { return Array.from(el.querySelectorAll(s)); },
    onRender: null,

    setLang(l) {
      S.lang = l;
      store.set("lang", l);
      document.documentElement.lang = l;
      S.$$("[data-i18n]").forEach((el) => { el.textContent = S.t(el.dataset.i18n); });
      S.$$("[data-lang-btn]").forEach((b) => { b.textContent = l === "tr" ? "EN" : "TR"; });
      if (S.onRender) S.onRender();
    },

    start(ui, render) {
      S.ui = ui;
      S.onRender = render;
      S.$$("[data-lang-btn]").forEach((b) => b.addEventListener("click", () => S.setLang(S.lang === "tr" ? "en" : "tr")));
      S.setLang(S.lang);
      mountSwitcher();
    },

    async copyEmail(btn, okText) {
      try {
        await navigator.clipboard.writeText(D.email);
        const old = btn.dataset.label || btn.textContent;
        btn.dataset.label = old;
        btn.textContent = okText;
        setTimeout(() => { btn.textContent = old; }, 1800);
      } catch (e) {
        const r = document.createRange();
        r.selectNodeContents(btn);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(r);
      }
    }
  };

  function mountSwitcher() {
    const here = location.pathname.split("/").pop();
    const i = CONCEPTS.findIndex((c) => c.file === here);
    if (i < 0) return;
    const prev = CONCEPTS[(i + CONCEPTS.length - 1) % CONCEPTS.length];
    const next = CONCEPTS[(i + 1) % CONCEPTS.length];
    const bar = document.createElement("nav");
    bar.className = "concept-bar";
    bar.setAttribute("aria-label", "Design concepts");
    bar.innerHTML = `
      <a href="${prev.file}" aria-label="Previous concept">←</a>
      <a href="index.html" class="cb-name"><b>${i + 1}/5</b> ${CONCEPTS[i].name}</a>
      <a href="${next.file}" aria-label="Next concept">→</a>`;
    const css = document.createElement("style");
    css.textContent = `
      .concept-bar{position:fixed;z-index:999;left:50%;transform:translateX(-50%);
        bottom:calc(14px + env(safe-area-inset-bottom,0px));display:flex;align-items:center;gap:2px;
        padding:4px;border-radius:999px;background:rgba(18,18,22,.86);color:#f4f4f6;
        font:500 13px/1 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;
        backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 8px 30px rgba(0,0,0,.25)}
      .concept-bar a{color:inherit;text-decoration:none;padding:9px 13px;border-radius:999px;white-space:nowrap}
      .concept-bar a:hover,.concept-bar a:focus-visible{background:rgba(255,255,255,.14);outline:none}
      .concept-bar b{opacity:.55;font-weight:500;margin-right:4px}`;
    document.head.appendChild(css);
    document.body.appendChild(bar);
    document.addEventListener("keydown", (e) => {
      if (e.target.closest("input,textarea")) return;
      if (e.key === "ArrowRight" && e.altKey) location.href = next.file;
      if (e.key === "ArrowLeft" && e.altKey) location.href = prev.file;
    });
  }

  window.S = S;
})();
