import { useState } from "react";
import type { ModalKey, ServicioMedico, Caracteristica } from "../../data/services";
import { serviciosMedicos, caracteristicas } from "../../data/services";
import HeroSection from "./HeroSection.tsx";
import ServicesSection from "./ServicesSection.tsx";
import FeaturesSection from "./FeaturesSection.tsx";
import Modal from "./Modal.tsx";

const Body: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<{ title: string; detail: string } | null>(null);

  const openModal = (key: ModalKey) => {
    try {
      const servicio = serviciosMedicos.find((s: ServicioMedico) => s.titulo === key);
      const caracteristica = caracteristicas.find((c: Caracteristica) => c.titulo === key);
      const item = servicio || caracteristica;
      if (item) {
        setModalContent({ title: item.titulo, detail: item.detalle });
        setModalOpen(true);
      } else {
        console.warn(`No se encontró un servicio o característica con el key: ${key}`);
      }
    } catch (error) {
      console.error("Error en openModal:", error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  try {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <HeroSection />
        <ServicesSection openModal={openModal} />
        <FeaturesSection openModal={openModal} />
        <Modal isOpen={modalOpen} content={modalContent} onClose={closeModal} />
      </main>
    );
  } catch (error) {
    console.error("Error en Body:", error);
    return (
      <div className="container mx-auto px-6 py-8">
        <p className="text-lg text-red-600">Error al cargar el contenido principal.</p>
      </div>
    );
  }
};

export default Body;