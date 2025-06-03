import React from "react";
import type { SignosVitales } from "./tipos";

interface PropsSeccionSignosVitales {
  signosVitales: SignosVitales;
  historialSignos: SignosVitales[];
  manejarCambioSignos: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  manejarEnvioSignos: (e: React.FormEvent) => void;
}

const SeccionSignosVitales: React.FC<PropsSeccionSignosVitales> = ({
  signosVitales,
  historialSignos,
  manejarCambioSignos,
  manejarEnvioSignos,
}) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-green-600 mb-6 text-center">
        Registrar Signos Vitales
      </h2>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
        <form onSubmit={manejarEnvioSignos} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Presión Arterial (mmHg)
            </label>
            <input
              type="text"
              name="presionArterial"
              value={signosVitales.presionArterial}
              onChange={manejarCambioSignos}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-green-400 focus:border-green-400"
              placeholder="120/80"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Temperatura (°C)
            </label>
            <input
              type="text"
              name="temperatura"
              value={signosVitales.temperatura}
              onChange={manejarCambioSignos}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-green-400 focus:border-green-400"
              placeholder="36.5"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pulso (lpm)
            </label>
            <input
              type="text"
              name="pulso"
              value={signosVitales.pulso}
              onChange={manejarCambioSignos}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-green-400 focus:border-green-400"
              placeholder="80"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Descripción
            </label>
            <textarea
              name="descripcion"
              value={signosVitales.descripcion}
              onChange={manejarCambioSignos}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-green-400 focus:border-green-400"
              rows={4}
              placeholder="Observaciones adicionales"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Registrar Signos Vitales
            </button>
          </div>
        </form>
      </div>
      {historialSignos.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-green-600 mb-4">Historial de Signos Vitales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {historialSignos.map((signos, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-green-100"
              >
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Presión:</span> {signos.presionArterial}
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Temperatura:</span> {signos.temperatura} °C
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Pulso:</span> {signos.pulso} lpm
                </p>
                <p className="text-gray-600 mb-1">
                  <span className="font-medium">Descripción:</span> {signos.descripcion || "N/A"}
                </p>
                <p className="text-gray-500 text-sm">
                  <span className="font-medium">Guardado:</span>{" "}
                  {new Date(signos.guardadoEn).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SeccionSignosVitales;