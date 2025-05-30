import { useEffect } from "react";

interface SplashProps {

onComplete: () => void;
}

const Splash = ({ onComplete }: SplashProps) => {
useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
}, [onComplete]);

return (
    <div className="w-screen h-screen bg-green-200 flex items-center justify-center">
      {/* Gota de agua con efecto ping */}
    <div className="relative w-24 h-24">
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-green-900 opacity-50 animate-ping" />
        <div className="relative w-full h-full rounded-full bg-green-900" />
    </div>
    </div>
);
};

export default Splash;