# Wedding-Goo: Digital Wedding Invitation

Wedding-Goo adalah platform undangan pernikahan digital yang dibangun dengan React dan TypeScript. Proyek ini menyediakan template undangan pernikahan yang modern, responsif, dan dapat disesuaikan.

## 🚀 Fitur

- **Welcome Screen**
  - Animasi pembuka yang elegan
  - Musik latar yang dapat diputar/dijeda
  - Transisi halus ke halaman utama

- **Informasi Pasangan**
  - Profil pasangan pengantin
  - Foto-foto pasangan
  - Cerita cinta pasangan

- **Detail Acara**
  - Informasi waktu dan tanggal
  - Lokasi acara dengan peta
  - Countdown timer menuju hari H

- **RSVP**
  - Form konfirmasi kehadiran
  - Input jumlah tamu
  - Statistik kehadiran real-time
  - Pesan untuk pengantin

- **Galeri Foto**
  - Galeri foto pasangan
  - Layout responsif
  - Lightbox untuk melihat foto lebih detail

- **Pesan & Ucapan**
  - Form pengiriman pesan
  - Tampilan pesan seperti chat
  - Real-time update pesan baru

- **Gift Registry**
  - Informasi rekening bank
  - Alamat pengiriman kado
  - Fitur copy nomor rekening

## 🛠 Teknologi yang Digunakan

- **Framework & Library Utama**
  - React + TypeScript
  - Next.js
  - Tailwind CSS
  - Framer Motion
  - Supabase (Database)

- **UI Components & Icons**
  - Lucide Icons
  - React Hot Toast
  - React Use Sound

- **Development Tools**
  - ESLint
  - Prettier
  - PostCSS
  - Autoprefixer

## 🎨 Kustomisasi

### 1. Konfigurasi Data Pasangan
Edit file `src/data/couple.ts`:
```typescript
export const coupleData = {
  groomName: "Nama Pengantin Pria",
  brideName: "Nama Pengantin Wanita",
  groomPhoto: "/images/groom.jpg",
  bridePhoto: "/images/bride.jpg",
  // ... data lainnya
};
```

### 2. Pengaturan Acara
Edit file `src/data/event.ts`:
```typescript
export const eventData = {
  date: "2024-02-14",
  time: "09:00",
  venue: "Nama Tempat",
  address: "Alamat Lengkap",
  // ... data lainnya
};
```

### 3. Kustomisasi Tema
Edit file `tailwind.config.js` untuk mengubah warna dan font:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#E11D48',
        // ... warna lainnya
      },
      fontFamily: {
        sans: ['Font Anda', 'sans-serif'],
        // ... font lainnya
      }
    }
  }
};
```

### 4. Pengaturan Database
1. Buat proyek di Supabase
2. Salin credentials ke `.env`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## 📦 Instalasi & Penggunaan

1. Clone repository:
```bash
git clone https://github.com/username/wedding-goo.git
```

2. Install dependencies:
```bash
cd wedding-goo
npm install
```

3. Setup environment variables:
```bash
cp .env.example .env.local
```

4. Jalankan development server:
```bash
npm run dev
```

5. Build untuk production:
```bash
npm run build
npm start
```

## 🔧 Struktur Folder

```
wedding-goo/
├── public/          # Asset statis (gambar, musik)
├── src/
│   ├── components/  # Komponen React
│   ├── styles/      # File CSS dan tema
│   ├── data/        # Data konfigurasi
│   └── lib/         # Utilitas dan helpers
├── pages/           # Route dan halaman
└── types/           # TypeScript type definitions
```

## 📝 Lisensi

MIT License - Lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

## 👥 Kontribusi

Kontribusi selalu diterima! Silakan buat pull request atau laporkan issue jika menemukan bug.

## 📞 Kontak

Untuk pertanyaan dan dukungan, silakan hubungi:
- Email: info@vertical.com
- Website: https://vertical-iota.vercel.app/
- Instagram: [@vertical](https://instagram.com/vertical)

---
Dibuat dengan ❤️ oleh [Vertical Innovation Technology](https://vertical-iota.vercel.app/)
