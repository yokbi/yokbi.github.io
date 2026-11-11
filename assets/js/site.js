// Interface text and rendering. Game content lives in games.js.
(function () {
  "use strict";

  var UI = {
    tr: {
      navGames: "Oyunlar", navStudio: "Stüdyo", navContact: "İletişim",
      heroKicker: "Yakında App Store'da",
      heroSubtitle: "Futbolcu Kariyeri",
      heroLead: "Teknik direktör değilsin. Sen 9 numarasın. Altyapıdan zirveye tek bir forvetin kariyeri: her maç, her karar, her sözleşme senin.",
      heroP1: "Maçlar dakika dakika, canlı yazılı anlatımla",
      heroP2: "Basın, gece hayatı, para, menajer: her seçimin bedeli var",
      heroP3: "Maaş, prim ve serbest kalma bedeli için pazarlık",
      storeSoonSmall: "Çok yakında", heroMore: "Oyun hakkında",
      statGames: "oyun yapımda", statPlatforms: "platform: iOS, Android, PC, Web",
      statLangs: "Türkçe ve İngilizce",
      gamesTitle: "Oyunlar",
      gamesLead: "Bitenler, yapımda olanlar ve henüz masada duran fikirler. Hepsi tek bir masadan çıkıyor.",
      fAll: "Tümü", fsport: "Spor", ftycoon: "İşletme", fcasual: "Casual", fpuzzle: "Bulmaca ve parti",
      ssoon: "Yakında", sdev: "Yapımda", sproto: "Prototip",
      open: "İncele",
      studioTitle: "Nasıl oyun yapıyoruz",
      v1t: "Önce oyun", v1: "Kısa oturumlarda bile anlamı olan, cebinde taşıyabileceğin oyunlar. Süs değil, karar ve sonuç.",
      v2t: "Adil reklam", v2: "Reklam oyunun önüne geçmemeli. Kötü bir anın ardından reklam göstermiyoruz; ödüllü reklamlar hep isteğe bağlı.",
      v3t: "Verin sende", v3: "Oynamak için hesap açtırmamaya çalışıyoruz. Kayıtların cihazında durur; ihtiyacımız olmayan veriyi istemeyiz.",
      contactTitle: "Bize yaz",
      contactLead: "Hata, öneri, iş birliği ya da sadece merhaba. Her e-postayı okuyoruz.",
      footSupport: "No.9 destek", footPrivacy: "Gizlilik"
    },
    en: {
      navGames: "Games", navStudio: "Studio", navContact: "Contact",
      heroKicker: "Coming soon to the App Store",
      heroSubtitle: "Striker Career",
      heroLead: "You are not the manager. You are the No.9. One striker's career from the academy to the top: every match, every choice, every contract is yours.",
      heroP1: "Every match, minute by minute, as live text commentary",
      heroP2: "The press, nights out, money, your agent: every choice has a price",
      heroP3: "Negotiate the wage, the bonus and the release clause",
      storeSoonSmall: "Coming soon", heroMore: "About the game",
      statGames: "games in the making", statPlatforms: "platforms: iOS, Android, PC, Web",
      statLangs: "Turkish and English",
      gamesTitle: "Games",
      gamesLead: "Finished, in the making, and still on the drawing board. All from one desk.",
      fAll: "All", fsport: "Sports", ftycoon: "Tycoon", fcasual: "Casual", fpuzzle: "Puzzle & party",
      ssoon: "Coming soon", sdev: "In development", sproto: "Prototype",
      open: "Details",
      studioTitle: "How we make games",
      v1t: "Game first", v1: "Games that mean something even in a short session. Not decoration: decisions and consequences.",
      v2t: "Fair ads", v2: "Ads should never get in the way. No ad after a bad moment, and rewarded ads are always optional.",
      v3t: "Your data stays yours", v3: "We try never to make you sign up to play. Saves live on your device, and we don't ask for data we don't need.",
      contactTitle: "Get in touch",
      contactLead: "Bugs, ideas, partnerships or just hello. We read every email.",
      footSupport: "No.9 support", footPrivacy: "Privacy"
    }
  };

  // Placeholder art for games whose final icon is not done yet.
  var TILES = {
    ferry: ["#1e6fd9", "#0c3b7a", '<path d="M10 40h44l-6 10H16z" fill="#fff"/><rect x="22" y="28" width="20" height="12" rx="2" fill="#ffd34d"/><rect x="28" y="20" width="6" height="8" fill="#ff6b4a"/><path d="M6 54c6 0 6-3 12-3s6 3 12 3 6-3 12-3 6 3 12 3" stroke="#9fd2ff" stroke-width="3" fill="none"/>'],
    burger: ["#ff8a3d", "#c2410c", '<path d="M14 30a18 12 0 0 1 36 0z" fill="#ffd28a"/><rect x="12" y="32" width="40" height="5" rx="2.5" fill="#5cc85c"/><rect x="12" y="38" width="40" height="6" rx="3" fill="#7a3a1d"/><path d="M14 46h36a4 4 0 0 1-4 6H18a4 4 0 0 1-4-6z" fill="#ffd28a"/>'],
    doner: ["#b45309", "#6b2a06", '<rect x="31" y="8" width="2.5" height="48" fill="#ddd"/><path d="M22 14h20l-3 34H25z" fill="#d9822b"/><path d="M24 22h16M23.5 30h17M24 38h15" stroke="#8a4512" stroke-width="2.5"/><path d="M44 30l10-6" stroke="#f1f1f1" stroke-width="3" stroke-linecap="round"/>'],
    bounce: ["#7c3aed", "#3b0f8c", '<path d="M8 50c8 0 8-26 16-26s8 26 16 26 8-18 16-18" stroke="#c4b5fd" stroke-width="2.5" stroke-dasharray="3 4" fill="none"/><circle cx="48" cy="22" r="8" fill="#fde047"/><rect x="6" y="52" width="52" height="4" rx="2" fill="#a78bfa"/>']
  };

  var lang = "tr";
  var filter = "all";
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) { /* storage blocked */ }
  lang = saved === "tr" || saved === "en" ? saved
    : (navigator.language || "").slice(0, 2) === "tr" ? "tr" : "en";

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function art(g) {
    if (g.icon) {
      return '<img class="art-bg" src="' + g.icon + '" alt="" loading="lazy">' +
        '<img class="art-ic" src="' + g.icon + '" alt="" width="256" height="256" loading="lazy">';
    }
    var t = TILES[g.tile];
    return '<div class="art-bg" style="background:linear-gradient(135deg,' + t[0] + ',' + t[1] + ')"></div>' +
      '<svg class="art-ic" viewBox="0 0 64 64" aria-hidden="true"><defs><linearGradient id="g-' + g.id +
      '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + t[0] + '"/><stop offset="1" stop-color="' + t[1] +
      '"/></linearGradient></defs><rect width="64" height="64" fill="url(#g-' + g.id + ')"/>' + t[2] + "</svg>";
  }

  function renderShots() {
    var box = document.getElementById("shots");
    box.innerHTML = "";
    ["matchLive", "postMatch", "hub"].forEach(function (s, i) {
      var img = el("img", "shot shot-" + i);
      img.src = "img/no9/" + lang + "_" + s + ".webp";
      img.alt = "";
      img.width = 480; img.height = 1040;
      if (i) img.loading = "lazy";
      box.appendChild(img);
    });
  }

  function renderFilters() {
    var box = document.getElementById("filters");
    box.innerHTML = "";
    ["all", "sport", "tycoon", "casual", "puzzle"].forEach(function (f) {
      var count = f === "all" ? GAMES.length : GAMES.filter(function (g) { return g.group === f; }).length;
      var b = el("button", "chip" + (f === filter ? " on" : ""),
        esc(UI[lang][f === "all" ? "fAll" : "f" + f]) + " <span>" + count + "</span>");
      b.type = "button";
      b.setAttribute("aria-pressed", f === filter);
      b.onclick = function () { filter = f; renderFilters(); renderGrid(); };
      box.appendChild(b);
    });
  }

  function renderGrid() {
    var box = document.getElementById("grid");
    box.innerHTML = "";
    GAMES.filter(function (g) { return filter === "all" || g.group === filter; }).forEach(function (g) {
      var card = el(g.link ? "a" : "article", "card status-" + g.status + (g.id === "no9" ? " featured" : ""));
      if (g.link) card.href = g.link;
      card.innerHTML =
        '<div class="card-art">' + art(g) + "</div>" +
        '<div class="card-body">' +
          '<div class="card-top"><span class="badge">' + esc(UI[lang]["s" + g.status]) + "</span>" +
          '<span class="genre">' + esc(g.genre[lang]) + "</span></div>" +
          "<h3>" + esc(g.name) + "</h3>" +
          "<p>" + esc(g.pitch[lang]) + "</p>" +
          '<div class="plats">' + g.platforms.map(function (p) { return "<span>" + esc(p) + "</span>"; }).join("") +
          (g.link ? '<span class="go">' + esc(UI[lang].open) + " →</span>" : "") + "</div>" +
        "</div>";
      box.appendChild(card);
    });
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-t]").forEach(function (n) {
      n.textContent = UI[lang][n.getAttribute("data-t")];
    });
    document.getElementById("lang").textContent = lang === "tr" ? "EN" : "TR";
    document.getElementById("privacyLink").href = "no9/privacy/" + (lang === "tr" ? "#tr" : "");
    document.getElementById("countGames").textContent = GAMES.length;
    renderShots();
    renderFilters();
    renderGrid();
  }

  document.getElementById("lang").onclick = function () {
    lang = lang === "tr" ? "en" : "tr";
    try { localStorage.setItem("lang", lang); } catch (e) { /* private mode */ }
    apply();
  };
  document.getElementById("year").textContent = new Date().getFullYear();
  apply();
})();
