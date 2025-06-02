import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import TermsModal from "../modal/TermsModal";
import projectLogo from "../../assets/img/logoGrande.png";

const logoIcon = L.icon({
  iconUrl: projectLogo,
  iconRetinaUrl: projectLogo,
  shadowUrl: "",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  shadowSize: [0, 0],
});

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Coordenadas exactas para centrar y marcar
  const center: [number, number] = [-21.536995492345827, -64.74175682698466];
  const officeLocation: [number, number] = [-21.536995492345827, -64.74175682698466];

  return (
    <footer className="bg-teal-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sección: Información */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-teal-100">200-OK-SALUD</h2>
          <p className="text-sm text-teal-200">
            Plataforma digital que gestiona turnos médicos con inteligencia de prioridad.
            Conecta pacientes, médicos y administradores de forma eficiente.
          </p>
          <div className="text-xs text-teal-400">
            Desarrollado por Abraham, Damaris, Diego, Paola y Yordy.
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="mt-2 text-xs underline text-teal-200 hover:text-teal-100"
          >
            📄 Términos y Condiciones
          </button>
        </div>

        {/* Sección: Mapa centrado en la ubicación exacta */}
        <div className="h-56 rounded shadow-lg overflow-hidden">
          <MapContainer center={center} zoom={15} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={officeLocation} icon={logoIcon}>
              <Popup>
                <div className="p-2 text-black">
                  <h3 className="font-semibold">Nuestra Oficina</h3>
                  <p>Ubicación exacta encontrada en Tarija</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Sección: Redes sociales y enlaces */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-teal-100">Síguenos</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <a href="#" className="hover:text-teal-300">📸 Instagram</a>
            <a href="#" className="hover:text-teal-300">📺 YouTube</a>
            <a href="https://wa.me/qr/JYKUF3IZY66WK1" className="hover:text-teal-300">💬 WhatsApp</a>
            <a href="#" className="hover:text-teal-300">📘 Facebook</a>
          </div>
        </div>
      </div>

      {/* Modal de Términos */}
      {showModal && (
        <TermsModal isOpen={true} onClose={() => setShowModal(false)} />
      )}
    </footer>
  );
};

export default Footer;