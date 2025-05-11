import { Trophy, Coins } from "lucide-react";

const Leaderboard = () => {
  const topPlayers = [
    { rank: 1, name: "SuperMario64", game: "Super Mario Bros.", score: 999999 },
    { rank: 2, name: "PrincessPeach", game: "Mario Kart", score: 888888 },
    { rank: 3, name: "Luigi_Green", game: "Mario Party", score: 777777 },
    { rank: 4, name: "Bowser_King", game: "Super Smash Bros", score: 666666 },
    { rank: 5, name: "Toad_Stool", game: "Mario Tennis", score: 555555 }
  ];

  return (
    <section id="leaderboard" className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-red-600 border-b-4 border-yellow-400 pb-2 inline-block mario-font">HIGH SCORES</h2>
      
      <div className="bg-blue-900 border-4 border-yellow-400 rounded-lg overflow-hidden shadow-lg">
        <div className="bg-red-600 text-white p-4 flex items-center justify-center">
          <Trophy className="text-yellow-300 h-6 w-6 mr-2" />
          <h3 className="text-xl font-bold text-center mario-font">TOP PLAYERS</h3>
          <Trophy className="text-yellow-300 h-6 w-6 ml-2" />
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-800">
                <th className="py-3 px-4 text-left text-white mario-font text-xs">RANK</th>
                <th className="py-3 px-4 text-left text-white mario-font text-xs">PLAYER</th>
                <th className="py-3 px-4 text-left text-white mario-font text-xs">GAME</th>
                <th className="py-3 px-4 text-left text-white mario-font text-xs">POINTS</th>
              </tr>
            </thead>
            <tbody>
              {topPlayers.map((player) => (
                <tr key={player.rank} className="border-b border-blue-700 hover:bg-blue-700/50">
                  <td className="py-3 px-4 font-bold text-white">{player.rank}</td>
                  <td className="py-3 px-4 text-yellow-300">{player.name}</td>
                  <td className="py-3 px-4 text-white">{player.game}</td>
                  <td className="py-3 px-4 font-semibold text-green-400">
                    {player.score} <Coins className="inline h-4 w-4 text-yellow-300 coin-animate" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
