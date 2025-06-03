import React from "react";
import type { ModalKey, Caracteristica } from "../../data/services";
import { caracteristicas } from "../../data/services";
import IconSVG from "./IconSVG.tsx";

interface FeaturesSectionProps {
  openModal: (key: ModalKey) => void;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ openModal }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">¿Por Qué Elegirnos?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos experiencia médica, tecnología avanzada y atención personalizada
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caracteristicas.map((caracteristica: Caracteristica) => (
            <div 
              key={caracteristica.titulo}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center cursor-pointer transform hover:scale-105"
              onClick={() => openModal(caracteristica.titulo)}
            >
              <div className="flex justify-center mb-6">
                <IconSVG iconType={caracteristica.icono} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{caracteristica.titulo}</h3>
              <p className="text-gray-600 leading-relaxed">{caracteristica.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;