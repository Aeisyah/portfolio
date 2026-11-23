# Cara Publish Portfolio ke Domain Percuma

Folder `deploy\` sudah siap sedia — **3.55 MB**, muat di mana-mana hosting
statik percuma.

Jalankan `BUILD-DEPLOY.ps1` bila-bila anda nak jana semula folder itu selepas
mengedit portfolio.

---

## Pilihan 1 — Netlify Drop (paling cepat, ~2 minit)

Tiada arahan, tiada Git, tiada pemasangan.

1. Buka **https://app.netlify.com/drop**
2. Seret folder **`deploy`** ke dalam halaman itu
3. Tunggu beberapa saat — URL anda terus muncul

Anda akan dapat alamat rawak seperti:

```
https://gleaming-marigold-a1b2c3.netlify.app
```

4. Daftar masuk (guna akaun GitHub atau e-mel) untuk **menyimpan** tapak itu —
   kalau tidak, ia akan luput
5. Dalam *Site settings* → *Change site name*, tukar kepada nama pilihan anda:

```
https://aeisyah-samsuddin.netlify.app
```

**Awam secara lalai.** Sesiapa dengan pautan boleh buka.

---

## Pilihan 2 — GitHub Pages (nama anda dalam URL)

Lebih kemas untuk resume: `aeisyah.github.io`

1. Di GitHub, cipta repositori baharu bernama **`aeisyah.github.io`**
   (ganti `aeisyah` dengan nama pengguna GitHub anda — namanya mesti tepat
   begitu, termasuk `.github.io`)
2. Muat naik **isi folder `deploy`** (bukan folder itu sendiri) ke repo:
   - `index.html` mesti berada di akar repo
   - `guides/` sebagai subfolder
3. Buka *Settings* → *Pages* → Source: **Deploy from a branch** → `main` / `root`
4. Tunggu 1–2 minit

Tapak anda hidup di:

```
https://aeisyah.github.io
```

---

## Pilihan 3 — Cloudflare Pages

1. Buka **https://pages.cloudflare.com**
2. *Create a project* → *Direct Upload*
3. Naikkan isi folder `deploy`

URL: `https://nama-pilihan.pages.dev`

---

## Tentang fail APK

Folder `deploy` **tidak** mengandungi APK. Sebabnya:

| Hosting | Had satu fail | APK terbesar anda |
|---|---|---|
| Cloudflare Pages | 25 MB | ❌ semua 6 gagal |
| GitHub Pages | 100 MB | ❌ pos2go 122 MB, aicamera 140 MB gagal |
| Netlify | lebih longgar | ⚠️ 470 MB tetap berat untuk pelan percuma |

Jadi `BUILD-DEPLOY.ps1` **menyembunyikan** butang APK secara lalai.

### Nak butang APK berfungsi juga?

Naikkan APK ke **GitHub Releases** — hadnya 2 GB satu fail, dan ia tidak
dikira terhadap saiz repo.

1. Dalam repo GitHub anda: *Releases* → *Create a new release*
2. Beri tag, contohnya `v1`
3. Seret kesemua 6 fail dari folder `apk\` ke bahagian *Attach binaries*
4. Terbitkan release itu
5. Klik kanan satu fail APK → salin alamat pautan. Ia berbentuk:

```
https://github.com/Aeisyah/portfolio/releases/download/v1/pos2go.apk
```

6. Buka `BUILD-DEPLOY.ps1`, cari baris ini dekat bahagian atas, dan isi
   alamat asasnya (tanpa nama fail):

```powershell
$ApkBase = 'https://github.com/Aeisyah/portfolio/releases/download/v1'
```

7. Jalankan semula `BUILD-DEPLOY.ps1`, kemudian naikkan folder `deploy` semula

Butang APK akan muncul semula dan menunjuk terus ke GitHub Releases.

---

## Domain sendiri (pilihan)

Kalau nanti anda beli domain seperti `aeisyah.dev` (~RM50–60 setahun),
kesemua tiga hosting di atas membenarkan anda menyambungkannya secara percuma,
lengkap dengan sijil SSL automatik.

Tiada pembelian diperlukan untuk mula — subdomain `.netlify.app` atau
`.github.io` sudah cukup kemas untuk resume.

---

## Ringkasan fail

| Fail | Guna untuk |
|---|---|
| `BUILD.bat` | Bina `portfolio.html` untuk kegunaan tempatan |
| `BUILD-DEPLOY.ps1` | Sediakan folder `deploy\` untuk dinaikkan ke hosting |
| `deploy\` | Folder yang anda seret ke Netlify / GitHub / Cloudflare |
| `apk\` | 470 MB — naikkan berasingan ke GitHub Releases |
