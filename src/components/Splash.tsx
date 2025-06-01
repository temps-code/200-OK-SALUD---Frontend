import { useEffect } from "react";

interface SplashProps {
  onComplete: () => void;
}

const Splash = ({ onComplete }: SplashProps) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000); // Extended to 4s for smoother experience
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-600 flex flex-col items-center justify-center overflow-hidden">
      {/* Heartbeat animation container */}
      <div className="relative w-32 h-32 mb-8">
        {/* Pulsing background effect */}
        <div className="absolute inset-0 rounded-full bg-blue-800 opacity-30 animate-pulse"></div>
        {/* Medical cross with heartbeat effect */}
        <div className="relative w-full h-full flex items-center justify-center">
          <svg
            className="w-20 h-20 text-white animate-[heartbeat_1.5s_ease-in-out_infinite]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          {/* Subtle ripple effect */}
          <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-[ripple_2s_ease-out_infinite]"></div>
        </div>
      </div>

      {/* Welcome text with fade-in animation */}
      <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight animate-[fadeIn_1s_ease-in]">
        Bienvenido a 200-OK-SALUD
      </h1>
      <p className="text-white text-lg md:text-xl mt-4 opacity-80 animate-[fadeIn_1.5s_ease-in]">
        Cuidando tu salud, siempre conectados las 24 horas
      </p>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.3; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Splash;