// Every game on the site. Edit this file to add a game or change its text;
// index.html and site.js render everything from here.
//
// status: "soon"  — finished, on its way to the stores
//         "dev"   — in development
//         "proto" — early prototype
// group:  sport | tycoon | casual | puzzle  (the filter chips)
// icon:   path under img/games/, or omit to draw `tile` (an inline glyph
//         on a gradient) for games that do not have final art yet.

window.GAMES = [
  {
    id: "no9",
    name: "No.9",
    status: "soon",
    group: "sport",
    icon: "img/games/no9.webp",
    platforms: ["iOS", "Android"],
    genre: { tr: "Futbolcu kariyeri", en: "Striker career" },
    pitch: {
      tr: "Teknik direktör değilsin, 9 numarasın. Tek bir forveti altyapıdan zirveye taşı.",
      en: "You are not the manager, you are the No.9. Take one striker from the academy to the top."
    },
    link: "no9/"
  },
  {
    id: "teknik-direktor",
    name: "Teknik Direktör",
    status: "dev",
    group: "sport",
    icon: "img/games/teknik-direktor.webp",
    platforms: ["PC", "iOS", "Android"],
    genre: { tr: "Futbol menajerliği", en: "Football management" },
    pitch: {
      tr: "Kadroyu kur, taktiği ver, transfer pazarında pazarlık et. Onlarca lig, çok sezonlu kariyer.",
      en: "Build the squad, set the tactics, haggle in the transfer market. Dozens of leagues, multi-season careers."
    }
  },
  {
    id: "night-market",
    name: "Night Market Tycoon",
    status: "dev",
    group: "tycoon",
    icon: "img/games/night-market.webp",
    platforms: ["iOS", "Android"],
    genre: { tr: "İşletme", en: "Tycoon" },
    pitch: {
      tr: "Boş bir meydanı dünyanın sokak lezzetleriyle dolu bir gece pazarına dönüştür.",
      en: "Turn an empty square into a night market full of street food from around the world."
    }
  },
  {
    id: "cozy-laundromat",
    name: "Cozy Laundromat Tycoon",
    status: "dev",
    group: "tycoon",
    icon: "img/games/cozy-laundromat.webp",
    platforms: ["iOS", "Android"],
    genre: { tr: "İşletme", en: "Tycoon" },
    pitch: {
      tr: "Küçük, sıcak bir mahalle çamaşırhanesini makine makine büyüt. Aldığın her şey dükkânda görünür.",
      en: "Grow a small, cosy neighbourhood laundromat one machine at a time. Everything you buy shows up in the shop."
    }
  },
  {
    id: "tiny-ferry",
    name: "Tiny Ferry Company",
    status: "dev",
    group: "tycoon",
    tile: "ferry",
    platforms: ["iOS", "Android"],
    genre: { tr: "İşletme", en: "Tycoon" },
    pitch: {
      tr: "Adalar arasında hat aç, filonu büyüt, kaptan işe al. Yaşayan bir takımada haritası.",
      en: "Open routes between islands, grow a fleet and hire captains on a living archipelago map."
    }
  },
  {
    id: "hotel-tycoon",
    name: "Hotel Tycoon",
    status: "dev",
    group: "tycoon",
    icon: "img/games/hotel-tycoon.webp",
    platforms: ["iOS", "Android"],
    genre: { tr: "Otel işletmeciliği", en: "Hotel management" },
    pitch: {
      tr: "Butik bir oteli oda oda kur, misafirleri ağırla, işletmeyi büyüt.",
      en: "Build a boutique hotel room by room, look after your guests and grow the business."
    }
  },
  {
    id: "burger-shop",
    name: "Burger Shop",
    status: "dev",
    group: "tycoon",
    tile: "burger",
    platforms: ["iOS", "Android"],
    genre: { tr: "Zaman yönetimi", en: "Time management" },
    pitch: {
      tr: "İflas etmiş bir aşçısın. Seyyar arabadan başla, restoran sahibi ol.",
      en: "You are a chef who went bust. Start with a street cart and work your way up to a restaurant."
    }
  },
  {
    id: "donerci",
    name: "Dönerci Usta",
    status: "soon",
    group: "casual",
    tile: "doner",
    platforms: ["iOS", "Android"],
    genre: { tr: "Hibrit casual", en: "Hybrid casual" },
    pitch: {
      tr: "Parmağınla şişten eti kes, siparişi hazırla, müşterinin sabrı tükenmeden servis et.",
      en: "Swipe to slice the spit, build the order and serve it before the customer runs out of patience."
    },
    link: "donerci/"
  },
  {
    id: "futbol-zipla",
    name: "Futbol Zıpla",
    status: "dev",
    group: "casual",
    icon: "img/games/futbol-zipla.webp",
    platforms: ["iOS", "Android"],
    genre: { tr: "Hyper casual", en: "Hyper casual" },
    pitch: {
      tr: "Dokun, topu sektir. Engellere değmeden altınları topla, yeni toplar aç.",
      en: "Tap to keep the ball up. Collect coins, dodge obstacles and unlock new balls."
    }
  },
  {
    id: "top-sektirme",
    name: "Top Sektirme",
    status: "dev",
    group: "casual",
    tile: "bounce",
    platforms: ["iOS", "Android"],
    genre: { tr: "Sonsuz koşu", en: "Endless runner" },
    pitch: {
      tr: "Karakter yok, sen topsun. Zıpla, yay pediyle uç, aşağı dal, engelleri aş.",
      en: "No character, you are the ball. Jump, spring off pads, dive down and clear the obstacles."
    }
  },
  {
    id: "futbol-draft",
    name: "Futbol Draft 5-0",
    status: "dev",
    group: "sport",
    icon: "img/games/futbol-draft.webp",
    platforms: ["Web"],
    genre: { tr: "Draft ve simülasyon", en: "Draft & simulation" },
    pitch: {
      tr: "İlk 11'ini draft et, 5 maçlık eleme turnuvasını tek maç kaybetmeden kazan.",
      en: "Draft your starting eleven and win a five-match knockout without losing once."
    }
  },
  {
    id: "lantern-harbor",
    name: "Lantern Harbor",
    status: "proto",
    group: "tycoon",
    icon: "img/games/lantern-harbor.webp",
    platforms: ["iOS", "Android"],
    genre: { tr: "Liman kurma", en: "Harbour builder" },
    pitch: {
      tr: "Limanını kur, gemilerini sefere çıkar, ticaretle kasabanı büyüt.",
      en: "Build your harbour, send ships on expeditions and grow the town through trade."
    }
  },
  {
    id: "prism-relay",
    name: "Prism Relay",
    status: "proto",
    group: "puzzle",
    icon: "img/games/prism-relay.webp",
    platforms: ["iOS", "Android"],
    genre: { tr: "Işık bulmacası", en: "Light puzzle" },
    pitch: {
      tr: "Aynaları ve prizmaları döndür, ışını hedefe ulaştır, yıldızları uyandır.",
      en: "Turn mirrors and prisms, bend the beam onto its targets and wake the stars."
    }
  },
  {
    id: "swing-state",
    name: "Swing State Sprint",
    status: "proto",
    group: "puzzle",
    icon: "img/games/swing-state.webp",
    platforms: ["Web"],
    genre: { tr: "Parti oyunu", en: "Party game" },
    pitch: {
      tr: "Kırmızı mı mavi mi? 90 saniyede tek parmakla kalabalığı kendi rengine çevir.",
      en: "Red or blue? Ninety seconds, one finger: turn the crowd to your colour."
    }
  }
];
