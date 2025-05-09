
const PowerUps = () => {
  const powerUps = [
    {
      title: "Pro Gaming Tournaments",
      description: "Compete in tournaments for popular games with cash prizes",
      icon: "🎮"
    },
    {
      title: "Retro Arcade Zone",
      description: "Play classic arcade games from the golden age of gaming",
      icon: "👾"
    },
    {
      title: "VR Experience",
      description: "Step into virtual worlds with the latest VR technology",
      icon: "🕹️"
    },
    {
      title: "Gaming Workshops",
      description: "Learn from industry professionals in our workshops",
      icon: "💻"
    }
  ];

  return (
    <section id="powerups" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900 border-b-4 border-red-400 pb-2 inline-block">POWER UPS</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {powerUps.map((powerUp, index) => (
          <div key={index} className="bg-white border-2 border-red-400 p-6 rounded-lg shadow-lg transform transition hover:-translate-y-1">
            <div className="text-4xl mb-4">{powerUp.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-red-600">{powerUp.title}</h3>
            <p className="text-gray-700">{powerUp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PowerUps;
