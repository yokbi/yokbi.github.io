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
- `app-ads.txt` — AdMob publisher line for every game. Must stay at the root.

Local preview: `python3 -m http.server` and open http://localhost:8000.
