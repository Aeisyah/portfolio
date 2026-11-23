/* ============================================================================
   CONTENT.JS  —  SEMUA TEKS ADA DI SINI. EDIT FAIL INI SAHAJA.
   ----------------------------------------------------------------------------
   Portfolio ini DWIBAHASA. Setiap teks ditulis begini:

        { ms: 'teks Bahasa Melayu', en: 'English text' }

   ms = Bahasa Melayu (butang MAL)
   en = English        (butang ENG)

   Tukar KEDUA-DUA bahagian supaya kedua-dua bahasa kemas kini.
   Lepas edit: simpan (Ctrl+S) → jalankan build.ps1 → refresh browser.
   ========================================================================== */

const CONTENT = {

  /* Bahasa yang dipapar kali pertama: 'ms' atau 'en' */
  defaultLang: 'ms',

  /* ==========================================================================
     TEMPAT FAIL APK DISIMPAN
     --------------------------------------------------------------------------
     ''  (kosong)  = guna folder apk/ di sebelah fail ini  ← untuk kegunaan tempatan
     URL           = ambil dari hosting luar               ← untuk tapak dalam talian

     Kenapa perlu: fail APK berjumlah 470 MB. Kebanyakan hosting statik percuma
     menolak fail sebesar itu (Cloudflare Pages had 25 MB, GitHub Pages 100 MB).
     Naikkan APK ke GitHub Releases (had 2 GB satu fail), kemudian tampal
     alamat asasnya di sini.

     Contoh:
     apkBase: 'https://github.com/Aeisyah/portfolio/releases/download/v1/',

     Kosongkan semula untuk kembali guna folder tempatan.
     ========================================================================== */
  apkBase: '',

  /* Tunjuk butang muat turun APK? Tetapkan false untuk sembunyikan kesemuanya
     (berguna kalau anda hos tapak sahaja, tanpa fail APK). */
  showApk: true,

  /* ==========================================================================
     1. MAKLUMAT DIRI  —  << TUKAR BAHAGIAN INI DULU >>
     ========================================================================== */
  profile: {
    /* Nama & pautan — sama untuk kedua-dua bahasa */
    name: 'Aeisyah bt Samsuddin',                            // << TUKAR
    email: 'aeisyahsamsuddin@gmail.com',               // << TUKAR
    phone: '+60 12-3052050',                      // << TUKAR
    linkedin: 'https://www.linkedin.com/in/aeisyah-samsuddin-4566071a9',
    linkedinLabel: 'linkedin.com/in/aeisyah-samsuddin',
    github: 'https://github.com/Aeisyah',
    githubLabel: 'github.com/Aeisyah',

    role: {
      ms: 'Software Engineer · Mobile Developer · Full Stack',
      en: 'Software Engineer · Mobile Developer · Full Stack',
    },
    roleShort: { ms: 'Software Engineer', en: 'Software Engineer' },

    location: { ms: 'Kuala Lumpur, Malaysia', en: 'Kuala Lumpur, Malaysia' },

    /* Perenggan pengenalan diri */
    intro: {
      ms: 'Saya seorang Software Engineer yang membina produk mudah alih end-to-end — ' +
        'dari reka bentuk antara muka, logik aplikasi, sehingga backend dan security ' +
        'rules. Bekerja merentas full stack dengan Flutter di bahagian hadapan dan ' +
        'Firebase di bahagian belakang. Portfolio ini memaparkan lima sistem — empat ' +
        'projek peribadi dan satu himpunan projek syarikat yang saya kendalikan — ' +
        'setiap satu dengan identiti visual, seni bina dan cabaran teknikal tersendiri.',
      en: 'I am a Software Engineer who builds mobile products end to end — from the ' +
        'interface design and application logic through to the backend and its security ' +
        'rules. I work across the full stack with Flutter on the front end and Firebase ' +
        'behind it. This portfolio presents five systems — four personal projects and one ' +
        'collection of company projects I handle — each with its own visual identity, ' +
        'architecture and technical challenge.',
    },

    /* Kekuatan utama (kad kecil) */
    strengths: [
      {
        icon: '📱',
        title: { ms: 'Pembangunan Mudah Alih', en: 'Mobile Development' },
        desc: {
          ms: 'Flutter & Dart — satu kod asas untuk Android, iOS, desktop dan web.',
          en: 'Flutter & Dart — one codebase for Android, iOS, desktop and web.'
        },
      },
      {
        icon: '🔥',
        title: { ms: 'Backend & Data', en: 'Backend & Data' },
        desc: {
          ms: 'Firebase Auth, Cloud Firestore, security rules dan aliran data masa nyata.',
          en: 'Firebase Auth, Cloud Firestore, security rules and real-time data streams.'
        },
      },
      {
        icon: '🎨',
        title: { ms: 'Reka Bentuk UI', en: 'UI Design' },
        desc: {
          ms: 'Sistem tema tersendiri, glassmorphism dan susun atur responsif.',
          en: 'Custom theme systems, glassmorphism and responsive layouts.'
        },
      },
      {
        icon: '🧠',
        title: { ms: 'Seni Bina Perisian', en: 'Software Architecture' },
        desc: {
          ms: 'Provider + ChangeNotifier, lapisan repository, kod yang boleh diuji.',
          en: 'Provider + ChangeNotifier, repository layers, testable code.'
        },
      },
    ],

    /* Kemahiran — teknikal, jadi sama untuk kedua-dua bahasa */
    skills: [
      'Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Firestore Rules',
      'Provider', 'REST / JSON API', 'Responsive Design', 'Material 3',
      'State Management', 'Git', 'Android / iOS / Web / Desktop',
    ],

    /* Statistik ringkas */
    stats: [
      { value: '5', label: { ms: 'Sistem lengkap', en: 'Complete systems' } },
      { value: '40+', label: { ms: 'Skrin direka', en: 'Screens designed' } },
      { value: '2', label: { ms: 'Projek syarikat', en: 'Company projects' } },
    ],
  },

  /* ==========================================================================
     2. SISTEM  —  susunan di sini = susunan menu
     ========================================================================== */
  systems: [
    {
      id: 'ladydriver',
      no: '01',
      name: 'LadyDriver',
      emoji: '💕',
      accent: '#FF6FA5',
      accentSoft: 'rgba(255,111,165,.14)',

      apk: 'apk/ladydriver.apk',
      apkSize: '49.9 MB',

      tagline: {
        ms: 'Aplikasi e-hailing khas wanita',
        en: 'A women-only ride-hailing app',
      },
      summary: {
        ms: 'Platform tempahan kenderaan gaya Grab yang dikhaskan untuk wanita — pendaftaran ' +
          'menapis jantina di tiga lapisan (UI, AuthService dan Firestore security rules). ' +
          'Padanan penunggang–pemandu berlaku secara masa nyata melalui Firestore, dengan ' +
          'transaksi yang menghalang dua pemandu menerima trip yang sama.',
        en: 'A Grab-style ride-booking platform reserved for women — registration enforces the ' +
          'gender rule at three layers (the UI, AuthService and Firestore security rules). ' +
          'Rider-to-driver matching happens live through Firestore, with a transaction that ' +
          'stops two drivers from accepting the same trip.',
      },
      tech: ['Flutter 3.41', 'Dart 3.11', 'Firebase Auth', 'Cloud Firestore', 'Provider', 'Poppins'],

      features: [
        {
          title: { ms: 'Khas wanita sahaja', en: 'Women only' },
          desc: {
            ms: 'Pilihan "Male" menyekat pendaftaran — dikuatkuasakan di UI, service dan security rules.',
            en: 'Selecting "Male" blocks sign-up — enforced in the UI, the service layer and the security rules.'
          }
        },
        {
          title: { ms: 'Padanan masa nyata', en: 'Real-time matching' },
          desc: {
            ms: 'Permintaan penunggang di-stream kepada semua pemandu yang online; pemandu pertama menerima akan menang.',
            en: 'Rider requests are streamed to every online driver; the first to accept wins the trip.'
          }
        },
        {
          title: { ms: 'Dilindungi transaksi', en: 'Transaction-guarded' },
          desc: {
            ms: 'Firestore transaction menghalang dua pemandu menerima trip yang sama serentak.',
            en: 'A Firestore transaction prevents two drivers accepting the same trip at once.'
          }
        },
        {
          title: { ms: 'Peta lukisan tersendiri', en: 'Hand-painted map' },
          desc: {
            ms: 'CustomPainter melukis peta merah jambu — tiada Maps API key diperlukan.',
            en: 'A CustomPainter draws the soft-pink map — no Maps API key required.'
          }
        },
        {
          title: { ms: 'Anggaran tambang', en: 'Fare estimate' },
          desc: {
            ms: 'Pemilih lokasi boleh cari, dengan pengiraan tambang sebelum tempahan disahkan.',
            en: 'A searchable place picker with a fare calculation before the booking is confirmed.'
          }
        },
        {
          title: { ms: 'Glassmorphism', en: 'Glassmorphism' },
          desc: {
            ms: 'GlassCard, GlassButton dan GlassTextField di atas gradient merah jambu lembut.',
            en: 'GlassCard, GlassButton and GlassTextField over a soft pink gradient.'
          }
        },
      ],

      captions: [
        { ms: 'Skrin Selamat Datang', en: 'Welcome Screen' },
        { ms: 'Utama Penunggang', en: 'Rider Home' },
        { ms: 'Papan Pemuka Pemandu', en: 'Driver Dashboard' },
      ],
      captionSubs: [
        { ms: 'Gerbang pengesahan + peraturan wanita sahaja', en: 'Auth gate with the women-only rule' },
        { ms: 'Pemilih lokasi, peta tersendiri & anggaran tambang', en: 'Place picker, custom map & fare estimate' },
        { ms: 'Suis online + permintaan masa nyata', en: 'Online toggle + live ride requests' },
      ],
    },

    {
      id: 'rembayung',
      no: '02',
      name: 'Rembayung Order',
      emoji: '🌶️',
      accent: '#B02A2A',
      accentSoft: 'rgba(176,42,42,.13)',

      apk: 'apk/rembayung.apk',
      apkSize: '55.9 MB',

      tagline: {
        ms: 'Sistem tempahan produk makanan',
        en: 'A food product ordering system',
      },
      summary: {
        ms: 'Kedai dalam talian bertema warisan Melayu untuk produk sambal dan rempah. ' +
          'Katalog dwibahasa (BM / EN) dibina di atas model L10nText tersendiri, lengkap ' +
          'dengan carian, penapis kategori, troli dan aliran pembayaran sehingga pengesahan pesanan.',
        en: 'A Malay-heritage online store for sambal and spice products. The bilingual ' +
          '(BM / EN) catalogue is built on a custom L10nText model, complete with search, ' +
          'category filters, a cart and a checkout flow through to order confirmation.',
      },
      tech: ['Flutter', 'Provider', 'Playfair Display', 'Inter', 'Bilingual l10n', 'Material 3'],

      features: [
        {
          title: { ms: 'Dwibahasa BM / EN', en: 'Bilingual BM / EN' },
          desc: {
            ms: 'Setiap nama, tagline dan penerangan produk disimpan sebagai L10nText — tukar bahasa serta-merta.',
            en: 'Every product name, tagline and description is stored as L10nText — switch language instantly.'
          }
        },
        {
          title: { ms: 'Katalog & penapis', en: 'Catalogue & filters' },
          desc: {
            ms: 'Kategori sambal, mi, rempah dan istimewa dengan penapis dan carian segera.',
            en: 'Sambal, noodle, spice and special categories with instant filtering and search.'
          }
        },
        {
          title: { ms: 'Aliran pesanan penuh', en: 'Full order flow' },
          desc: {
            ms: 'Produk → troli → checkout → pengesahan → sejarah pesanan.',
            en: 'Product → cart → checkout → confirmation → order history.'
          }
        },
        {
          title: { ms: 'Halaman cerita', en: 'Brand story page' },
          desc: {
            ms: 'Skrin naratif jenama yang menceritakan asal usul resipi kampung.',
            en: 'A narrative screen telling the origin of the kampung recipes.'
          }
        },
        {
          title: { ms: 'Tahap kepedasan', en: 'Spice levels' },
          desc: {
            ms: 'Penunjuk pedas 1–5 dan lencana "best seller" pada kad produk.',
            en: 'A 1–5 heat indicator and a "best seller" badge on the product cards.'
          }
        },
        {
          title: { ms: 'Identiti warisan', en: 'Heritage identity' },
          desc: {
            ms: 'Palet krim–maroon–emas dengan tipografi serif Playfair Display.',
            en: 'A cream–maroon–gold palette with Playfair Display serif typography.'
          }
        },
      ],

      captions: [
        { ms: 'Halaman Utama', en: 'Home Screen' },
        { ms: 'Katalog Produk', en: 'Product Catalogue' },
        { ms: 'Troli & Pembayaran', en: 'Cart & Checkout' },
      ],
      captionSubs: [
        { ms: 'Banner jenama, carian & produk pilihan', en: 'Brand banner, search & featured products' },
        { ms: 'Penapis kategori, penilaian & tahap kepedasan', en: 'Category filters, ratings & heat levels' },
        { ms: 'Kemas kini kuantiti, ringkasan & checkout', en: 'Quantity updates, summary & checkout' },
      ],
    },

    {
      id: 'sedekah',
      no: '03',
      name: 'SedekahApps',
      emoji: '🕌',
      accent: '#0F7B6C',
      accentSoft: 'rgba(15,123,108,.13)',

      apk: 'apk/sedekah.apk',
      apkSize: '51.5 MB',

      tagline: {
        ms: 'Direktori QR sedekah masjid & surau',
        en: 'A QR donation directory for mosques & suraus',
      },
      summary: {
        ms: 'Direktori institusi — masjid, surau dan pertubuhan — yang memaparkan kod QR ' +
          'DuitNow untuk sumbangan segera. Data diambil dari Cloud Firestore dengan sandaran ' +
          'senarai tempatan apabila tiada sambungan, jadi aplikasi sentiasa boleh digunakan.',
        en: 'A directory of institutions — mosques, suraus and organisations — surfacing their ' +
          'DuitNow QR codes for instant donations. Data comes from Cloud Firestore with a ' +
          'local fallback list when there is no connection, so the app always works.',
      },
      tech: ['Flutter', 'Cloud Firestore', 'Firestore Rules', 'Material 3', 'Light / Dark theme'],

      features: [
        {
          title: { ms: 'Direktori institusi', en: 'Institution directory' },
          desc: {
            ms: 'Masjid, surau dan pertubuhan boleh ditapis mengikut negeri dan kategori.',
            en: 'Mosques, suraus and organisations filterable by state and category.'
          }
        },
        {
          title: { ms: 'QR DuitNow', en: 'DuitNow QR' },
          desc: {
            ms: 'Setiap institusi membawa payload QR sendiri — imbas dan terus menyumbang.',
            en: 'Each institution carries its own QR payload — scan and donate straight away.'
          }
        },
        {
          title: { ms: 'Berbilang kaedah bayar', en: 'Multiple payment methods' },
          desc: {
            ms: "Menyokong DuitNow, Touch 'n Go eWallet dan Boost.",
            en: "Supports DuitNow, Touch 'n Go eWallet and Boost."
          }
        },
        {
          title: { ms: 'Sandaran luar talian', en: 'Offline fallback' },
          desc: {
            ms: 'Senarai contoh tempatan digunakan apabila Firestore kosong atau tiada internet.',
            en: 'A local sample list is used when Firestore is empty or the device is offline.'
          }
        },
        {
          title: { ms: 'Kalendar & papan pendahulu', en: 'Calendar & leaderboard' },
          desc: {
            ms: 'Penjejak amalan harian dan papan pendahulu penyumbang komuniti.',
            en: 'A daily practice tracker and a community contributor leaderboard.'
          }
        },
        {
          title: { ms: 'Tema terang & gelap', en: 'Light & dark themes' },
          desc: {
            ms: 'Satu sistem tema hijau, gradient penuh skrin di kedua-dua mod.',
            en: 'One green theme system with a full-screen gradient in both modes.'
          }
        },
      ],

      captions: [
        { ms: 'Direktori Utama', en: 'Main Directory' },
        { ms: 'Butiran & Kod QR', en: 'Details & QR Code' },
        { ms: 'Papan Pendahulu', en: 'Leaderboard' },
      ],
      captionSubs: [
        { ms: 'Carian, penapis kategori & senarai institusi', en: 'Search, category filters & institution list' },
        { ms: 'Payload DuitNow untuk sumbangan segera', en: 'DuitNow payload for instant donations' },
        { ms: 'Ranking institusi & jejak sumbangan komuniti', en: 'Institution ranking & community giving' },
      ],
    },

    {
      id: 'cinema',
      no: '04',
      name: 'Cinema Booking',
      emoji: '🎬',
      accent: '#0A84FF',
      accentSoft: 'rgba(10,132,255,.13)',

      apk: 'apk/cinema.apk',
      apkSize: '50.6 MB',

      tagline: {
        ms: 'Tempahan tiket dengan kunci tempat duduk masa nyata',
        en: 'Ticket booking with real-time seat locking',
      },
      summary: {
        ms: 'Aplikasi tempahan tiket wayang sembilan skrin dengan ciri utama: kunci tempat duduk ' +
          'masa nyata. Apabila pengguna lain memilih kerusi, kerusi itu bertukar kuning dan ' +
          'terus terkunci pada skrin anda — first-come-first-served dikuatkuasakan oleh ' +
          'Firestore transaction.',
        en: 'A nine-screen cinema ticket booking app whose headline feature is real-time seat ' +
          'locking. The moment another user takes a seat it turns amber and locks on your ' +
          'screen — first-come-first-served, enforced by a Firestore transaction.',
      },
      tech: ['Flutter', 'Provider', 'Cloud Firestore', 'JSON API', 'Responsive', 'Frosted Glass'],

      features: [
        {
          title: { ms: 'Kunci kerusi masa nyata', en: 'Real-time seat locking' },
          desc: {
            ms: 'Stream<Set<String>> menyiarkan kerusi yang sedang dikunci pengguna lain — peta kerusi bertindak balas serta-merta.',
            en: 'A Stream<Set<String>> broadcasts seats currently locked by others — the seat map reacts instantly.'
          }
        },
        {
          title: { ms: 'First-come-first-served', en: 'First-come-first-served' },
          desc: {
            ms: 'Firestore transaction memastikan hanya seorang boleh memenangi sesuatu kerusi.',
            en: 'A Firestore transaction guarantees only one person can win a given seat.'
          }
        },
        {
          title: { ms: 'Dua backend boleh tukar', en: 'Two swappable backends' },
          desc: {
            ms: 'Mock (simulasi setempat) atau Firestore sebenar — dipilih automatik semasa but.',
            en: 'Mock (local simulation) or real Firestore — chosen automatically at startup.'
          }
        },
        {
          title: { ms: 'JSON sebagai API', en: 'JSON as the API' },
          desc: {
            ms: 'movies.json, cinemas.json dan food.json dibaca dengan simulasi latency serta keadaan loading / ralat.',
            en: 'movies.json, cinemas.json and food.json are read with simulated latency plus loading / error states.'
          }
        },
        {
          title: { ms: '9 skrin lengkap', en: 'Nine complete screens' },
          desc: {
            ms: 'Utama → butiran → kerusi → makanan → ringkasan → bayaran → berjaya, semua melalui named routes.',
            en: 'Home → details → seats → food → summary → payment → success, all wired via named routes.'
          }
        },
        {
          title: { ms: 'Responsif penuh', en: 'Fully responsive' },
          desc: {
            ms: 'Satu kod asas untuk telefon, tablet, desktop dan web.',
            en: 'One codebase across phone, tablet, desktop and web.'
          }
        },
      ],

      captions: [
        { ms: 'Senarai Filem', en: 'Movie Listing' },
        { ms: 'Pemilihan Kerusi', en: 'Seat Selection' },
        { ms: 'Tiket Berjaya', en: 'Booking Confirmed' },
      ],
      captionSubs: [
        { ms: 'Data dibaca dari JSON dengan keadaan loading', en: 'Data read from JSON with loading states' },
        { ms: 'Kerusi kuning dikunci pengguna lain secara langsung', en: 'Amber seats are locked live by other users' },
        { ms: 'Pengesahan tempahan disimpan ke Firestore', en: 'Confirmed booking persisted to Firestore' },
      ],
    },

    /* ------------------------------------------------------------------
       SISTEM 05 — PROJEK SYARIKAT
       Sistem ini BERBEZA: ia mengandungi senarai `projects`, dan setiap
       projek mendapat menu sendiri di dalam halaman.
       Nak tambah projek ketiga? Salin satu blok dalam `projects`, tukar
       `id`, kemudian tambah 3 mockup baharu dalam index.html dengan
       id panel `proj-<id baharu>`.
       ------------------------------------------------------------------ */
    {
      id: 'company',
      no: '05',
      emoji: '🏢',
      accent: '#1a539e',
      accentSoft: 'rgba(26,83,158,.13)',

      name: { ms: 'Projek Syarikat', en: 'Company Projects' },
      tagline: {
        ms: 'Produk yang saya kendalikan di tempat kerja',
        en: 'Products I handle at work',
      },
      summary: {
        ms: 'Bahagian ini menghimpunkan projek syarikat yang saya kendalikan secara ' +
          'langsung — bukan projek peribadi. Setiap projek mempunyai menu sendiri di ' +
          'bawah, lengkap dengan antara muka, susunan seni bina dan peranan saya di ' +
          'dalamnya.',
        en: 'This section collects the company projects I handle directly — not personal ' +
          'work. Each project has its own menu below, complete with its interface, ' +
          'architecture notes and the role I play in it.',
      },
      tech: ['Flutter', 'Clean Architecture', 'Provider', 'GetIt', 'Dio', 'SQLite'],

      /* ============ SENARAI PROJEK DALAM MENU SISTEM 05 ============ */
      projects: [

        /* ---------- PROJEK 1 : POS2Go ---------- */
        {
          id: 'pos2go',
          name: 'POS2Go',
          emoji: '🧾',
          accent: '#1a539e',
          accentSoft: 'rgba(26,83,158,.13)',

          apk: 'apk/pos2go.apk',
          apkSize: '122.7 MB',

          /* Panduan interaktif — fail berada dalam folder guides/ */
          link: 'guides/pos2go-guide.html',
          linkLabel: 'F&B Mode · Retail Mode',
          linkText: {
            ms: 'Buka panduan interaktif →',
            en: 'Open the interactive guide →',
          },

          tagline: {
            ms: 'Sistem Point of Sale untuk F&B dan runcit',
            en: 'A point-of-sale system for F&B and retail',
          },
          role: {
            ms: 'Mobile Developer — pembangunan modul feature, integrasi perkakasan dan penyelenggaraan.',
            en: 'Mobile Developer — feature module development, hardware integration and maintenance.',
          },
          summary: {
            ms: 'Aplikasi POS Flutter berskala besar yang menyokong jualan F&B dan runcit, ' +
              'dibina dengan Clean Architecture berasaskan feature — lebih 45 modul, ' +
              'setiap satu dengan lapisan data dan presentation sendiri. Berfungsi ' +
              'offline-first di atas SQLite, menyegerak melalui API Dio, dan disambungkan ' +
              'kepada pelbagai perkakasan kedai.',
            en: 'A large-scale Flutter POS application supporting F&B and retail sales, built ' +
              'on feature-based Clean Architecture — over 45 modules, each with its own data ' +
              'and presentation layers. It runs offline-first on SQLite, syncs through a Dio ' +
              'API layer, and drives a wide range of in-store hardware.',
          },
          tech: ['Flutter', 'Dart 3.7', 'Provider', 'GetIt', 'Dio', 'SQLite (sqflite)', 'Mason CLI', 'shelf + bonsoir'],

          features: [
            {
              title: { ms: 'Clean Architecture berasaskan feature', en: 'Feature-based Clean Architecture' },
              desc: {
                ms: 'Lebih 45 modul dalam lib/features/, setiap satu dengan data/ dan presentation/ sendiri.',
                en: 'Over 45 modules under lib/features/, each with its own data/ and presentation/ layers.'
              }
            },
            {
              title: { ms: 'Penjanaan modul automatik', en: 'Automated module scaffolding' },
              desc: {
                ms: 'Mason brick `generate_feature` menjana model, repository, provider, screen, routes dan pendaftaran DI sekali gus.',
                en: 'A Mason brick, generate_feature, scaffolds the model, repository, provider, screen, routes and DI registration in one step.'
              }
            },
            {
              title: { ms: 'Jualan F&B & runcit', en: 'F&B & retail sales' },
              desc: {
                ms: 'Pengurusan meja, split bill, modifier, diskaun, cukai, void reason dan sejarah transaksi.',
                en: 'Table management, split bills, modifiers, discounts, tax codes, void reasons and transaction history.'
              }
            },
            {
              title: { ms: 'Integrasi perkakasan kedai', en: 'In-store hardware integration' },
              desc: {
                ms: 'Printer Sunmi, thermal Bluetooth dan label Rongta, penimbang Zicox / JSC100, pengimbas barcode dan paparan pelanggan kedua.',
                en: 'Sunmi, Bluetooth thermal and Rongta label printers, Zicox / JSC100 weight scales, barcode scanners and a customer-facing second display.'
              }
            },
            {
              title: { ms: 'Sync waiter–cashier', en: 'Waiter–cashier sync' },
              desc: {
                ms: 'Server HTTP tempatan (shelf + shelf_router) dengan penemuan servis bonsoir untuk penyegerakan berbilang peranti.',
                en: 'A local HTTP server (shelf + shelf_router) with bonsoir service discovery for multi-device syncing.'
              }
            },
            {
              title: { ms: 'Offline-first & multi-environment', en: 'Offline-first & multi-environment' },
              desc: {
                ms: 'SQLite sebagai sumber utama, disegerak melalui Dio; konfigurasi dev / staging / prod melalui app_config.json.',
                en: 'SQLite as the primary store, synced through Dio; dev / staging / prod configuration driven by app_config.json.'
              }
            },
            {
              title: { ms: 'Panduan interaktif', en: 'Interactive guide' },
              desc: {
                ms: 'Walkthrough langkah demi langkah yang saya bina — pilih F&B Mode atau Retail Mode dari skrin login, dan panduan berkenaan dibuka terus dalam aplikasi.',
                en: 'A step-by-step walkthrough I built — pick F&B Mode or Retail Mode from the login screen and the matching guide opens in place.'
              }
            },
          ],

          captions: [
            { ms: 'Papan Pemuka Modul', en: 'Module Dashboard' },
            { ms: 'Jualan F&B', en: 'F&B Sales' },
            { ms: 'Pembayaran', en: 'Payment' },
          ],
          captionSubs: [
            { ms: 'Pintu masuk kepada 45+ modul feature', en: 'Entry point to 45+ feature modules' },
            { ms: 'Menu, meja, modifier dan troli pesanan', en: 'Menu, tables, modifiers and the order cart' },
            { ms: 'Berbilang kaedah bayar, split bill & resit', en: 'Multiple tenders, split bill & receipt' },
          ],
        },

        /* ---------- PROJEK 2 : Smart2U ---------- */
        {
          id: 'smart2u',
          name: 'Smart2U',
          emoji: '🏬',
          accent: '#1F4E9C',
          accentSoft: 'rgba(31,78,156,.13)',

          link: 'https://play.google.com/store/apps/details?id=com.smartnewretail.smart2u',
          linkLabel: 'com.smartnewretail.smart2u',

          tagline: {
            ms: 'Aplikasi pelanggan untuk meneroka produk syarikat',
            en: 'A customer app for exploring the company product range',
          },
          role: {
            ms: 'Mobile Developer — pembangunan ciri, penyelenggaraan dan keluaran ke Google Play.',  // << SEMAK jika peranan berbeza
            en: 'Mobile Developer — feature development, maintenance and Google Play releases.',      // << SEMAK jika peranan berbeza
          },
          summary: {
            ms: 'Aplikasi rasmi Smart New Retail untuk pelanggan meneroka rangkaian produk ' +
              'syarikat — POS2GO, Stock2Go, TouchPOS, TouchFNB, DynaMod dan Shoppe2Go. ' +
              'Pelanggan boleh membaca artikel dan berita terkini, pratonton serta memuat ' +
              'turun brosur PDF, menonton video solusi, dan mendaftar untuk seminar dan ' +
              'webinar yang akan datang — semuanya dalam satu aplikasi. Diterbitkan di ' +
              'Google Play sebagai com.smartnewretail.smart2u.',
            en: 'The official Smart New Retail app that lets customers explore the company ' +
              'product range — POS2GO, Stock2Go, TouchPOS, TouchFNB, DynaMod and Shoppe2Go. ' +
              'Customers read articles and news, preview and download PDF brochures, watch ' +
              'solution videos, and register for upcoming seminars and webinars, all in one ' +
              'app. Published on Google Play as com.smartnewretail.smart2u.',
          },
          tech: ['Flutter', 'Android / iOS', 'REST API', 'PDF Viewer', 'Video Player', 'Google Play'],

          features: [
            {
              title: { ms: 'Suapan artikel & berita', en: 'Article & news feed' },
              desc: {
                ms: 'Karusel banner promosi di halaman utama, diikuti suapan berita terkini bertarikh yang boleh dibuka penuh.',
                en: 'A promotional banner carousel on the home screen, followed by a dated latest-news feed that opens in full.'
              }
            },
            {
              title: { ms: 'Pratonton & muat turun PDF', en: 'PDF preview & download' },
              desc: {
                ms: 'Booklet syarikat dan flyer produk boleh dipratonton terus dalam aplikasi sebelum dimuat turun, dengan carian dalam senarai flyer.',
                en: 'Company booklets and product flyers can be previewed in-app before downloading, with search across the flyer list.'
              }
            },
            {
              title: { ms: 'Tiga kategori muat turun', en: 'Three download categories' },
              desc: {
                ms: 'Tab Brochure, Payment dan Webinar memisahkan bahan mengikut tujuan — booklet syarikat, maklumat bayaran dan rakaman webinar.',
                en: 'Brochure, Payment and Webinar tabs separate material by purpose — company booklets, payment information and webinar recordings.'
              }
            },
            {
              title: { ms: 'Pusat solusi dengan video', en: 'Solutions hub with video' },
              desc: {
                ms: 'Artikel dan video bagi setiap solusi — DynaMod, E-Invoice, TouchPOS, Online Store dan Apps — boleh dilihat dan dimainkan terus.',
                en: 'Articles and videos for each solution — DynaMod, E-Invoice, TouchPOS, Online Store and Apps — viewable and playable in place.'
              }
            },
            {
              title: { ms: 'Acara & pendaftaran', en: 'Events & sign-up' },
              desc: {
                ms: 'Seminar dan webinar akan datang dipaparkan dengan butang pendaftaran, bersama galeri gambar pameran yang lepas.',
                en: 'Upcoming seminars and webinars are listed with a sign-up button, alongside a gallery of past exhibitions.'
              }
            },
            {
              title: { ms: 'Pintasan saluran syarikat', en: 'Company channel shortcuts' },
              desc: {
                ms: 'Akses pantas ke laman web, portal E-Learning, Facebook dan YouTube syarikat dari halaman utama.',
                en: 'Quick access to the company website, E-Learning portal, Facebook and YouTube from the home screen.'
              }
            },
          ],

          captions: [
            { ms: 'Utama & Artikel', en: 'Home & Articles' },
            { ms: 'Muat Turun', en: 'Downloads' },
            { ms: 'Solusi', en: 'Solutions' },
            { ms: 'Acara', en: 'Events' },
          ],
          captionSubs: [
            { ms: 'Karusel banner, pintasan & berita terkini', en: 'Banner carousel, shortcuts & latest news' },
            { ms: 'Pratonton PDF booklet, flyer & webinar', en: 'PDF preview for booklets, flyers & webinars' },
            { ms: 'Artikel produk dan video yang boleh dimainkan', en: 'Product articles and playable videos' },
            { ms: 'Berita acara & pendaftaran acara akan datang', en: 'Event news & upcoming event sign-up' },
          ],
        },

        /* ---------- PROJEK 3 : O2O ---------- */
        {
          id: 'o2o',
          name: 'O2O Project',
          emoji: '🛵',
          accent: '#FF7918',
          accentSoft: 'rgba(255,121,24,.13)',

          link: 'http://o2o-staging.snr2u.com/login/admin',
          linkLabel: 'o2o-staging.snr2u.com',
          linkText: {
            ms: 'Buka portal staging →',
            en: 'Open the staging portal →',
          },

          tagline: {
            ms: 'Platform penghantaran makanan pelbagai restoran — 4 portal',
            en: 'A multi-restaurant food delivery platform — 4 portals',
          },
          role: {
            ms: 'Full Stack — infrastruktur (domain, pangkalan data, penyebaran) dan pembangunan merentas keempat-empat portal.',
            en: 'Full Stack — infrastructure (domain, database, deployment) and development across all four portals.',
          },
          summary: {
            ms: 'Platform O2O (Online-to-Offline) yang menghubungkan pelanggan, restoran dan ' +
                'penghantar dalam satu sistem. Terdiri daripada empat portal berasingan yang ' +
                'berkongsi satu backend Laravel 12: panel admin, panel restoran, aplikasi ' +
                'penghantar dan aplikasi pengguna. Saya kendalikan keseluruhan rantaian ' +
                'penyebaran — domain di Cloudflare, pangkalan data di DigitalOcean, dan ' +
                'penyebaran melalui Laravel Forge.',
            en: 'An O2O (Online-to-Offline) platform connecting customers, restaurants and ' +
                'riders in one system. It comprises four separate portals sharing a single ' +
                'Laravel 12 backend: the admin panel, the restaurant panel, the rider app and ' +
                'the customer app. I handle the whole deployment chain — the domain on ' +
                'Cloudflare, the database on DigitalOcean, and releases through Laravel Forge.',
          },
          tech: ['Laravel 12', 'PHP 8.2+', 'Laravel Passport', 'Flutter', 'MySQL', 'Cloudflare', 'DigitalOcean', 'Laravel Forge', 'nginx'],

          features: [
            { title: { ms: 'Domain & DNS di Cloudflare', en: 'Domain & DNS on Cloudflare' },
              desc:  { ms: 'Pendaftaran dan konfigurasi domain o2o-staging.snr2u.com, termasuk rekod DNS dan proksi.',
                       en: 'Registering and configuring the o2o-staging.snr2u.com domain, including DNS records and proxying.' } },
            { title: { ms: 'Pangkalan data di DigitalOcean', en: 'Database on DigitalOcean' },
              desc:  { ms: 'Kluster pangkalan data terurus disambungkan kepada aplikasi Laravel, lengkap dengan kredensial dan capaian terhad.',
                       en: 'A managed database cluster wired to the Laravel app, with credentials and restricted access.' } },
            { title: { ms: 'Penyebaran melalui Laravel Forge', en: 'Deployment via Laravel Forge' },
              desc:  { ms: 'Forge menguruskan pelayan, nginx, sertifikat SSL dan proses keluaran setiap kali kod dikemas kini.',
                       en: 'Forge manages the server, nginx, SSL certificates and the release process on every code update.' } },
            { title: { ms: 'Empat portal, satu backend', en: 'Four portals, one backend' },
              desc:  { ms: 'Admin (web), restoran (web + app), penghantar (app) dan pengguna (web + app) berkongsi API Laravel yang sama melalui Passport.',
                       en: 'Admin (web), restaurant (web + app), rider (app) and customer (web + app) all share the same Laravel API through Passport.' } },
            { title: { ms: 'Portal web pengguna di sub-laluan', en: 'Customer web portal on a sub-path' },
              desc:  { ms: 'Flutter web dibina dengan --base-href=/user/ dan dihidangkan sebagai fail statik oleh nginx di dalam document root Laravel.',
                       en: 'Flutter web built with --base-href=/user/ and served as static files by nginx inside the Laravel document root.' } },
            { title: { ms: 'Modul & pembayaran boleh pasang', en: 'Pluggable modules & payments' },
              desc:  { ms: 'Seni bina nwidart/laravel-modules dengan modul AI dan Cukai; berbilang get pembayaran termasuk Stripe dan Razorpay.',
                       en: 'An nwidart/laravel-modules architecture with AI and Tax modules; multiple payment gateways including Stripe and Razorpay.' } },
          ],

          captions: [
            { ms: 'Panel Admin (web)',     en: 'Admin Panel (web)' },
            { ms: 'Panel Restoran (web)',  en: 'Restaurant Panel (web)' },
            { ms: 'Aplikasi Penghantar',   en: 'Rider App' },
            { ms: 'Aplikasi Pengguna',     en: 'Customer App' },
          ],
          captionSubs: [
            { ms: '/login/admin — pesanan, restoran, penghantar, hasil', en: '/login/admin — orders, restaurants, riders, revenue' },
            { ms: '/login/restaurant — terima & sediakan pesanan',       en: '/login/restaurant — accept & prepare orders' },
            { ms: 'Terima tugasan, navigasi dan hantar',                 en: 'Accept a job, navigate and deliver' },
            { ms: '/user/ — juga tersedia sebagai portal web',           en: '/user/ — also available as a web portal' },
          ],
        },

        /* ---------- PROJEK 4 : POS AI CAMERA ---------- */
        {
          id: 'aicamera',
          name: 'POS AI Camera',
          emoji: '👁️',
          accent: '#12A150',
          accentSoft: 'rgba(18,161,80,.13)',

          apk: 'apk/aicamera.apk',
          apkSize: '139.9 MB',

          tagline: {
            ms: 'Pengecaman item on-device yang menyuap troli POS2Go',
            en: 'On-device item recognition that feeds the POS2Go cart',
          },
          role: {
            ms: 'Mobile Developer — port saluran visi POS2Go menjadi aplikasi berasingan, overlay Kotlin natif, dan bridge HTTP ke POS2Go.',
            en: 'Mobile Developer — porting the POS2Go vision pipeline into a standalone app, the native Kotlin overlay, and the HTTP bridge into POS2Go.',
          },
          summary: {
            ms: 'Aplikasi Android yang mengapungkan butang imbas di atas POS2Go, mengecam ' +
                'item runcit menggunakan model TFLite sepenuhnya on-device, dan menolak setiap ' +
                'item yang dikenali ke dalam troli POS2Go melalui HTTP. Ia port daripada ciri ' +
                'vision_checkout POS2Go, dikekalkan rapat dengan sumbernya supaya pembetulan ' +
                'boleh bergerak dua hala. Tiada panggilan ke awan — pengecaman berlaku pada ' +
                'peranti itu sendiri.',
            en: 'An Android app that floats a scan button over POS2Go, recognises retail items ' +
                'with fully on-device TFLite models, and pushes every recognised item into the ' +
                'POS2Go cart over HTTP. It is a port of POS2Go’s vision_checkout feature, kept ' +
                'deliberately close to its source so fixes can travel in both directions. ' +
                'Nothing goes to the cloud — recognition happens on the device itself.',
          },
          tech: ['Flutter', 'Kotlin', 'TFLite', 'EfficientDet-Lite0', 'MobileCLIP-S0', 'sqflite', 'Dio', 'libuvc'],

          features: [
            { title: { ms: 'Senario 1 — imbasan berdiri sendiri', en: 'Scenario 1 — standalone scanning' },
              desc:  { ms: 'Aplikasi digunakan dengan sendiri: daftar item rujukan, imbas, dan lihat padanan — tanpa perlu POS2Go berjalan.',
                       en: 'The app used on its own: register reference items, scan, and review matches — with no POS2Go running.' } },
            { title: { ms: 'Senario 2a — butang terapung atas POS2Go', en: 'Scenario 2a — floating button over POS2Go' },
              desc:  { ms: 'FloatingBubbleService natif (WindowManager, foreground service) kekal hidup walaupun aplikasi ini di belakang POS2Go; tekan bubble → deteksi → item masuk troli.',
                       en: 'A native FloatingBubbleService (WindowManager, foreground service) survives this app being backgrounded behind POS2Go; tap the bubble → detect → the item lands in the cart.' } },
            { title: { ms: 'Senario 2b — dua tablet berasingan', en: 'Scenario 2b — two separate tablets' },
              desc:  { ms: 'POS2Go pada tablet A, kamera pada tablet B. Tukar host bridge dari 127.0.0.1 ke IP LAN; BridgeProvider mengesan sendiri sama ada till itu jauh.',
                       en: 'POS2Go on tablet A, the camera on tablet B. Point the bridge host from 127.0.0.1 to a LAN IP; BridgeProvider works out by itself whether the till is remote.' } },
            { title: { ms: 'Saluran visi on-device', en: 'On-device vision pipeline' },
              desc:  { ms: 'EfficientDet-Lite0 (int8) mengesan, MobileCLIP-S0 menghasilkan embedding, dan padanan dibuat terhadap vektor rujukan dalam SQLite.',
                       en: 'EfficientDet-Lite0 (int8) detects, MobileCLIP-S0 produces the embedding, and matching runs against reference vectors held in SQLite.' } },
            { title: { ms: 'Kamera USB luaran', en: 'External USB cameras' },
              desc:  { ms: 'Tiga laluan: lens usbCamera2 melalui HAL platform (pilihan utama, stream YUV mentah), libuvc moden, dan flutter_uvc_camera sebagai sandaran lama.',
                       en: 'Three paths: the usbCamera2 lens through the platform HAL (the preferred one, streaming raw YUV), modern libuvc, and flutter_uvc_camera as the legacy fallback.' } },
            { title: { ms: 'Tolakan yang tidak berulang', en: 'Pushes that never double-send' },
              desc:  { ms: 'Item ditanda dibil sebaik ia DISERAHKAN, bukan selepas POS2Go mengesahkan — pusingan berikutnya hanya ~350 ms kemudian dan akan menghantarnya semula. Tolakan gagal muncul sebagai chip merah, bukan cubaan semula senyap.',
                       en: 'An item is marked billed the moment it is HANDED OVER, not after POS2Go confirms — the next pass is only ~350 ms later and would re-send it. Failed pushes surface as red chips, never a silent retry.' } },
          ],

          captions: [
            { ms: 'Status & Persediaan',        en: 'Status & Setup' },
            { ms: 'Senario 1 — Imbasan',        en: 'Scenario 1 — Scanning' },
            { ms: 'Senario 2a — Butang Terapung', en: 'Scenario 2a — Floating Button' },
            { ms: 'Senario 2b — Dua Tablet',    en: 'Scenario 2b — Two Tablets' },
          ],
          captionSubs: [
            { ms: 'Model, sumber kamera dan sambungan bridge',      en: 'Models, camera source and bridge connection' },
            { ms: 'Kotak deteksi dengan tahap keyakinan',           en: 'Detection boxes with confidence tiers' },
            { ms: 'Bubble natif melayang atas troli POS2Go',        en: 'A native bubble floating over the POS2Go cart' },
            { ms: 'Host bridge ditukar ke IP LAN',                  en: 'The bridge host pointed at a LAN IP' },
          ],
        },

      ],
    },
  ],

  /* ==========================================================================
     3. TEKS ANTARA MUKA PORTFOLIO (label, tajuk seksyen, butang)
     ========================================================================== */
  ui: {
    menu: { ms: 'Menu', en: 'Menu' },
    introNav: { ms: 'Pengenalan', en: 'Introduction' },
    introNavSub: { ms: 'Tentang saya', en: 'About me' },
    systemWord: { ms: 'Sistem', en: 'System' },
    greeting: { ms: 'Hi, saya', en: "Hi, I'm" },

    hContact: { ms: 'Hubungi Saya', en: 'Contact Me' },
    hStrength: { ms: 'Kekuatan Utama', en: 'Core Strengths' },
    hSkills: { ms: 'Kemahiran Teknikal', en: 'Technical Skills' },
    hSystems: { ms: 'Lima Sistem Dalam Portfolio Ini', en: 'The Five Systems In This Portfolio' },

    kLinkedin: { ms: 'LinkedIn', en: 'LinkedIn' },
    kGithub: { ms: 'GitHub', en: 'GitHub' },
    kEmail: { ms: 'E-mel', en: 'Email' },
    kPhone: { ms: 'Telefon', en: 'Phone' },
    kLocation: { ms: 'Lokasi', en: 'Location' },

    viewUi: { ms: 'Lihat antara muka →', en: 'View the interface →' },
    tabUi: { ms: 'Antara Muka', en: 'Interface' },
    tabFeat: { ms: 'Ciri & Teknikal', en: 'Features & Technical' },

    langLabel: { ms: 'Bahasa', en: 'Language' },

    /* Label untuk Sistem 05 — projek syarikat */
    projectsLabel: { ms: 'Pilih projek', en: 'Choose a project' },
    roleWord: { ms: 'Peranan saya', en: 'My role' },
    openStore: { ms: 'Buka di Google Play →', en: 'Open on Google Play →' },
    downloadApk: { ms: '⤓ Muat turun APK', en: '⤓ Download APK' },
  },

  /* Teks footer di bawah menu sisi */
  footer: {
    ms: 'Dibina dengan Flutter · Portfolio ' + new Date().getFullYear(),
    en: 'Built with Flutter · Portfolio ' + new Date().getFullYear(),
  },
};
