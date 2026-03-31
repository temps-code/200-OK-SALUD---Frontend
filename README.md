<div align="center">

<img src="./src/assets/img/logoGrande.png" alt="200-OK-SALUD logo" width="160" />

<h1>200-OK-SALUD</h1>

<p><strong>A digital healthcare platform to modernize hospital management and simplify medical appointments in Tarija, Bolivia.</strong></p>

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
</p>

</div>

---

📄 Read this in: **English** | [Español](README.es.md)

---

**Academic Project**
Universidad Privada Domingo Savio — Ing. de Sistemas
Course: Software Systems Development II — May 2025

---

## Table of Contents

- [What It Does](#what-it-does)
- [Stack](#stack)
- [Team](#team)
- [Architecture](#architecture)
- [Installation](#installation)

---

## What It Does

200-OK-SALUD is a frontend SPA that digitizes healthcare access for patients in Tarija, Bolivia. It connects users with health centers, specialists, and appointment scheduling through a clean, map-centric interface.

Key features:

- Interactive map of health centers ("postas") in Tarija with operating hours, specialties, and services
- Medical appointment request form with specialty selection and date/time picker
- Authentication views (login/logout) ready for backend integration
- About page with institutional mission, vision, and team
- Animated splash screen and mobile-responsive layout

> The backend API integration is planned but not yet implemented in this version. Form submissions currently use placeholder handlers.

---

## Stack

| Category | Technology | Version |
|---|---|---|
| Core | React | 19.1.0 |
| Core | TypeScript | 5.8.3 |
| Build | Vite | 6.3.5 |
| Routing | React Router DOM | 7.6.1 |
| Styling | Tailwind CSS | 4.1.8 |
| Styling | PostCSS + Autoprefixer | 8.5.4 / 10.4.21 |
| Maps | Leaflet + React Leaflet | 1.9.4 / 5.0.0 |
| Icons | React Icons | 5.5.0 |
| Icons | Lucide React | 0.511.0 |
| Linting | ESLint | 9.25.0 |

---

## Team

| Member | GitHub | Role |
|---|---|---|
| Diego Vargas | [@temps-code](https://github.com/temps-code) | Frontend Developer |
| Abraham Flores | [@AFB-9898](https://github.com/AFB-9898) | Frontend Developer |
| Yordy Sanchez | [@yordySc](https://github.com/yordySc) | Frontend Developer |

---

## Architecture

```
src/
├── assets/
│   └── img/                  # Logos and facility images
├── components/
│   ├── body/                 # Home page hero and services section
│   ├── footer/               # Footer with embedded map and contact info
│   ├── header/               # Navigation header
│   ├── hospitales/           # Interactive Leaflet map of health centers
│   ├── login/                # Login and logout views
│   └── modal/                # Terms and conditions modal
├── pages/
│   ├── SolicitarCita.tsx     # Appointment booking form
│   └── Nosotros.tsx          # About us: mission, vision, team
├── types/
│   └── types.ts              # Shared TypeScript interfaces
├── App.tsx                   # Root component with routing config
└── main.tsx                  # React entry point

public/
├── postas.json               # Health facility data (coordinates, hours, specialties)
└── tarija.geojson            # Geographic boundary data for Tarija
```

Routes:

| Path | View |
|---|---|
| `/` | Home |
| `/solicitarcita` | Appointment request |
| `/nosotros` | About |
| `/login` | Login |
| `/logout` | Logout |
| `/ubicacion-postas` | Health center map |

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/temps-code/200-OK-SALUD---Frontend.git
   cd 200-OK-SALUD---Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

---

<div align="center">
<img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License: MIT">
</div>
