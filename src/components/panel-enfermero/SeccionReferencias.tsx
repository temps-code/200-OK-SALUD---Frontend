import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { Referencia } from "./tipos";
import { hospitales, iconoMarcador } from "./constantes";

interface PropsSeccionReferencias {
  referencia: Referencia;
  referencias: Referencia[];
  manejarCambioReferencia: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  manejarEnvioReferencia: (e: React.FormEvent) => void;
}

const SeccionReferencias: React.FC<PropsSeccionReferencias> = ({
  referencia,
  referencias,
  manejarCambioReferencia,
  manejarEnvioReferencia,
}) => {
  const hospitalSeleccionado = hospitales.find((h) => h.nombre === referencia.hospital) || hospitales[0];

  return (
    <section>
      <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
        Referir Paciente a Hospital
      </h2>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
        <form onSubmit={manejarEnvioReferencia} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre del Paciente
            </label>
            <input
              type="text"
              name="paciente"
              value={referencia.paciente}
              onChange={manejarCambioReferencia}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-green-400 focus:border-green-400"
              placeholder="Ej. Juan Pérez"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Motivo de la Referencia
            </label>
            <textarea
              name="motivo"
              value={referencia.motivo}
              onChange={manejarCambioReferencia}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-green-400 focus:border-green-400"
              rows={3}
              placeholder="Describa el motivo"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Hospital Destino
            </label>
            <select
              name="hospital"
              value={referencia.hospital}
              onChange={manejarCambioReferencia}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-green-400 focus:border-green-400"
            >
              {hospitales.map((h) => (
                <option key={h.nombre} value={h.nombre}>
                  {h.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prioridad
            </label>
            <select
              name="prioridad"
              value={referencia.prioridad}
              onChange={manejarCambioReferencia}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-green-400 focus:border-green-400"
            >
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Registrar Referencia
            </button>
          </div>
        </form>
        <div className="mt-6 h-64 rounded-lg overflow-hidden">
          <MapContainer
            center={[hospitalSeleccionado.lat, hospitalSeleccionado.lng]}
            zoom={14}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[hospitalSeleccionado.lat, hospitalSeleccionado.lng]} icon={iconoMarcador}>
              <Popup>{hospitalSeleccionado.nombre}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      {referencias.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-green-600 mb-4">Historial de Referencias</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {referencias.map((ref) => (
              <div
                key={ref.id}
                className="bg-white rounded-2xl shadow-lg p-6 border border-green-100"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{ref.paciente}</h3>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Motivo:</span> {ref.motivo}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Hospital:</span> {ref.hospital}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Prioridad:</span>{" "}
                  <span
                    className={`${
                      ref.prioridad === "Alta"
                        ? "text-red-600"
                        : ref.prioridad === "Media"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    {ref.prioridad}
                  </span>
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="font-medium">Guardado:</span>{" "}
                  {new Date(ref.guardadoEn).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SeccionReferencias;