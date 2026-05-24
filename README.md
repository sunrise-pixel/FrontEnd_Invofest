
# 🎨 INVOFEST Frontend

Event Management System - UTS Pemrograman Web 2

![React](https://img.shields.io/badge/React-19.2.4-61DAFB.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6.svg)
![Vite](https://img.shields.io/badge/Vite-8.0.4-646CFF.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC.svg)
![Zustand](https://img.shields.io/badge/Zustand-5.0.13-F7DF1E.svg)
![React Router](https://img.shields.io/badge/React_Router-7.15.1-CA4245.svg)

## 📋 Deskripsi

Frontend React untuk Sistem Manajemen Event INVOFEST yang dikembangkan sebagai tugas UTS Pemrograman Web 2. Aplikasi ini menyediakan antarmuka admin untuk mengelola kategori, narasumber, dan event dengan desain dark theme yang modern dan responsif.

## ✨ Fitur

- **Admin Dashboard** - Overview statistik dan menu navigasi
- **Category Management** - CRUD untuk kategori event
- **Speaker Management** - CRUD untuk narasumber dengan foto
- **Event Management** - CRUD untuk event dengan gambar
- **Biodata Page** - Informasi mahasiswa
- **Dark Theme** - Desain modern dengan tema gelap
- **Responsive Design** - Mendukung mobile, tablet, laptop, dan desktop

## 🛠️ Tech Stack

- **UI Library**: React 19.2.4
- **Build Tool**: Vite 8.0.4
- **Language**: TypeScript 6.0
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand 5.0.13
- **Routing**: React Router DOM 7.15.1
- **Icons**: Lucide React 1.7.0

## 🚀 Cara Menjalankan

### Prasyarat

- Node.js 18+
- npm atau yarn

### Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
```

### Build untuk Production

```bash
# Build production bundle
npm run build

# Preview production build
npm run preview
```

## 📁 Struktur Proyek

```
frontend/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # UI primitives
│   │   └── AdminLayout.tsx # Admin layout wrapper
│   ├── pages/              # Page components
│   │   ├── LoginPage.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── CategoryManagement.tsx
│   │   ├── PembicaraManagement.tsx
│   │   ├── EventManagement.tsx
│   │   └── BiodataPage.tsx
│   ├── store/              # Zustand stores
│   │   └── authStore.ts
│   ├── App.tsx             # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## 🔐 Login Admin

```
NIM: 24090052
Password: admin1234
```

## 📱 Responsive Breakpoints

| Breakpoint | Ukuran | Penggunaan |
|------------|--------|------------|
| xs | < 400px | Smartphone kecil |
| sm | 640px+ | Smartphone |
| md | 768px+ | Tablet |
| lg | 1024px+ | Laptop |
| xl | 1280px+ | Desktop |

## 🎨 Desain

- **Tema**: Dark Theme dengan warna silver/gray/black
- **Warna Utama**: Gray-900 (background), Gray-800 (cards), Gray-700 (borders)
- **Font**: System font stack
- **Icons**: Lucide React icons

## 👨‍💻 Author

**Maula adiba mufadol**
- **NIM**: 24090052
- **Prodi**: D4 Teknik Informatika
- **Kelas**: 4B
- **Mata Kuliah**: Pemrograman Web 2
- **Dosen Pengampu**: Jamal Apridi, S.Kom.

## 📄 Lisensi

ISC
- **Icons**: Lucide React

## 📦 Instalasi

```bash
# Clone repository
git clone https://github.com/sunrise-pixel/FrontEnd_Invofest.git
cd uts-web-frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

## 🚀 Cara Menjalankan

### Development
```bash
npm run dev
```
Aplikasi akan berjalan di `http://localhost:5173`

### Production Build
```bash
npm run build
```
Output akan ada di folder `dist/`

### Preview Production Build
```bash
npm run preview
```

## 🔗 Koneksi API

Secara default, frontend menghubungkan ke backend di `http://localhost:3001`.

Untuk production, ubah API URL di `src/store/eventStore.ts`:

```typescript
// Development
const API = 'http://localhost:3001/api';

// Production (VPS)
const API = 'https://api.yourdomain.com/api';
```

## 📁 Struktur Project

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # UI atoms (Button, Card, etc.)
│   │   ├── Header.tsx
│   │   ├── AdminLayout.tsx
│   │   └── ProtectedRoute.tsx
│   ├── pages/          # Page components
│   │   ├── LoginPage.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── CategoryManagement.tsx
│   │   ├── PembicaraManagement.tsx
│   │   ├── EventManagement.tsx
│   │   └── BiodataPage.tsx
│   ├── store/          # Zustand stores
│   │   ├── authStore.ts
│   │   └── eventStore.ts
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── dist/               # Production build output
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🔐 Login Admin

Untuk mengakses panel admin:

```
NIM: 24090052
Password: admin1234
```

## 📱 Fitur

### Halaman Publik
- 🏠 Beranda INVOFEST
- 👥 Narasumber
- 📋 Info Event
- ❓ FAQ

### Panel Admin
- 📊 Dashboard dengan statistik
- 📂 CRUD Kategori
- 🎤 CRUD Narasumber
- 📅 CRUD Event
- 👤 Biodata Mahasiswa

### Keamanan
- 🔑 Login dengan verifikasi captcha
- 🛡️ Protected routes untuk admin

## 🌐 Deploy ke cPanel/Netlify

### Opsi 1: cPanel File Upload
```bash
# Build production
npm run build

# Upload folder 'dist' ke public_html
```

### Opsi 2: Netlify
```bash
# Setup di netlify.com
# Build command: npm run build
# Publish directory: dist
```

## 📝 Lisensi

Hak Cipta © 2026 - Giska Aura Muhamad Prasetyo

### Production Build

```bash
npm run build
npm run preview
```

---

## 🔐 Login Credentials

| Field | Value |
|-------|-------|
| **NIM** | `24090052` |
| **Password** | `admin1234` |

---

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Collapse.tsx
│   │   │   ├── NavLink.tsx
│   │   │   └── SpeakerCard.tsx
│   │   ├── AdminLayout.tsx
│   │   ├── Header.tsx
│   │   └── ProtectedRoute.tsx
│   ├── pages/
│   │   ├── LoginPage.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── BiodataPage.tsx
│   │   ├── CategoryManagement.tsx
│   │   ├── PembicaraManagement.tsx
│   │   └── EventManagement.tsx
│   ├── store/
│   │   ├── authStore.ts      # Authentication state
│   │   └── eventStore.ts     # API data state
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎯 Features

### Admin Dashboard
- Statistik total Events, Narasumber, Kategori
- Detail events INVOFEST 2024
- Info mahasiswa (NIM, Nama, Kelas)

### CRUD Management
| Menu | Fitur |
|------|-------|
| **Kategori** | List, Tambah, Edit, Hapus kategori event |
| **Narasumber** | List dengan foto, bio, Edit, Hapus |
| **Event** | Full CRUD dengan dropdown relasi |

### Biodata Page
- NIM: 24090055
- Nama: Giska Aura Muhamad Prasetyo
- Prodi: D4 Teknik Informatika
- Semester: 4 / Kelas: 4B

### Keamanan Login
- **Captcha Karakter:** 6 karakter acak (huruf besar/kecil)
- **Captcha Matematika:** Operasi +, -, ×
- Toggle show/hide password
- Session persistence dengan localStorage

---

## 🌐 API Integration

Frontend connects to backend API at:

```
http://localhost:3001/api
```

**Endpoints used:**
- `GET /api/categories` - Fetch categories
- `GET /api/pembicara` - Fetch speakers
- `GET /api/events` - Fetch events with relations

---

## 🎨 Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#991b1b` | Red-900, buttons, headers |
| Secondary | `#dc2626` | Red-600, accents |
| Background | `#f9fafb` | Gray-50, main bg |
| Text | `#111827` | Gray-800, headings |
| Muted | `#6b7280` | Gray-500, descriptions |

### Typography
- **Headings:** font-bold text-gray-800
- **Body:** text-gray-600
- **Captions:** text-sm text-gray-500

---

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 👨‍💻 Author

**Maula adiba mufadol**
- NIM: 24090052
- Prodi: D4 Teknik Informatika
- Semester: 4 / Kelas: 4B
- Mata Kuliah: Pemrograman Web 2

---

## 📄 License

Copyright © 2025 INVOFEST. All Rights Reserved.