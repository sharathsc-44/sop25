
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

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
    <section className="py-16 text-center bg-gradient-to-b from-blue-600 to-blue-800 text-white rounded-lg my-6 relative overflow-hidden mario-font">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImNsb3VkcyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMCAwIEwxMCAxMCBMMjAgMCBMMzAgMTAgTDQwIDAgTDQwIDIwIEwzMCAzMCBMMjAgMjAgTDEwIDMwIEwwIDIwIEwwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2Nsb3VkcykiIC8+PC9zdmc+')]"></div>
      </div>
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl mb-6 font-bold mario-font tracking-widest">
          <span className="text-yellow-300">Summer of</span> 
          <span className="text-white">Projects</span> 
          <span className="text-green-400">25</span>
        </h1>
        <div className="flex justify-center mb-8">
          <Star className="text-yellow-300 h-6 w-6 mr-1" />
          <Star className="text-yellow-300 h-6 w-6 mr-1" />
          <p className="text-xl mb-2">IT'S-A ME, THE ULTIMATE LEARNING EVENT!</p>
          <Star className="text-yellow-300 h-6 w-6 ml-1" />
          <Star className="text-yellow-300 h-6 w-6 ml-1" />
        </div>
        
        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          <div className="question-block p-2 md:p-4 rounded w-16 md:w-24">
            <div className="text-xl md:text-3xl font-bold">{days}</div>
            <div className="text-xs">DAYS</div>
          </div>
          <div className="question-block p-2 md:p-4 rounded w-16 md:w-24">
            <div className="text-xl md:text-3xl font-bold">{hours}</div>
            <div className="text-xs">HRS</div>
          </div>
          <div className="question-block p-2 md:p-4 rounded w-16 md:w-24">
            <div className="text-xl md:text-3xl font-bold">{minutes}</div>
            <div className="text-xs">MINS</div>
          </div>
          <div className="question-block p-2 md:p-4 rounded w-16 md:w-24">
            <div className="text-xl md:text-3xl font-bold">{seconds}</div>
            <div className="text-xs">SECS</div>
          </div>
        </div>
        
        <button className="mario-button transform transition hover:scale-105">
          START LEARNING
        </button>
      </div>
    </section>
  );
};

export default Hero;
