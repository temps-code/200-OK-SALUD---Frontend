// src/components/pie/pie.tsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

interface GeoJSONFeature {
  type: 'Feature';
  properties: {
    name: string;
    address?: string;
    image?: string;
    backgroundColor?: string;
    textColor?: string;
  };
  geometry: {
    type: string;
    coordinates: any;
  };
}

interface GeoJSONData {
  type: string;
  features: GeoJSONFeature[];
}

// Icono Leaflet
const defaultIcon = L.icon({
  iconUrl: '/leaflet/marker-icon.png',
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  shadowUrl: '/leaflet/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Pie: React.FC = () => {
  const [geoData, setGeoData] = useState<GeoJSONData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/tarija.geojson')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar GeoJSON');
        return res.json();
      })
      .then((data: GeoJSONData) => {
        setGeoData(data);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  // Centro aproximado de Tarija [lat, lng]
  const center: [number, number] = [-21.536, -65.759];

  // Punto de ubicación (nuestra oficina)
  const officeLocation: [number, number] = [-21.5370154518571, -64.74178901349232]; // [lat, lng]

  return (
    <footer className="bg-secondary text-white p-4">
      <div className="container mx-auto">
        {/* Mapa */}
        <div className="mb-6">
          <div className="relative z-10">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-white"></div>
              </div>
            ) : error ? (
              <div className="bg-red-200 border-l-4 border-red-600 text-red-800 p-4" role="alert">
                <p className="font-bold">Error</p>
                <p>{error}</p>
              </div>
            ) : (
              <MapContainer center={center} zoom={10} style={{ height: '300px', width: '100%' }}>
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
            )}
          </div>
        </div>

        {/* Contenido y redes */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">200-OK-SALUD</h2>
            <p className="text-sm">
              200-OK-SALUD es una plataforma web de gestión médica digital que optimiza la
              asignación de turnos médicos con prioridad clínica, centraliza historiales y
              facilita la comunicación entre pacientes, médicos y administradores.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-lg font-semibold mb-2 text-center md:text-left">Redes Sociales:</h3>
            <div className="grid grid-cols-2 gap-4 justify-center md:justify-start">
              {/* Instagram */}
              <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* …path de Instagram… */}
                </svg>
                <span>Instagram</span>
              </a>
              {/* YouTube */}
              <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* …path de YouTube… */}
                </svg>
                <span>YouTube</span>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/qr/JYKUF3IZY66WK1" className="flex items-center space-x-2 hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* …path de WhatsApp… */}
                </svg>
                <span>WhatsApp</span>
              </a>
              {/* Facebook */}
              <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* …path de Facebook… */}
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Créditos */}
        <div className="text-center mt-4 text-sm">
          © 2025 - 200-OK-SALUD. Desarrollado por Abraham Flores Barrionuevo, Damaris Jenifer Ruth Mamani,
          Diego Vargas Urzagaste, Paola Callahuara Mallcu y Yordy Sanchez Castro.
        </div>
      </div>
    </footer>
  );
};

export default Pie;
