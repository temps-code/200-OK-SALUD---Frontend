import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Si quieres usar tu logo como icono:
import projectLogo from "../../assets/img/posta_prado.jpeg";

// Interfaz para tipar cada posta del JSON
interface Posta {
name: string;
address: string;
coordinates: { lat: string; lng: string };
hours: string[];
specialties: string[];
services: string[];
image?: string;
backgroundColor?: string;
textColor?: string;
}

// Estado para todo el array
interface PostasData {
postas: Posta[];
}

// Icono personalizado (opcional). Si no lo quieres, comenta este bloque y usa el icono por defecto:
const logoIcon = L.icon({
iconUrl: projectLogo,
iconRetinaUrl: projectLogo,
shadowUrl: "",
iconSize: [40, 40],
iconAnchor: [20, 40],
popupAnchor: [0, -35],
shadowSize: [0, 0],
});

const UbicacionPostas: React.FC = () => {
const [postas, setPostas] = useState<Posta[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
    fetch("/postas.json")
    .then((res) => {
        if (!res.ok) throw new Error("No se pudo cargar postas.json");
        return res.json();
    })
    .then((data: PostasData) => {
        setPostas(data.postas);
        setLoading(false);
    })
    .catch((err) => {
        setError(err.message);
        setLoading(false);
    });
}, []);

if (loading) {
    return (
    <div className="flex items-center justify-center h-screen">
        <div className="text-xl text-gray-600">Cargando postas...</div>
    </div>
    );
}

if (error) {
    return (
    <div className="flex items-center justify-center h-screen">
        <div className="text-red-600 font-semibold">{error}</div>
    </div>
    );
}

// **Aquí fijamos el centro estático en la coordenada solicitada**
const center: [number, number] = [
    -21.531650994036994,
    -64.73325950368535,
];

return (
    <div className="h-screen w-full">
    <MapContainer center={center} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {postas.map((posta, idx) => {
        const lat = parseFloat(posta.coordinates.lat);
        const lng = parseFloat(posta.coordinates.lng);

        return (
            <Marker
            key={`posta-${idx}`}
            position={[lat, lng]}
              icon={logoIcon} // Puedes reemplazar por el icono por defecto si prefieres
            >
            <Popup>
                <div className="space-y-2 max-w-xs">
                <h3 className="text-lg font-bold">{posta.name}</h3>
                <p className="text-sm">{posta.address}</p>
                <div>
                    <strong className="underline">Horarios:</strong>
                    <ul className="list-disc list-inside text-sm">
                    {posta.hours.map((h, i) => (
                        <li key={`hora-${i}`}>{h}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <strong className="underline">Especialidades:</strong>
                    <ul className="list-disc list-inside text-sm">
                    {posta.specialties.map((s, i) => (
                        <li key={`esp-${i}`}>{s}</li>
                    ))}
                    </ul>
                </div>
                <div>
                    <strong className="underline">Servicios:</strong>
                    <ul className="list-disc list-inside text-sm">
                    {posta.services.map((srv, i) => (
                        <li key={`srv-${i}`}>{srv}</li>
                    ))}
                    </ul>
                </div>
                {posta.image && (
                    <div>
                    <img
                        src={posta.image}
                        alt={`Foto de ${posta.name}`}
                        className="mt-2 w-full h-24 object-cover rounded"
                    />
                    </div>
                )}
                </div>
            </Popup>
            </Marker>
        );
        })}
    </MapContainer>
    </div>
);
};

export default UbicacionPostas;