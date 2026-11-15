# Aturan Git

- Setelah perbaikan selesai dan sudah dicek (build Hugo sukses, tampilan sudah dicek), langsung `git commit` lalu `git push` ke `origin/master` tanpa perlu bertanya dulu. Izin ini diberikan oleh pemilik repo.
- File konfigurasi agent **selalu ikut di-commit dan di-push**, jangan di-ignore:
  - folder `.claude/` (termasuk `.claude/rules/`)
  - `CLAUDE.md`
  - `AGENTS.md`
- Jangan commit hasil build (`public/`, `resources/`) — sudah ada di `.gitignore`.
- Pesan commit singkat dan jelas dalam bahasa Inggris.
