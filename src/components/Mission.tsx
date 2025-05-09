
import { Mushroom } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-16">
      <div className="brick-block p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-8 text-white border-b-4 border-yellow-300 pb-2 inline-block mario-font">WORLD 1-1</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <p className="text-lg mb-4 text-white mario-font text-sm leading-6">
              Super Mario Fest brings together gamers from across the Mushroom Kingdom for a weekend of adventure, competition, and coin collecting.
            </p>
            <p className="text-lg text-white mario-font text-sm leading-6">
              Our mission is to defeat Bowser, save Princess Peach, and create memorable gaming moments for everyone in attendance. No Goombas allowed!
            </p>
          </div>
          <div className="md:w-1/2 question-block p-4 rounded">
            <div className="flex justify-center items-center p-8">
              <div className="flex flex-col items-center">
                <Mushroom size={64} className="text-red-500 mb-4" />
                <div className="text-xl text-black font-bold mario-font">1-UP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
