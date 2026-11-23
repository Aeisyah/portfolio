# Portfolio — 4 Sistem

Portfolio peribadi dwibahasa (BM / ENG) dengan menu 5 halaman: Pengenalan +
4 sistem, setiap satu memaparkan antara muka (UI) aplikasi dalam bingkai telefon.

Tema: putih dengan gelembung ungu lembut bergaya iPhone.

---

## Dua versi yang disimpan

| Versi | Fail | Guna untuk |
|---|---|---|
| **Siap pakai** | `portfolio.html` | Klik dua kali → terus buka dalam browser. CSS + JS sudah digabung dalam satu fail. Sesuai untuk hantar kepada orang, upload ke hosting, atau simpan sebagai PDF. |
| **Boleh edit** | `portfolio-editable/` | Untuk ubah teks, warna dan susunan. Fail berasingan supaya senang dibaca. |

```
portfolio/
├── portfolio.html            ← versi siap pakai (satu fail)
├── BUILD.bat                 ← KLIK DUA KALI untuk bina semula
├── build.ps1                 ← skrip yang dijalankan oleh BUILD.bat
├── README.md
├── apk/                      ← APK setiap sistem (470 MB kesemuanya)
│   ├── ladydriver.apk        49.9 MB
│   ├── rembayung.apk         55.9 MB
│   ├── sedekah.apk           51.5 MB
│   ├── cinema.apk            50.6 MB
│   ├── pos2go.apk           122.7 MB
│   └── aicamera.apk         139.9 MB
├── guides/
│   └── pos2go-guide.html     ← panduan interaktif POS2Go (3.3 MB)
└── portfolio-editable/
    ├── content.js            ← SEMUA TEKS DI SINI (edit fail ini)
    ├── styles.css            ← warna, gelembung, susun atur
    ├── index.html            ← struktur + mockup UI telefon
    └── app.js                ← logik menu & bahasa (tak perlu diubah)
```

---

# ⭐ LANGKAH UNTUK EDIT & SIMPAN SEMULA KE HTML

Ikut 4 langkah ini setiap kali anda nak ubah apa-apa.

### Langkah 1 — Buka fail yang betul

Buka folder `portfolio-editable`, kemudian buka fail mengikut apa yang nak diubah:

| Nak ubah | Buka fail ini |
|---|---|
| Nama, LinkedIn, e-mel, telefon, teks, ciri sistem | `content.js` |
| Warna, gelembung, saiz, susun atur | `styles.css` |
| Kandungan dalam skrin telefon | `index.html` |

Guna **Notepad**, **VS Code**, atau mana-mana editor teks.

### Langkah 2 — Edit dan simpan

Ubah teks yang dikehendaki, kemudian tekan **Ctrl + S**.

> Penting: dalam `content.js`, teks ditulis dalam dua bahasa —
> `{ ms: 'Bahasa Melayu', en: 'English' }`.
> Tukar **kedua-duanya** supaya butang MAL dan ENG sama-sama kemas kini.

### Langkah 3 — Klik dua kali `BUILD.bat`

Kembali ke folder `portfolio` dan **klik dua kali `BUILD.bat`**.

Satu tetingkap hitam akan terbuka dan papar:

```
 ============================================
   MEMBINA PORTFOLIO
 ============================================

  Membina portfolio.html ...
  Siap: portfolio.html (164.7 KB)

 ---------------------------------------------
  SIAP. Buka portfolio.html untuk lihat hasil.
 ---------------------------------------------

 Tekan mana-mana kekunci untuk tutup...
```

Tekan mana-mana kekunci untuk tutup. Itu sahaja — tiada arahan perlu ditaip.

Di sebalik tabir, ia menyalin isi `styles.css`, `content.js` dan `app.js` masuk
ke dalam `index.html`, lalu menulis semula `portfolio.html`.

### Langkah 4 — Semak hasil

Klik dua kali `portfolio.html`. Kalau perubahan belum nampak, tekan
**Ctrl + Shift + R** dalam browser untuk buang cache.

---

### Kalau ada masalah

