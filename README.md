# 🚀 Portofolio Modern (Next.js + Tailwind CSS)

Portofolio web modern, cepat, dan responsif yang siap langsung di-deploy ke **Vercel**.

## 🌟 Fitur Unggulan

- ⚡ **Next.js 16 + React 19 (App Router)**: Performa ultra-cepat & SEO optimal.
- 🎨 **Tailwind CSS**: Styling modern dengan glassmorphism, glowing gradients, dan transisi halus.
- 🌓 **Dark / Light Mode Toggle**: Beralih tema secara mulus dengan penyimpanan preferensi otomatis di `localStorage`.
- 📁 **Pusat Data Terpadu (`src/data/portfolio.ts`)**: Cukup edit 1 file untuk mengubah seluruh nama, bio, foto, keahlian, proyek, dan link sosial media Anda.
- 📱 **100% Responsif**: Tampilan sempurna di perangkat Smartphone, Tablet, hingga Layar Desktop Lebar.
- ✉️ **Interactive Contact Form**: Form kontak interaktif dengan efek perayaan animasi (*confetti*) dan tombol salin email instan.
- 🚀 **1-Click Vercel Deploy**: Siap langsung dipublikasikan ke Vercel tanpa konfigurasi rumit.

---

## 🛠️ Cara Mengubah Data Portofolio Anda

Buka file:
```
src/data/portfolio.ts
```

Di dalam file tersebut, Anda bisa dengan mudah mengubah:
- `personal`: Nama, jabatan/role, ringkasan bio, email, nomor kontak, link sosial media (GitHub, LinkedIn, Instagram, dll.).
- `stats`: Angka statistik pencapaian Anda.
- `services`: Bidang layanan atau keahlian utama yang Anda tawarkan.
- `skillCategories`: Daftar teknologi dan tingkat keahlian (*Frontend*, *Backend*, *Tools*).
- `projects`: Daftar proyek portofolio, deskripsi, gambar preview, link live demo, dan link GitHub repository.
- `experiences`: Riwayat karier pekerjaan dan pendidikan/sertifikasi.

---

## 🚀 Cara Menjalankan di Lokal (Development)

1. Buka terminal di folder proyek:
   ```bash
   cd portfolio
   ```
2. Jalankan development server:
   ```bash
   npm run dev
   ```
3. Buka browser di [http://localhost:3000](http://localhost:3000).

---

## 🌐 Cara Deploy ke Vercel (Gratis)

### Metode 1: Hubungkan dengan GitHub (Rekomendasi)
1. Buat repository baru di [GitHub](https://github.com/new).
2. Jalankan perintah berikut di terminal folder proyek:
   ```bash
   git add .
   git commit -m "Portofolio siap rilis"
   git branch -M main
   git remote add origin https://github.com/USERNAME_ANDA/NAMA_REPO.git
   git push -u origin main
   ```
3. Buka [Vercel](https://vercel.com/new), login menggunakan akun GitHub Anda.
4. Pilih repository portofolio yang baru di-push, lalu klik **Deploy**.
5. Selesai! Portofolio Anda akan online dengan domain gratis `https://nama-proyek.vercel.app`.

### Metode 2: Deploy Cepat via Vercel CLI
Jalankan perintah ini di terminal:
```bash
npx vercel
```
Ikuti instruksi login di browser dan tekan **Enter** untuk semua pengaturan default.
