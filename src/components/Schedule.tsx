
const Schedule = () => {
  const events = [
    {
      day: "WORLD 1",
      events: [
        { time: "09:00", title: "Opening Ceremony", description: "Flag pole raising and welcome speech" },
        { time: "10:30", title: "Goomba Smash", description: "Competition to defeat the most Goombas" },
        { time: "14:00", title: "Retro Mario Challenge", description: "Speed run through classic levels" },
        { time: "17:00", title: "Costume Contest", description: "Best Mario character cosplay" }
      ]
    },
    {
      day: "WORLD 2",
      events: [
        { time: "09:00", title: "Block Building", description: "Minecraft & Mario crossover building" },
        { time: "11:00", title: "Meet & Greet", description: "With Mario game developers" },
        { time: "14:30", title: "Final Boss Battles", description: "Championship Bowser showdowns" },
        { time: "18:00", title: "Star Collection", description: "Awards and closing fireworks" }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-green-600 border-b-4 border-yellow-400 pb-2 inline-block mario-font">WARP ZONES</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {events.map((day, dayIndex) => (
          <div key={dayIndex} className="flex-1 mario-pipe rounded-lg overflow-hidden">
            <div className="bg-green-500 text-white text-center p-3">
              <h3 className="text-xl font-bold mario-font">{day.day}</h3>
            </div>
            <div className="p-4 bg-white">
              {day.events.map((event, eventIndex) => (
                <div key={eventIndex} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-green-700 mario-font text-xs">{event.time}</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mario-font">{event.title}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
