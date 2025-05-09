
import { useState, useEffect } from "react";

const Hero = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set the event date to 30 days from now
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 30);
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();
      
      if (difference < 0) {
        // Event has passed
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      
      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    };
    
    // Update countdown immediately, then every second
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 text-center bg-blue-900 text-white rounded-lg my-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>
      </div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl mb-4 font-bold">
          <span className="text-yellow-300">SUPER</span> 
          <span className="text-red-500">GAME</span> 
          <span className="text-green-400">FEST</span>
        </h1>
        <p className="text-xl mb-8">Get ready for the ultimate gaming experience!</p>
        
        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          <div className="bg-blue-800 p-2 md:p-4 rounded w-16 md:w-24">
            <div className="text-2xl md:text-4xl font-bold">{days}</div>
            <div className="text-xs md:text-sm">Days</div>
          </div>
          <div className="bg-blue-800 p-2 md:p-4 rounded w-16 md:w-24">
            <div className="text-2xl md:text-4xl font-bold">{hours}</div>
            <div className="text-xs md:text-sm">Hours</div>
          </div>
          <div className="bg-blue-800 p-2 md:p-4 rounded w-16 md:w-24">
            <div className="text-2xl md:text-4xl font-bold">{minutes}</div>
            <div className="text-xs md:text-sm">Minutes</div>
          </div>
          <div className="bg-blue-800 p-2 md:p-4 rounded w-16 md:w-24">
            <div className="text-2xl md:text-4xl font-bold">{seconds}</div>
            <div className="text-xs md:text-sm">Seconds</div>
          </div>
        </div>
        
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition hover:scale-105">
          REGISTER NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;
