// Site content. Edit this file to update the page — everything is rendered from here.
// Each text field has a Turkish (tr) and English (en) version.

window.SITE_DATA = {
  name: "Uğur Buğra Özkaya",
  email: "ugurbugraozkaya@gmail.com",
  linkedin: "https://www.linkedin.com/in/ugurbugraozkaya",
  github: "https://github.com/yokbi",
  location: { tr: "Ankara, Türkiye", en: "Ankara, Türkiye" },

  // One-line positioning used as the main headline.
  headline: {
    tr: "Kritik sistemleri ayakta tutan ekipleri kuruyor ve yönetiyorum.",
    en: "I build and lead the teams behind mission-critical systems."
  },

  roles: {
    tr: ["Yazılım Takım Lideri", ".NET Mikroservis Mimarı", "Full Stack Geliştirici", "Entegrasyon Uzmanı"],
    en: ["Software Team Lead", ".NET Microservices Architect", "Full Stack Developer", "Integration Specialist"]
  },

  summary: {
    tr: "Kurumsal ölçekli sistemleri ve ekipleri yöneten, 6+ yıllık deneyime sahip bir Yazılım Takım Lideriyim. Mimari, teslimat ve canlı ortam operasyonlarının sorumluluğunu uçtan uca üstleniyorum. .NET mikroservisleri, olay güdümlü ve REST tabanlı mimariler ile bulut sistemlerinde ölçeklenebilirlik, dayanıklılık ve sistem tasarımına odaklanıyorum. Mühendislik ve işletme eğitimimi birleştirerek teknik açıdan sağlam ve iş hedefleriyle uyumlu kararlar alıyorum.",
    en: "Software Development Team Lead with 6+ years of experience leading enterprise-grade systems and teams, with hands-on ownership of architecture, delivery, and production operations. I specialise in .NET microservices, event-driven and REST-based architectures, and cloud-based systems, with a strong focus on scalability, resiliency, and system design. Combining engineering and business education, I make technically sound, business-aligned decisions."
  },

  stats: [
    { value: 6, suffix: "+", label: { tr: "Yıllık deneyim", en: "Years of experience" } },
    { value: 10, suffix: "", label: { tr: "Kişilik ekip liderliği", en: "Engineers led" } },
    { value: 1500, suffix: "+", label: { tr: "Aktif kullanıcı", en: "Active users" } },
    { value: 100, suffix: "+", label: { tr: "Tıbbi cihaz entegrasyonu", en: "Medical device integrations" } }
  ],

  experience: [
    {
      company: "Limak Technology",
      location: "Ankara",
      positions: [
        { title: { tr: "Yazılım Geliştirme Takım Lideri", en: "Software Development Team Lead" }, period: { tr: "Oca 2023 – Günümüz", en: "Jan 2023 – Present" } },
        { title: { tr: "Full Stack Geliştirici", en: "Full Stack Developer" }, period: { tr: "May 2022 – Oca 2023", en: "May 2022 – Jan 2023" } }
      ],
      bullets: {
        tr: [
          "Agile/Scrum ile tüm SDLC'yi yöneten 10 kişilik çok disiplinli bir mühendislik ekibine liderlik; teknik kararlar ve mimari onaylarda son söz sahibi.",
          ".NET 8 mikroservis ekosistemine geçişi tasarlayıp yönettim (Ocelot API Gateway, Docker, MSSQL, Graylog): %40 daha iyi ölçeklenebilirlik, %25 daha düşük bakım maliyeti.",
          "Azure DevOps ve IIS ile kurumsal CI/CD hatları kurdum; yayın döngüsü günlerden saatlere indi, kesintisiz dağıtım mümkün oldu.",
          "Next.js'e frontend dönüşümünü yönettim: sayfa yükleme süresinde %50 azalma, kullanıcı etkileşiminde %25 artış.",
          "İşe alımda son teknik karar verici oldum, 5 junior geliştiriciye mentorluk yaptım: ekip hızında %25 artış, oryantasyon süresinde %40 azalma.",
          "Canlı sistemlerin tam sorumluluğunu üstlenerek olay yönetimi, güvenilirlik ve iş sürekliliğini sağladım."
        ],
        en: [
          "Lead a 10-member cross-functional engineering team owning the full SDLC with Agile/Scrum, with final authority over technical decisions and architectural approvals.",
          "Architected and led the migration to a .NET 8 microservices ecosystem (Ocelot API Gateway, Docker, MSSQL, Graylog): 40% better scalability, 25% lower maintenance costs.",
          "Designed enterprise CI/CD pipelines with Azure DevOps and IIS, cutting release cycles from days to hours and enabling zero-downtime deployments.",
          "Drove the frontend transformation to Next.js: 50% faster page loads and 25% higher user engagement.",
          "Final technical decision-maker in hiring; mentored 5 junior developers for a 25% increase in team velocity and 40% shorter onboarding.",
          "Own production systems end to end — incident management, reliability and business continuity."
        ]
      },
      // Short, scannable results shown before the full bullet list.
      highlights: {
        tr: ["10 kişilik ekip, mimari onayda son söz", "Monolitten .NET 8 mikroservislere: +%40 ölçeklenebilirlik", "Yayın döngüsü günlerden saatlere"],
        en: ["10-person team, final say on architecture", "Monolith to .NET 8 microservices: +40% scalability", "Release cycle from days to hours"]
      },
      tags: [".NET 8", "Microservices", "Next.js", "Azure DevOps", "Docker", "MSSQL"]
    },
    {
      company: "Fonet IT (HIS)",
      location: "Ankara",
      positions: [
        { title: { tr: "Yazılım Geliştirici", en: "Software Developer" }, period: { tr: "Oca 2022 – May 2022", en: "Jan 2022 – May 2022" } }
      ],
      bullets: {
        tr: [
          "C#, Java ve VB.NET ile Hastane Bilgi Sistemlerinin (HBS) bakımını ve geliştirmesini yaptım.",
          "Oracle ve ASP.NET kullanarak hastane sistemlerini MHRS ile entegre ettim.",
          "Tıbbi ihtiyaçlar için C# ile LIS geliştirdim; sağlık sistemleri ve tıbbi cihazlar için SOAP/REST entegrasyonları ve .NET web servisleri yazdım."
        ],
        en: [
          "Maintained and enhanced Hospital Information Systems (HIS) using C#, Java and VB.NET.",
          "Integrated hospital systems with MHRS (national appointment system) using Oracle and ASP.NET.",
          "Developed LIS modules in C#; built .NET web services and SOAP/REST integrations for healthcare systems and medical devices."
        ]
      },
      highlights: {
        tr: ["Hastane Bilgi Sistemi geliştirme", "MHRS ulusal randevu entegrasyonu", "LIS modülleri ve web servisleri"],
        en: ["Hospital Information System development", "MHRS national appointment integration", "LIS modules and web services"]
      },
      tags: ["C#", "Java", "VB.NET", "Oracle", "SOAP", "REST"]
    },
    {
      company: "MedDATA (HIS)",
      location: "Ankara",
      positions: [
        { title: { tr: "Yazılım Geliştirici", en: "Software Developer" }, period: { tr: "Oca 2020 – Oca 2022", en: "Jan 2020 – Jan 2022" } }
      ],
      bullets: {
        tr: [
          "Delphi, C#, REST, SOAP, XML, JSON ve Oracle ile HBS'den HBS'ye (H2H) güvenli ve kayıpsız gerçek zamanlı veri aktarımı entegrasyonları tasarlayıp geliştirdim.",
          "Özel ve devlet hastanelerinde HL7 ve özel protokolleri destekleyen 20+ kurumsal sistem ve 100+ tıbbi cihaz (LIS) entegrasyonu teslim ettim.",
          "İki kişilik destek ekibine liderlik ederek sahada test ve doğrulama süreçlerini yönettim; kritik sağlık ortamlarında sıfır veri kaybı sağladım."
        ],
        en: [
          "Designed and developed HIS-to-HIS (H2H) integrations with Delphi, C#, REST, SOAP, XML, JSON and Oracle for secure, lossless real-time data transfer.",
          "Delivered 20+ enterprise system integrations and 100+ medical device (LIS) integrations supporting HL7 and proprietary protocols across private and public hospitals.",
          "Led a two-person support team through on-site testing and validation, guaranteeing zero data loss in mission-critical healthcare environments."
        ]
      },
      highlights: {
        tr: ["20+ kurumsal sistem entegrasyonu", "100+ tıbbi cihaz (HL7) entegrasyonu", "Kritik ortamlarda sıfır veri kaybı"],
        en: ["20+ enterprise system integrations", "100+ medical device (HL7) integrations", "Zero data loss in critical environments"]
      },
      tags: ["Delphi", "C#", "HL7", "Oracle", "XML/JSON"]
    }
  ],

  projects: [
    {
      id: "career-ik",
      category: "limak",
      name: "Career İK",
      tagline: { tr: "Otel grupları için İK ve işe alım platformu", en: "HR & recruitment platform for hotel groups" },
      description: {
        tr: "Next.js ve .NET 8 tabanlı İK platformu. Müşteri geri bildirimlerini sürekli geliştirmeye dönüştürdüm, MSSQL sorgularını ölçeklenebilirlik için optimize ettim ve backend'i güvenlik ve performans için .NET 8'e taşıdım.",
        en: "A Next.js and .NET 8 based HR platform. I turned customer feedback into continuous improvements, optimised MSSQL queries for scale and migrated the backend to .NET 8 for security and performance."
      },
      highlights: {
        tr: ["Next.js'e geçiş ile %50 daha hızlı sayfa yükleme", "Azure DevOps & IIS CI/CD ile %60 daha az manuel dağıtım hatası", "Paydaşlarla iş hedeflerine uyumlu yol haritası"],
        en: ["50% faster page loads after the Next.js migration", "60% fewer manual deployment errors with Azure DevOps & IIS CI/CD", "Roadmap aligned with business goals together with stakeholders"]
      },
      metrics: [
        { value: "40+", label: { tr: "otel", en: "hotels" } },
        { value: { tr: "1.500+", en: "1,500+" }, label: { tr: "aktif kullanıcı", en: "active users" } },
        { value: { tr: "-%90", en: "-90%" }, label: { tr: "kâğıt kullanımı", en: "paper usage" } },
        { value: { tr: "-%70", en: "-70%" }, label: { tr: "zaman kaybı", en: "time loss" } }
      ],
      tech: ["Next.js", ".NET 8", "MSSQL", "Azure DevOps", "IIS"]
    },
    {
      id: "limak-connect",
      category: "limak",
      name: "Limak Connect",
      tagline: { tr: "Çalışan self-servis portalı", en: "Employee self-service portal" },
      description: {
        tr: "Django ve PostgreSQL üzerinde mimarisini kurduğum, React.js arayüzlü ve karmaşık ERP entegrasyonlarına sahip çalışan portalı. İzin talepleri, seyahat onayları ve görev yönetimi tek bir arayüzde.",
        en: "An employee portal I architected on Django and PostgreSQL, with a React.js interface and complex ERP integrations. Leave requests, travel approvals and task management in one unified interface."
      },
      highlights: {
        tr: ["İzin süreci 2-3 günden 5 dakikaya indi", "Diğer ürünlerle entegrasyonla kesintisiz işlemler", "Junior ekip üyelerine mentorluk"],
        en: ["Leave request process cut from 2-3 days to 5 minutes", "Seamless transactions through integration with other products", "Mentored junior team members"]
      },
      metrics: [
        { value: { tr: "5 dk", en: "5 min" }, label: { tr: "izin onayı", en: "leave approval" } },
        { value: "3", label: { tr: "süreç tek ekranda", en: "workflows in one place" } }
      ],
      tech: ["Django", "Python", "PostgreSQL", "React.js", "ERP"]
    },
    {
      id: "backend-arch",
      category: "limak",
      name: { tr: "Yeni Backend Mimarisi", en: "New Backend Architecture" },
      tagline: { tr: "Monolitten .NET 8 mikroservislere", en: "From monolith to .NET 8 microservices" },
      description: {
        tr: "Eski backend'i Docker, MSSQL, Graylog ve Ocelot API Gateway ile .NET 8 mikroservis mimarisine taşıdım. Domain-driven design ile servis sınırlarını belirleyip bağımsız ölçeklenebilirlik sağladım.",
        en: "Migrated the legacy backend to a .NET 8 microservices architecture with Docker, MSSQL, Graylog and Ocelot API Gateway. Used domain-driven design to set service boundaries for independent scalability."
      },
      highlights: {
        tr: ["SOLID prensipleriyle mikroservis ve API Gateway tasarımı", "Gelişmiş loglama, izleme ve dağıtım otomasyonu", "Saatler içinde, kesintisiz yayınlar"],
        en: ["Microservices and API Gateway designed around SOLID principles", "Improved logging, monitoring and deployment automation", "Zero-downtime releases within hours"]
      },
      metrics: [
        { value: { tr: "+%40", en: "+40%" }, label: { tr: "ölçeklenebilirlik", en: "scalability" } },
        { value: { tr: "-%25", en: "-25%" }, label: { tr: "bakım maliyeti", en: "maintenance cost" } }
      ],
      tech: [".NET 8", "Ocelot", "Docker", "Graylog", "MSSQL", "DDD"]
    },
    {
      id: "h2h",
      category: "health",
      name: { tr: "HBS–HBS (H2H) Entegrasyonu", en: "HIS-to-HIS (H2H) Integration" },
      tagline: { tr: "Hastaneler arası gerçek zamanlı veri aktarımı", en: "Real-time data transfer between hospitals" },
      description: {
        tr: "Müşteri ihtiyaçlarına özel, tamamen otomatik bir entegrasyon çözümünün mimarisini tasarladım ve geliştirmeyi yönettim. Farklı iki HBS'yi birbirine bağlayarak hasta verileri, tetkik sonuçları ve hayati bilgilerin anlık ve kayıpsız aktarımını sağladım.",
        en: "Designed the architecture of a fully automated integration solution tailored to customer needs and led its development. Connected two disparate HIS systems for instant, lossless transfer of patient data, test results and vital information."
      },
      highlights: {
        tr: ["Sistem mimarı ve geliştirme lideri", "Sahada titiz test ve doğrulama", "Sıfır veri kaybı"],
        en: ["System architect and development lead", "Rigorous on-site testing and validation", "Zero data loss"]
      },
      metrics: [
        { value: "20+", label: { tr: "kurumsal entegrasyon", en: "enterprise integrations" } },
        { value: "0", label: { tr: "veri kaybı", en: "data loss" } }
      ],
      tech: ["Delphi", "C#", "REST", "SOAP", "Oracle"]
    },
    {
      id: "lis",
      category: "health",
      name: { tr: "Tıbbi Cihaz (LIS) Entegrasyonları", en: "Medical Device (LIS) Integrations" },
      tagline: { tr: "Laboratuvar cihazlarından HBS'ye", en: "From lab devices to the HIS" },
      description: {
        tr: "Özel ve devlet hastanelerinde laboratuvar ve tıbbi cihazları HL7 ve üreticiye özel protokollerle hastane bilgi sistemlerine bağladım.",
        en: "Connected laboratory and medical devices to hospital information systems over HL7 and vendor-specific protocols across private and public hospitals."
      },
      highlights: {
        tr: ["HL7 ve özel protokol desteği", "C# ile LIS modülleri", "Kritik ortamlarda güvenilir aktarım"],
        en: ["HL7 and proprietary protocol support", "LIS modules in C#", "Reliable transfer in critical environments"]
      },
      metrics: [
        { value: "100+", label: { tr: "cihaz entegrasyonu", en: "device integrations" } }
      ],
      tech: ["C#", "HL7", "Oracle", ".NET"]
    },
    {
      id: "mhrs",
      category: "health",
      name: { tr: "MHRS Entegrasyonu", en: "MHRS Integration" },
      tagline: { tr: "Merkezi Hekim Randevu Sistemi bağlantısı", en: "National appointment system connection" },
      description: {
        tr: "Fonet HBS'yi Merkezi Hekim Randevu Sistemi (MHRS) ile Oracle, ASP.NET ve C# kullanarak entegre ettim; Fonet H2H için .NET web servisleri geliştirdim.",
        en: "Integrated Fonet HIS with Türkiye's national appointment system (MHRS) using Oracle, ASP.NET and C#, and built .NET web services for Fonet H2H."
      },
      highlights: {
        tr: ["Ulusal sistemle entegrasyon", ".NET web servisleri", "SOAP/REST"],
        en: ["Integration with a national system", ".NET web services", "SOAP/REST"]
      },
      metrics: [
        { value: { tr: "Ulusal", en: "National" }, label: { tr: "sistem entegrasyonu", en: "system integration" } }
      ],
      tech: ["ASP.NET", "C#", "Oracle", "SOAP"]
    }
  ],

  skills: [
    { group: { tr: "Mimari & Backend", en: "Architecture & Backend" }, items: [".NET 8", "ASP.NET", ".NET MVC", "Microservices", "REST APIs", "Event-driven", "DDD", "Clean Architecture", "SOLID", "OOP", "Django"] },
    { group: { tr: "Frontend", en: "Frontend" }, items: ["Next.js", "React.js", "JavaScript", "HTML", "CSS"] },
    { group: { tr: "DevOps & Bulut", en: "DevOps & Cloud" }, items: ["Azure DevOps", "CI/CD", "Docker", "IIS", "Graylog", "Ocelot API Gateway"] },
    { group: { tr: "Veritabanları", en: "Databases" }, items: ["MSSQL", "PostgreSQL", "Oracle", "Redis"] },
    { group: { tr: "Sağlık Entegrasyonu", en: "Healthcare Integration" }, items: ["HL7", "LIS", "H2H", "SOAP", "XML", "Delphi"] },
    { group: { tr: "Liderlik", en: "Leadership" }, items: ["Agile / Scrum", "SDLC", "Mentoring", "Hiring", "Incident Management", "Stakeholder Management"] }
  ],

  education: {
    school: "Atatürk Üniversitesi",
    location: "Erzurum",
    year: "2019",
    degrees: {
      tr: ["Bilgisayar Mühendisliği, Lisans", "İşletme, Lisans"],
      en: ["B.Sc. Computer Engineering", "Bachelor of Business Administration"]
    },
    note: {
      tr: "Java, Python, C#, MATLAB; görüntü işleme, Arduino ve algoritma tasarımı.",
      en: "Java, Python, C#, MATLAB; image processing, Arduino and algorithm design."
    }
  },

  languages: {
    tr: ["Türkçe", "İngilizce", "Almanca"],
    en: ["Turkish", "English", "German"]
  }
};
