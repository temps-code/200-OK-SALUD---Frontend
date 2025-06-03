import React from "react";
import type { Insumo } from "./tipos";

interface PropsSeccionInventario {
  insumos: Insumo[];
}

const SeccionInventario: React.FC<PropsSeccionInventario> = ({ insumos }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-green-600 mb-6">Inventario de Insumos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {insumos.length === 0 ? (
          <p className="text-gray-600 col-span-full text-center">No hay insumos registrados.</p>
        ) : (
          insumos.map((insumo, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{insumo.nombre}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Cantidad:</span> {insumo.cantidad}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Estado:</span>{" "}
                <span
                  className={`${
                    insumo.cantidad <= insumo.nivelMinimo ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {insumo.cantidad <= insumo.nivelMinimo ? "Bajo" : "Normal"}
                </span>
              </p>
              <p className="text-gray-500 text-sm">
                <span className="font-medium">Guardado:</span>{" "}
                {new Date(insumo.guardadoEn).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default SeccionInventario;