**Windows papar amaran "Windows protected your PC" bila klik BUILD.bat**
Klik *More info* → *Run anyway*. Ini berlaku kerana fail `.bat` datang dari
luar; ia hanya berlaku sekali.

**Tetingkap hitam terbuka dan tertutup terlalu cepat**
Itu bermakna ia gagal sebelum sempat papar apa-apa. Buka PowerShell dalam
folder `portfolio` dan taip arahan ini untuk lihat ralat penuh:

```bash
powershell -ExecutionPolicy Bypass -File build.ps1
```

**Ralat "running scripts is disabled on this system"**
`BUILD.bat` sepatutnya sudah melepasi masalah ini (ia guna
`-ExecutionPolicy Bypass`). Kalau masih berlaku, buka PowerShell dan taip:

```bash
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

**Tak nak guna build sama sekali**
Buka terus `portfolio-editable/index.html` dalam browser. Ia berfungsi penuh
dan sentiasa ikut fail sumber — tiada build diperlukan. `portfolio.html` cuma
perlu bila anda nak hantar **satu fail** kepada orang.

**Rosakkan `content.js` sampai portfolio jadi kosong?**
Biasanya sebab tanda petik `'` atau koma `,` tertinggal. Buka `portfolio.html`
dalam Chrome, tekan **F12** → tab *Console*. Mesej merah di situ akan
menyebut nombor baris yang bermasalah dalam `content.js`.

---

## Langkah pertama — isi maklumat diri

Buka `portfolio-editable/content.js`, cari bahagian **1. MAKLUMAT DIRI**, dan
tukar baris bertanda `<< TUKAR`:

```js
name:          'Nama zzz',                            // << nama penuh anda
email:         'rndteam2@smart-acc.com',
phone:         '+60 12-345 6789',
linkedin:      'https://www.linkedin.com/in/username', // << link LinkedIn penuh
linkedinLabel: 'linkedin.com/in/username',             // << teks yang dipapar
github:        'https://github.com/username',          // '' jika tiada
```

Kemudian ikut Langkah 3 dan 4 di atas.

---

## Bahasa (MAL / ENG)

- Butang bahasa ada di **dua tempat**: atas halaman utama, dan dalam menu sisi.
- Pilihan pengguna diingat dalam browser (localStorage), jadi bahasa kekal
  walaupun halaman ditutup.
- Nak tukar bahasa lalai? Dalam `content.js`, baris paling atas:

```js
defaultLang: 'ms',   // tukar kepada 'en' untuk English dahulu
```

- Teks di dalam skrin telefon sengaja dikekalkan dalam Bahasa Melayu kerana
  itulah bahasa aplikasi sebenar. Semua teks portfolio (tajuk, penerangan,
  kapsyen, ciri) bertukar mengikut bahasa yang dipilih.

---

## Muat turun APK

Setiap sistem ada butang **"⤓ Muat turun APK"** dalam halamannya, lengkap dengan
saiz fail. Semua APK ialah binaan `flutter build apk --release` (universal —
satu fail untuk semua ABI, jadi ia jalan pada mana-mana peranti Android).

| Sistem | Fail | Saiz | Penandatanganan |
|---|---|---|---|
| LadyDriver | `apk/ladydriver.apk` | 49.9 MB | kunci debug |
| Rembayung Order | `apk/rembayung.apk` | 55.9 MB | kunci debug |
| SedekahApps | `apk/sedekah.apk` | 51.5 MB | kunci debug |
| Cinema Booking | `apk/cinema.apk` | 50.6 MB | kunci debug |
| POS2Go | `apk/pos2go.apk` | 122.7 MB | **keystore release** + minify/proguard |
| POS AI Camera | `apk/aicamera.apk` | 139.9 MB | kunci debug |
| Smart2U | — | — | tiada source di mesin ini; guna link Google Play |
| O2O Project | — | — | platform web + 3 app; guna link portal staging |

Jumlah folder `apk/`: **470 MB**. APK AI Camera paling besar kerana ia membawa
model TFLite (EfficientDet-Lite0 + MobileCLIP-S0) dan pustaka UVC untuk kamera
USB luaran.

