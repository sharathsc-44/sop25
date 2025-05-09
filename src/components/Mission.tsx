
const Mission = () => {
  return (
    <section id="mission" className="py-16">
      <div className="bg-gray-100 p-8 rounded-lg shadow">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900 border-b-4 border-yellow-400 pb-2 inline-block">OUR MISSION</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Super Game Fest brings together gamers of all ages and skill levels for a weekend of fun, competition, and community building.
            </p>
            <p className="text-lg">
              Our mission is to celebrate gaming culture, promote healthy competition, and create unforgettable experiences for everyone who shares our passion for games.
            </p>
          </div>
          <div className="md:w-1/2 bg-yellow-100 p-4 border-4 border-yellow-400 rounded">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded flex justify-center items-center">
              <div className="text-6xl text-yellow-500 pixelated">1UP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
