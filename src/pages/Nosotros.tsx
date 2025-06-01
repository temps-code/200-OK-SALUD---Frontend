import React from "react";

const procesoConsulta = [
  {
    numero: "1",
    titulo: "Llena el formulario",
    descripcion: "Completa tus datos y selecciona la especialidad, fecha y hora.",
    icono: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    numero: "2",
    titulo: "Confirmación",
    descripcion: "Recibe la confirmación de tu cita por correo electrónico.",
    icono: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    numero: "3",
    titulo: "Asiste a tu cita",
    descripcion: "Acude al hospital el día y hora seleccionados. ¡Te esperamos!",
    icono: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  }
];

const principios = [
  {
    titulo: "Misión",
    texto: "Brindar soluciones tecnológicas accesibles y eficientes para mejorar la calidad de la atención médica en Bolivia y Latinoamérica, priorizando la experiencia del paciente.",
    icono: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    titulo: "Visión",
    texto: "Ser la plataforma de referencia en gestión de turnos médicos con inteligencia de prioridad clínica y experiencia centrada en el paciente a nivel regional.",
    icono: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    titulo: "Valores",
    texto: "Empatía, eficiencia, innovación, responsabilidad social y compromiso con la salud.",
    icono: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

const equipo = ["Abraham", "Damaris", "Diego", "Paola", "Yordy"];

const Nosotros: React.FC = () => (
  <main className="min-h-screen bg-gray-50">
    {/* Header */}
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white py-20 text-center px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6">Sobre 200-OK-SALUD</h1>
      <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
        Somos un sistema diseñado por ingenieros especializados con la misión de modernizar la gestión médica hospitalaria, mejorando la experiencia del paciente mediante tecnología inteligente y atención humana de calidad.
      </p>
    </section>

    {/* Proceso de Consulta */}
    <section className="py-20 bg-white max-w-6xl mx-auto px-6">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">Cómo Funciona Nuestro Sistema</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {procesoConsulta.map(({ numero, titulo, descripcion, icono }) => (
          <div key={numero} className="text-center group">
            <div className="relative mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                {icono}
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {numero}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{titulo}</h3>
            <p className="text-gray-600 leading-relaxed">{descripcion}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Principios Institucionales */}
    <section className="py-20 bg-white max-w-6xl mx-auto px-6">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">Nuestros Principios Institucionales</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {principios.map(({ titulo, texto, icono }) => (
          <div key={titulo} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">{icono}</div>
              <h3 className="text-2xl font-bold text-gray-900">{titulo}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{texto}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Equipo de Desarrollo */}
    <section className="py-20 bg-gray-50 max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Nuestro Equipo de Desarrollo</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center mb-12">
        {equipo.map((nombre) => (
          <div key={nombre} className="text-center group">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg group-hover:scale-105 transition-transform duration-300 mb-3">
              {nombre[0]}
            </div>
            <p className="font-semibold text-gray-800">{nombre}</p>
            <p className="text-sm text-gray-600">Desarrollador</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">
          Somos estudiantes de <strong>Ingeniería de Sistemas</strong> comprometidos con el desarrollo de soluciones tecnológicas innovadoras. Este proyecto representa nuestra visión de cómo la tecnología puede transformar positivamente el sector salud, combinando conocimientos técnicos con un enfoque social y humano.
        </p>
      </div>
    </section>
  </main>
);

export default Nosotros;
