import React from "react";
import type { ResultadoLaboratorio } from "./tipos";

interface PropsSeccionResultadosLaboratorio {
  resultadosLab: ResultadoLaboratorio[];
}

const SeccionResultadosLaboratorio: React.FC<PropsSeccionResultadosLaboratorio> = ({ resultadosLab }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-blue-800 mb-6">Resultados de Laboratorio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resultadosLab.length === 0 ? (
          <p className="text-gray-600 col-span-full text-center">No hay resultados disponibles.</p>
        ) : (
          resultadosLab.map((resultado) => (
            <div
              key={resultado.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{resultado.paciente}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Tipo:</span> {resultado.tipo}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Resultado:</span> {resultado.resultado}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Fecha:</span> {resultado.fecha}
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium">Guardado:</span>{" "}
                {new Date(resultado.guardadoEn).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SeccionResultadosLaboratorio;