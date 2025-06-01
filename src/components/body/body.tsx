import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Tipos para modales
type ModalKey =
  | "Medicina General"
  | "Pediatría"
  | "Especialistas"
  | "Atención Integral"
  | "Tecnología Avanzada"
  | "Cercanía y Confianza";

const serviciosMedicos = [
  {
    titulo: "Especialistas",
    icono: "medical-specialist",
    descripcion: "Consulta con especialistas en cardiología, ginecología, dermatología y más.",
    detalle:
      "Contamos con especialistas altamente calificados y certificados en diversas áreas médicas para brindar atención especializada de nivel terciario según sus necesidades específicas de salud.",
  },
];

const caracteristicas = [
  {
    titulo: "Atención Integral",
    icono: "healthcare-comprehensive",
    texto: "Contamos con especialistas certificados en todas las áreas para ofrecer un cuidado médico completo y personalizado.",
    detalle:
      "Nuestro equipo multidisciplinario de especialistas trabajan de manera coordinada para garantizar un diagnóstico preciso y tratamiento integral, asegurando la continuidad y calidad en la atención médica.",
  },
  {
    titulo: "Tecnología Avanzada",
    icono: "technology-advanced",
    texto: "Equipos de última generación y sistemas inteligentes para diagnósticos rápidos y precisos.",
    detalle:
      "Implementamos tecnología médica de vanguardia incluyendo equipos de imagenología de alta resolución, sistemas de historia clínica digital integrada y herramientas de inteligencia artificial para optimizar la precisión diagnóstica.",
  },
  {
    titulo: "Cercanía y Confianza",
    icono: "trust-care",
    texto: "Nuestro personal médico está comprometido en ofrecer una atención profesional y humana en cada consulta.",
    detalle:
      "Construimos relaciones sólidas basadas en la confianza profesional, la comunicación efectiva y la empatía, garantizando que cada paciente reciba atención personalizada y de calidad humana excepcional.",
  },
];

const Body: React.FC = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; detail: string } | null>(null);

  const openModal = (key: ModalKey) => {
    const servicio = serviciosMedicos.find((s) => s.titulo === key);
    const caracteristica = caracteristicas.find((c) => c.titulo === key);

    const item = servicio || caracteristica;
    if (item) {
      setModalContent({ title: item.titulo, detail: item.detalle });
      setModalOpen(true);
    }
  };

  const closeModal = () => setModalOpen(false);

  const getIconSVG = (iconType: string) => {
    const iconClasses = "w-12 h-12 text-blue-600";

    switch (iconType) {
      case "medical-specialist":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case "healthcare-comprehensive":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        );
      case "technology-advanced":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case "trust-care":
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                    Atención Médica
                    <span className="block text-emerald-400">Profesional y Confiable</span>
                  </h1>
                  <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                    Agenda tu consulta médica con especialistas certificados. Tecnología avanzada, atención personalizada y resultados excepcionales.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate("/SolicitarCita")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Solicitar Consulta
                  </button>
                  <button
                    onClick={() => navigate("/nosotros")}
                    className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-white/10"
                  >
                    Conocer Más
                  </button>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-emerald-400/30 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
                    <svg
                      className="w-64 h-64 text-white/80"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Médicos */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Servicios Médicos Especializados</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ofrecemos atención médica integral con los más altos estándares de calidad y profesionalismo en cada una de nuestras especialidades.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {serviciosMedicos.map((servicio) => (
                <div
                  key={servicio.titulo}
                  className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer group border border-gray-100"
                  onClick={() => openModal(servicio.titulo as ModalKey)}
                >
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {getIconSVG(servicio.icono)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{servicio.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed text-center">{servicio.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Características Institucionales */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Excelencia en Atención Médica</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprometidos con la innovación, la calidad y el cuidado humano para brindar la mejor experiencia en salud.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caracteristicas.map((caracteristica) => (
                <div
                  key={caracteristica.titulo}
                  className="group cursor-pointer"
                  onClick={() => openModal(caracteristica.titulo as ModalKey)}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 h-full hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-100">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                      {getIconSVG(caracteristica.icono)}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{caracteristica.titulo}</h3>
                    <p className="text-gray-700 leading-relaxed">{caracteristica.texto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Inicie su Atención Médica Profesional</h3>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Solicite su consulta con nuestros especialistas certificados y experimente la diferencia de una atención médica de excelencia.
            </p>
            <button
              type="button"
              className="bg-white text-blue-700 hover:bg-gray-50 font-bold px-12 py-4 text-lg rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate("/SolicitarCita")}
            >
              Programar Consulta Ahora
            </button>
          </div>
        </section>
      </main>

      {/* Modal Profesional */}
      {modalOpen && modalContent && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-10 relative shadow-2xl transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 text-2xl font-light transition-colors duration-200"
              aria-label="Cerrar modal"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 pr-12">{modalContent.title}</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{modalContent.detail}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
