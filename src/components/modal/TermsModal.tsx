import React from "react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Términos y Condiciones</h2>
        <p className="text-gray-700 text-sm">
          Al usar esta plataforma, aceptas nuestras políticas de privacidad y condiciones
          de uso. Los turnos médicos están sujetos a disponibilidad y prioridad clínica.
        </p>
        <div className="text-right">
          <button
            className="px-4 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 text-sm"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
