
import { Mushroom, Star, Coin, Gamepad } from "lucide-react";

const PowerUps = () => {
  const powerUps = [
    {
      title: "Mushroom Tournaments",
      description: "Grow your gaming skills with tournaments and prizes",
      icon: <Mushroom className="h-10 w-10 text-red-500" />
    },
    {
      title: "Star Power Arcade",
      description: "Become invincible in our classic arcade zone",
      icon: <Star className="h-10 w-10 text-yellow-300" />
    },
    {
      title: "Warp Pipe VR",
      description: "Transport to new worlds with virtual reality games",
      icon: <Gamepad className="h-10 w-10 text-green-500" />
    },
    {
      title: "Coin Collection",
      description: "Learn from gaming pros in our workshops",
      icon: <Coin className="h-10 w-10 text-yellow-400" />
    }
  ];

  return (
    <section id="powerups" className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-red-600 border-b-4 border-yellow-400 pb-2 inline-block mario-font">POWER-UPS</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {powerUps.map((powerUp, index) => (
          <div key={index} className="question-block p-6 rounded-lg shadow-lg power-up-card">
            <div className="flex justify-center mb-4">
              {powerUp.icon}
            </div>
            <h3 className="text-lg font-bold mb-2 text-black mario-font">{powerUp.title}</h3>
            <p className="text-gray-700 text-sm">{powerUp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PowerUps;