> **Kunci debug bermaksud apa?** Empat projek peribadi masih guna tetapan lalai
> Flutter (`signingConfig = signingConfigs.getByName("debug")`). APK-nya boleh
> dipasang dan diuji seperti biasa, tetapi **tidak boleh dihantar ke Google Play**.
> Untuk itu, jana keystore sendiri dan tukar blok `release` dalam
> `android/app/build.gradle.kts` — POS2Go sudah pun disediakan begitu.
>
> Pengguna juga perlu benarkan **"Pasang dari sumber tidak dikenali"** pada
> telefon Android sebelum memasang fail APK.

### Jana semula APK

```bash
flutter build apk --release
```

Jalankan dalam folder projek berkenaan, kemudian salin
`build/app/outputs/flutter-apk/app-release.apk` ke `portfolio/apk/<nama>.apk`.
Kemas kini `apkSize` dalam `content.js` jika saiznya berubah, dan jalankan
`build.ps1`.

Nak buang butang APK bagi mana-mana sistem? Padam dua baris `apk:` dan
`apkSize:` daripada sistem itu dalam `content.js`.

---

## Sistem 05 — Projek Syarikat (menu dalam menu)

Sistem 05 berbeza daripada empat yang lain: ia mengandungi **menu kedua** di dalam
halaman, satu butang untuk setiap projek syarikat.

Projek sedia ada:

