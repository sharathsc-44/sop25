
const Schedule = () => {
  const events = [
    {
      day: "DAY 1",
      events: [
        { time: "9:00 AM", title: "Opening Ceremony", description: "Welcome speech and event overview" },
        { time: "10:30 AM", title: "Fortnite Tournament", description: "Solo competition - Qualifying rounds" },
        { time: "2:00 PM", title: "Retro Gaming Challenge", description: "Competition on classic consoles" },
        { time: "5:00 PM", title: "Cosplay Showcase", description: "Gaming character cosplay contest" }
      ]
    },
    {
      day: "DAY 2",
      events: [
        { time: "9:00 AM", title: "Minecraft Building Contest", description: "Team building competition" },
        { time: "11:00 AM", title: "Industry Panel", description: "Discussion with game developers" },
        { time: "2:30 PM", title: "Final Tournaments", description: "Championship rounds for all games" },
        { time: "6:00 PM", title: "Awards Ceremony", description: "Prizes and closing celebration" }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900 border-b-4 border-green-400 pb-2 inline-block">SCHEDULE</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {events.map((day, dayIndex) => (
          <div key={dayIndex} className="flex-1 bg-white border-2 border-green-400 rounded-lg overflow-hidden">
            <div className="bg-green-400 text-white text-center p-3">
              <h3 className="text-xl font-bold">{day.day}</h3>
            </div>
            <div className="p-4">
              {day.events.map((event, eventIndex) => (
                <div key={eventIndex} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-green-700">{event.time}</span>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{event.title}</span>
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
