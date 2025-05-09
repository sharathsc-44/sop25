
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl flex items-center">
          <span className="text-yellow-300">SUPER</span>
          <span className="text-red-500 ml-1">GAME</span>
          <span className="text-green-400 ml-1">FEST</span>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 border border-white rounded"
          >
            <Menu size={20} />
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#mission" className="hover:text-yellow-300">Mission</a></li>
          <li><a href="#powerups" className="hover:text-yellow-300">PowerUps</a></li>
          <li><a href="#schedule" className="hover:text-yellow-300">Schedule</a></li>
          <li><a href="#leaderboard" className="hover:text-yellow-300">Leaderboard</a></li>
          <li><a href="#join" className="hover:text-yellow-300">Join Us</a></li>
        </ul>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 py-2">
          <ul className="flex flex-col items-center space-y-2">
            <li><a href="#mission" className="block px-3 py-1 hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Mission</a></li>
            <li><a href="#powerups" className="block px-3 py-1 hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>PowerUps</a></li>
            <li><a href="#schedule" className="block px-3 py-1 hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Schedule</a></li>
            <li><a href="#leaderboard" className="block px-3 py-1 hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Leaderboard</a></li>
            <li><a href="#join" className="block px-3 py-1 hover:text-yellow-300" onClick={() => setIsMenuOpen(false)}>Join Us</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
