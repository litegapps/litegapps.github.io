# LiteGapps Website

Situs statis Hugo untuk https://litegapps.github.io, di-deploy otomatis lewat GitHub Pages (`.github/workflows/hugoo.yml`) setiap push ke `master`.

## Struktur
- `layouts/index.html` — halaman Home.
- `layouts/_default/single.html` dan `layouts/doc/single.html` — membungkus isi halaman dengan card. Pakai `nocard: true` di front matter kalau isi halaman sudah punya card sendiri (contoh: `content/download.html`, `content/doc/litegapps_variant.html`), supaya tidak ada card bertumpuk / border dobel. Versi tanpa card ada di `layouts/partials/page-plain.html`.
- `content/` — isi halaman (download, doc, changelog).
- `assets/scss/` — style Material 3 di atas Bootstrap 5 (`_tokens.scss` warna/token, `_components.scss` komponen).

## Cara kerja
- Jangan menumpuk card/panel (card di dalam card, atau card di dalam panel berlatar), dan jangan gabungkan border dengan bayangan tajam — pemilik repo menganggapnya "double border".
- Cek perubahan UI dengan build Hugo dan screenshot di lebar desktop dan HP (±390px), termasuk mode gelap bila relevan.

## Git (diizinkan pemilik repo)
- Setelah perbaikan selesai, **langsung commit dan push** ke `master` tanpa bertanya.
- `.claude/`, `CLAUDE.md`, dan `AGENTS.md` **selalu ikut di-commit dan di-push**.
- Detail: lihat `.claude/rules/git.md`.
