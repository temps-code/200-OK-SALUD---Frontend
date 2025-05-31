import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import TermsModal from "../modal/TermsModal";

const defaultIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Footer: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const center: [number, number] = [-21.536, -65.759];
  const officeLocation: [number, number] = [-21.537015, -64.741789];

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
        </div>
          <button
            onClick={() => setShowModal(true)}
            className="mt-2 text-xs underline text-teal-200 hover:text-teal-100"
          >
            📄 Términos y Condiciones
          </button>
        {/* Sección: Mapa */}
        <div className="h-56 rounded shadow-lg overflow-hidden">
          <MapContainer center={center} zoom={10} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={officeLocation} icon={defaultIcon}>
              <Popup>
                <div className="p-2 text-black">
                  <h3 className="font-semibold">Nuestra Oficina</h3>
                  <p>Calle Falsa 123, Tarija</p>
                  <p>Ven a visitarnos aquí</p>
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

      {/* Modal */}
      {showModal && (
        <TermsModal isOpen={true} onClose={() => setShowModal(false)} />
      )}
    </footer>
  );
};

export default Footer;
