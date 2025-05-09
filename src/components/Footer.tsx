
import { useState } from "react";
import { Star, Gamepad, Coins } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail("");
    }
  };
  
  return (
    <footer className="bg-blue-900 text-white py-10 mario-font text-xs">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-700 pb-2">SUMMER OF PROJECTS 25</h3>
            <p>The ultimate LEARNING experience for players of all levels. Join us for competitions, power-ups, and some CARZWYYY celebration!</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-700 pb-2">WARP PIPES</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-300 flex items-center"><Gamepad className="h-4 w-4 mr-2 text-red-400" /> Home</a></li>
              <li><a href="#mission" className="hover:text-yellow-300 flex items-center"><Star className="h-4 w-4 mr-2 text-yellow-400" /> World 1-1</a></li>
              <li><a href="#powerups" className="hover:text-yellow-300 flex items-center"><Gamepad className="h-4 w-4 mr-2 text-red-400" /> Power-Ups</a></li>
              <li><a href="#schedule" className="hover:text-yellow-300 flex items-center"><Star className="h-4 w-4 mr-2 text-yellow-400" /> Warp Zones</a></li>
              <li><a href="#join" className="hover:text-yellow-300 flex items-center"><Coins className="h-4 w-4 mr-2 text-yellow-400 coin-animate" /> Join Quest</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-700 pb-2">POWER-UP MAIL</h3>
            <p className="mb-4">Subscribe for power-ups and event updates!</p>
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="p-2 w-full rounded-l bg-blue-800 border border-blue-700 focus:outline-none focus:border-yellow-400 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="mario-button py-2 px-2 rounded-r">
                  GO!
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-4 text-center text-xs text-blue-300">
          <p>&copy; {new Date().getFullYear()} RAS-BMSIT. MADE WITH LOVE BY RAS TEAM </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
