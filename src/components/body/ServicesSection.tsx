import React from "react";
import type { ModalKey, ServicioMedico } from "../../data/services";
import { serviciosMedicos } from "../../data/services";
import IconSVG from "./IconSVG.tsx";

interface ServicesSectionProps {
  openModal: (key: ModalKey) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ openModal }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios Médicos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos atención médica integral con especialistas certificados y tecnología de vanguardia
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviciosMedicos.map((servicio: ServicioMedico) => (
            <div 
              key={servicio.titulo}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 cursor-pointer transform hover:scale-105"
              onClick={() => openModal(servicio.titulo)}
            >
              <div className="flex justify-center mb-6">
                <IconSVG iconType={servicio.icono} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{servicio.titulo}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;