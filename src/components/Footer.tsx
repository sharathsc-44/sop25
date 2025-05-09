
import { useState } from "react";

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
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-700 pb-2">SUPER GAME FEST</h3>
            <p>The ultimate gaming experience for players of all levels. Join us for competitions, workshops, and gaming celebration!</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-700 pb-2">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-yellow-300">Home</a></li>
              <li><a href="#mission" className="hover:text-yellow-300">Our Mission</a></li>
              <li><a href="#powerups" className="hover:text-yellow-300">Power Ups</a></li>
              <li><a href="#schedule" className="hover:text-yellow-300">Schedule</a></li>
              <li><a href="#join" className="hover:text-yellow-300">Join Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-blue-700 pb-2">NEWSLETTER</h3>
            <p className="mb-4">Subscribe for gaming news and event updates!</p>
            <form onSubmit={handleSubmit}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="p-2 w-full rounded-l bg-blue-800 border border-blue-700 focus:outline-none focus:border-yellow-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-4 rounded-r">
                  GO
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-4 text-center text-sm text-blue-300">
          <p>&copy; {new Date().getFullYear()} Super Game Fest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