| Projek | Sumber rujukan | Skrin | Status |
|---|---|---|---|
| **POS2Go** | `D:\AndroidApps\Pos2gov2\POS2GoApp` | 3 telefon | Lengkap — teks & warna dari kod sebenar (`app_config.json`, `CLAUDE.md`) |
| **Smart2U** | [Google Play](https://play.google.com/store/apps/details?id=com.smartnewretail.smart2u) | 4 telefon | Lengkap — mockup dibina semula dari tangkapan skrin app sebenar |
| **O2O Project** | `D:\Projects\O2O` | 2 browser + 2 telefon | Lengkap — Laravel 12 + 3 app Flutter (StackFood) |
| **POS AI Camera** | `D:\AndroidApps\POS AI CAMERA` | 4 telefon | Lengkap — dua senario penggunaan |

**O2O** ada strip infrastruktur (Cloudflare → DigitalOcean → Laravel Forge → 4 portal)
dan menggunakan **bingkai browser** untuk panel web admin/restoran, dengan bar URL
`o2o-staging.snr2u.com` yang sebenar.

**POS AI Camera** ada strip saluran visi (Kamera → EfficientDet-Lite0 →
MobileCLIP-S0 → troli POS2Go) dan memaparkan dua senario:

| Senario | Apa yang ditunjuk |
|---|---|
| 1 — berdiri sendiri | Imbas & daftar item tanpa POS2Go berjalan |
| 2a — butang terapung | Bubble Kotlin natif melayang atas troli POS2Go, satu peranti (`127.0.0.1:8099`) |
| 2b — dua tablet | Host bridge ditukar ke IP LAN; POS2Go tablet A, kamera tablet B |

### Panduan interaktif POS2Go

Di bawah POS2Go ada butang **"Buka panduan interaktif →"** yang membuka
`guides/pos2go-guide.html` — skrin login POS2Go dengan butang bantuan yang
menawarkan dua walkthrough: **F&B Mode** (meja, modifier, jualan F&B) dan
**Retail Mode** (jual terus dari grid produk).

> ⚠️ **Penting apabila berkongsi.** Panduan dan fail APK berada di luar
> `portfolio.html`. Kalau anda hantar `portfolio.html` seorang diri, butang
> panduan dan butang muat turun APK tidak akan berfungsi. Hantar **folder
> `portfolio` sepenuhnya** (`portfolio.html` + `guides/` + `apk/`, lebih kurang
> 334 MB), atau naikkan kesemuanya ke hosting.

Nak tambah panduan untuk projek lain? Letak fail HTML dalam `guides/`, kemudian
dalam `content.js` tambah pada projek berkenaan:

```js
link: 'guides/nama-fail.html',
linkLabel: 'teks kecil di sebelah',
linkText: { ms: 'Buka panduan →', en: 'Open the guide →' },
```

---

Smart2U ialah aplikasi pelanggan Smart New Retail: karusel banner &amp; berita,
pratonton/muat turun brosur PDF (tab Brochure · Payment · Webinar), pusat solusi
dengan artikel &amp; video, dan pendaftaran acara.

> Satu perkara sahaja yang belum disahkan: baris `role` dalam blok `id: 'smart2u'`
> (`content.js`) ditanda `<< SEMAK`. Tukar jika peranan sebenar anda berbeza.

### Nak tambah projek ketiga?

1. Dalam `content.js`, cari `id: 'company'` → array `projects`.
   Salin satu blok projek sedia ada, tukar `id`, `name`, `emoji`, `accent`,
   `tagline`, `role`, `summary`, `tech`, `features`, `captions`, `captionSubs`.
2. Dalam `index.html`, salin keseluruhan blok `<div class="projpanel" ...>`
   dan tukar semua id supaya padan:
   - `id="proj-<id baharu>"`
   - `data-projhead="<id baharu>"`
   - `data-panel="ui-<id baharu>"` dan `id="ui-<id baharu>"`
   - `data-panel="feat-<id baharu>"` dan `id="feat-<id baharu>"`
   - `data-projfeat="<id baharu>"`
   - Buang `is-active` daripada `class="projpanel"` (hanya projek pertama aktif).
3. Jika projek itu ada palet warnanya sendiri, tambah skin baharu dalam
   `styles.css` Bahagian 7 (contoh: `.ui--xx .phone__screen { … }`) dan guna
   kelas itu pada `<div class="phone ui--xx">`.
4. Jalankan `build.ps1`.

Butang menu projek dijana automatik daripada array `projects` — tak perlu
tambah butang secara manual.

---

## Apa yang boleh diubah di mana

| Nak ubah | Fail | Bahagian |
|---|---|---|
| Nama, LinkedIn, e-mel, telefon | `content.js` | 1. Maklumat Diri |
| Perenggan pengenalan, kekuatan, kemahiran | `content.js` | 1. Maklumat Diri |
| Nama sistem, tagline, penerangan, ciri, kapsyen | `content.js` | 2. Sistem |
| Projek dalam Sistem 05 (POS2Go, Smart2U) | `content.js` | 2. Sistem → `id: 'company'` → `projects` |
| Tajuk seksyen & label butang | `content.js` | 3. Teks Antara Muka |
| Susunan menu | `content.js` | susunan dalam array `systems` |
| Warna aksen setiap sistem | `content.js` | `accent` + `accentSoft` |
| Warna latar & ungu utama | `styles.css` | Bahagian 1 — Token |
| Saiz / kepekatan gelembung | `styles.css` | Bahagian 2 — Gelembung |
| Kandungan dalam skrin telefon | `index.html` | cari komen `SKRIN 1`, `SKRIN 2`… |
| Rupa UI setiap app | `styles.css` | Bahagian 7 — Skin UI |

Nak gelembung lebih perlahan atau lebih pekat? Dalam `styles.css` Bahagian 2:

```css
.bub { filter: blur(76px); opacity: .34; }   /* naikkan opacity = lebih pekat */
```

---

## Simpan sebagai PDF

Buka `portfolio.html` → `Ctrl + P` → **Save as PDF**.
Menu sisi dan gelembung disembunyikan automatik, dan setiap sistem bermula di
halaman baharu.

---

## Letak dalam talian (percuma)

`portfolio.html` tidak memerlukan server. Seret **folder `portfolio`** (bukan
fail `portfolio.html` sahaja — folder `guides/` mesti ikut sekali) ke
[netlify.com/drop](https://app.netlify.com/drop), atau letak dalam repositori
GitHub dan hidupkan GitHub Pages. Namakan semula `portfolio.html` kepada
`index.html` jika platform memerlukannya.

---

## Nota

- Fon diambil dari Google Fonts. Jika tiada internet, fon sistem digunakan
  secara automatik — reka bentuk kekal utuh.
- Tiada gambar luaran digunakan; semua grafik dilukis dengan CSS, jadi fail
  ini berfungsi sepenuhnya secara luar talian.
