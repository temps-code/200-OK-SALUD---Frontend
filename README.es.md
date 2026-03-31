<div align="center">

<img src="./src/assets/img/logoGrande.png" alt="logo 200-OK-SALUD" width="160" />

<h1>200-OK-SALUD</h1>

<p><strong>Plataforma digital de salud para modernizar la gestion hospitalaria y simplificar el acceso a turnos medicos en Tarija, Bolivia.</strong></p>

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
</p>

</div>

---

📄 Leé esto en: [English](README.md) | **Español**

---

**Proyecto Academico**
Universidad Privada Domingo Savio — Ing. de Sistemas
Materia: Desarrollo de Sistemas II — Mayo 2025

---

## Tabla de contenidos

- [Descripcion](#descripcion)
- [Stack](#stack)
- [Equipo](#equipo)
- [Arquitectura](#arquitectura)
- [Instalacion](#instalacion)

---

## Descripcion

200-OK-SALUD es una SPA frontend que digitaliza el acceso a la salud para pacientes en Tarija, Bolivia. Conecta a los usuarios con centros de salud, especialistas y reserva de turnos a traves de una interfaz limpia centrada en mapas interactivos.

Funcionalidades principales:

- Mapa interactivo de postas y centros de salud en Tarija con horarios, especialidades y servicios
- Formulario de solicitud de turno medico con seleccion de especialidad, fecha y hora
- Vistas de autenticacion (login/logout) listas para integracion con backend
- Pagina institucional con mision, vision y equipo de desarrollo
- Pantalla de bienvenida animada y diseno responsivo para moviles

> La integracion con el backend esta planificada pero no implementada en esta version. Los formularios utilizan handlers de marcador de posicion.

---

## Stack

| Categoria | Tecnologia | Version |
|---|---|---|
| Core | React | 19.1.0 |
| Core | TypeScript | 5.8.3 |
| Build | Vite | 6.3.5 |
| Enrutamiento | React Router DOM | 7.6.1 |
| Estilos | Tailwind CSS | 4.1.8 |
| Estilos | PostCSS + Autoprefixer | 8.5.4 / 10.4.21 |
| Mapas | Leaflet + React Leaflet | 1.9.4 / 5.0.0 |
| Iconos | React Icons | 5.5.0 |
| Iconos | Lucide React | 0.511.0 |
| Linting | ESLint | 9.25.0 |

---

## Equipo

| Integrante | GitHub | Rol |
|---|---|---|
| Diego Vargas | [@temps-code](https://github.com/temps-code) | Desarrollador Frontend |
| Abraham Flores | [@AFB-9898](https://github.com/AFB-9898) | Desarrollador Frontend |
| Yordy Sanchez | [@yordySc](https://github.com/yordySc) | Desarrollador Frontend |

---

## Arquitectura

```
src/
├── assets/
│   └── img/                  # Logos e imagenes de los centros de salud
├── components/
│   ├── body/                 # Hero y seccion de servicios de la pagina principal
│   ├── footer/               # Footer con mapa embebido e informacion de contacto
│   ├── header/               # Cabecera de navegacion
│   ├── hospitales/           # Mapa Leaflet interactivo de postas
│   ├── login/                # Vistas de login y logout
│   └── modal/                # Modal de terminos y condiciones
├── pages/
│   ├── SolicitarCita.tsx     # Formulario de solicitud de turno
│   └── Nosotros.tsx          # Pagina institucional: mision, vision, equipo
├── types/
│   └── types.ts              # Interfaces TypeScript compartidas
├── App.tsx                   # Componente raiz con configuracion de rutas
└── main.tsx                  # Punto de entrada de React

public/
├── postas.json               # Datos de centros de salud (coordenadas, horarios, especialidades)
└── tarija.geojson            # Limites geograficos de Tarija
```

Rutas:

| Ruta | Vista |
|---|---|
| `/` | Inicio |
| `/solicitarcita` | Solicitud de turno |
| `/nosotros` | Institucional |
| `/login` | Inicio de sesion |
| `/logout` | Cerrar sesion |
| `/ubicacion-postas` | Mapa de centros de salud |

---

## Instalacion

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/temps-code/200-OK-SALUD---Frontend.git
   cd 200-OK-SALUD---Frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
   La app estara disponible en `http://localhost:5173`.

4. Compilar para produccion:
   ```bash
   npm run build
   ```

5. Previsualizar el build de produccion:
   ```bash
   npm run preview
   ```

---

<div align="center">
<img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License: MIT">
</div>
