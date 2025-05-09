
const Sponsors = () => {
  const sponsors = [
    { name: "GameTech", level: "Platinum" },
    { name: "PixelPlay", level: "Gold" },
    { name: "NeoArcade", level: "Gold" },
    { name: "ByteStream", level: "Silver" },
    { name: "GamersUnite", level: "Silver" },
    { name: "VirtualVision", level: "Bronze" }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900 border-b-4 border-gray-400 pb-2 inline-block">OUR SPONSORS</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        {sponsors.map((sponsor, index) => {
          let bgColor;
          switch (sponsor.level) {
            case "Platinum": bgColor = "bg-gray-300"; break;
            case "Gold": bgColor = "bg-yellow-100"; break;
            case "Silver": bgColor = "bg-gray-100"; break;
            case "Bronze": bgColor = "bg-yellow-50"; break;
            default: bgColor = "bg-white";
          }
          
          return (
            <div key={index} className={`${bgColor} p-4 rounded-lg border border-gray-300`}>
              <div className="font-bold mb-1">{sponsor.name}</div>
              <div className="text-xs text-gray-600">{sponsor.level} Sponsor</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;
