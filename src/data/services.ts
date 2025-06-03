export type ModalKey =
  | "Medicina General"
  | "Pediatría"
  | "Especialistas"
  | "Atención Integral"
  | "Tecnología Avanzada"
  | "Cercanía y Confianza";

export interface ServicioMedico {
  titulo: ModalKey;
  icono: string;
  descripcion: string;
  detalle: string;
}

export interface Caracteristica {
  titulo: ModalKey;
  icono: string;
  texto: string;
  detalle: string;
}

export const serviciosMedicos: ServicioMedico[] = [
  {
    titulo: "Medicina General",
    icono: "general-medicine",
    descripcion: "Atención médica integral para toda la familia con profesionales experimentados.",
    detalle: "Consultas médicas generales, chequeos preventivos, diagnóstico y tratamiento de enfermedades comunes, seguimiento de pacientes crónicos y medicina familiar integral."
  },
  {
    titulo: "Pediatría",
    icono: "pediatrics",
    descripcion: "Cuidado especializado para bebés, niños y adolescentes hasta los 18 años.",
    detalle: "Atención pediátrica completa incluyendo controles de crecimiento, vacunación, diagnóstico y tratamiento de enfermedades infantiles, orientación nutricional y desarrollo."
  },
  {
    titulo: "Especialistas",
    icono: "medical-specialist",
    descripcion: "Consulta con especialistas en cardiología, ginecología, dermatología y más.",
    detalle: "Contamos con especialistas altamente calificados y certificados en diversas áreas médicas para brindar atención especializada de nivel terciario según sus necesidades específicas de salud."
  }
];

export const caracteristicas: Caracteristica[] = [
  {
    titulo: "Atención Integral",
    icono: "healthcare-comprehensive",
    texto: "Contamos con especialistas certificados en todas las áreas para ofrecer un cuidado médico completo y personalizado.",
    detalle: "Nuestro equipo multidisciplinario de especialistas trabajan de manera coordinada para garantizar un diagnóstico preciso y tratamiento integral."
  },
  {
    titulo: "Tecnología Avanzada",
    icono: "technology-advanced",
    texto: "Equipos de última generación y sistemas inteligentes para diagnósticos rápidos y precisos.",
    detalle: "Implementamos tecnología médica de vanguardia incluyendo sistemas de historia clínica digital y herramientas de inteligencia artificial."
  },
  {
    titulo: "Cercanía y Confianza",
    icono: "trust-care",
    texto: "Nuestro personal médico está comprometido en ofrecer una atención profesional y humana en cada consulta.",
    detalle: "Relaciones sólidas basadas en confianza, comunicación y empatía garantizan atención de calidad humana excepcional."
  }
];