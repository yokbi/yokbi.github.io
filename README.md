# yokbi.github.io

Yokbi Games, served by GitHub Pages at https://yokbi.github.io from `main`.

Plain HTML/CSS/JS, no build step.

- `assets/js/games.js` — every game on the site (name, status, platforms, TR/EN text). Add a game here.
- `assets/js/site.js` — interface text (TR/EN) and rendering; placeholder tiles for games without final art.
- `img/games/` — 256px card icons; `img/no9/` — No.9 screenshots, one set per language.
- `no9/` — No.9 support page and privacy policy. Their source of truth is `docs/site/` in the
  `oyuncusimulator` repository; the App Store listing links to these URLs, so do not move them.
- `donerci/` — Dönerci Usta (Doner Master) support page, `privacy/` (EN) and `gizlilik/` (TR + KVKK).
  Source of truth is `docs/site/` in the `donersim` repository; the app's Settings and the store
  listings link to these URLs, so do not move them.
- `night-market/` — Night Market Tycoon support page and privacy policy (`privacy/`, EN + TR on one page). Source of
  truth is `site/` in the `nightmarket` repository; the store listings and consoles link to these URLs, so do not
  move them.
- `kahve/` — Kahveciler Kralı support page and privacy policy (`privacy/`, EN + TR on one page). Source of
  truth is `docs/site/kahve/` in the `kahvehanegame` repository; App Store Connect links to these URLs, so do not
  move them.
- `okaan-run/` — OKAAN RUN support page and privacy policy (EN + TR on one page).
- Support page + `privacy/` (EN + TR on one page) for every other Yokbi game. Each game's
  `docs/YAYIN-STANDARDI.md` lists its URLs; store listings link to them, so do not move them once a game is
  submitted: `burger/`, `cozy-laundromat/` (copied from `site/` in `CozyLaundromat`), `fastfood/` (Burger Shop),
  `futbol-draft/`, `futbol-zipla/`, `hotel-tycoon/`, `lantern-harbor/`, `otowash/`, `prism-relay/`,
  `swing-state-sprint/`, `teknik-direktor/`, `tiny-ferry/` (text from `src/data/privacy.ts` in `TinyFerry`),
  `top-sektirme/`, `usta-masasi/`.
- `app-ads.txt` — AdMob publisher line for every game. Must stay at the root.

Local preview: `python3 -m http.server` and open http://localhost:8000.
