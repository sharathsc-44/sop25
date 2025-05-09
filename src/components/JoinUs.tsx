
import { Star, Mushroom, Trophy, Gamepad } from "lucide-react";

const JoinUs = () => {
  return (
    <section id="join" className="py-16">
      <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8 border-b-4 border-yellow-400 pb-2 inline-block mario-font">JOIN THE QUEST</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-4 mario-font">PRESS START!</h3>
            <p className="mb-4 mario-font text-sm">
              Secure your spot at Super Mario Fest and join the adventure! Early birds get special power-ups and exclusive in-game items!
            </p>
            <ul className="mb-6 space-y-3 mario-font text-xs">
              <li className="flex items-center">
                <Mushroom className="text-red-300 h-5 w-5 mr-2" /> Access to all worlds and castles
              </li>
              <li className="flex items-center">
                <Star className="text-yellow-300 h-5 w-5 mr-2" /> Meet Mario and friends
              </li>
              <li className="flex items-center">
                <Gamepad className="text-green-300 h-5 w-5 mr-2" /> Exclusive ? Block with gaming merch
              </li>
              <li className="flex items-center">
                <Trophy className="text-yellow-300 h-5 w-5 mr-2" /> Chance to win amazing power-ups
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2">
            <form className="bg-blue-800 p-6 rounded-lg brick-block">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1 mario-font text-xs">YOUR NAME</label>
                <input type="text" id="name" className="w-full p-2 rounded bg-blue-50 text-blue-900" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 mario-font text-xs">EMAIL</label>
                <input type="email" id="email" className="w-full p-2 rounded bg-blue-50 text-blue-900" />
              </div>
              <div className="mb-4">
                <label htmlFor="gamertag" className="block mb-1 mario-font text-xs">CHARACTER NAME</label>
                <input type="text" id="gamertag" className="w-full p-2 rounded bg-blue-50 text-blue-900" />
              </div>
              <div>
                <button className="mario-button w-full">
                  1-UP REGISTER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
