
const Leaderboard = () => {
  const topPlayers = [
    { rank: 1, name: "PixelWarrior", game: "Fortnite", score: 10200 },
    { rank: 2, name: "RetroQueen", game: "Mario Kart", score: 9800 },
    { rank: 3, name: "MasterBlaster", game: "Street Fighter", score: 9500 },
    { rank: 4, name: "NinjaGamer", game: "Tekken", score: 9100 },
    { rank: 5, name: "LegendX", game: "Mortal Kombat", score: 8900 }
  ];

  return (
    <section id="leaderboard" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900 border-b-4 border-purple-400 pb-2 inline-block">LEADERBOARD</h2>
      
      <div className="bg-white border-2 border-purple-400 rounded-lg overflow-hidden shadow-lg">
        <div className="bg-purple-500 text-white p-4">
          <h3 className="text-xl font-bold text-center">TOP PLAYERS</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-purple-100">
                <th className="py-3 px-4 text-left">Rank</th>
                <th className="py-3 px-4 text-left">Player</th>
                <th className="py-3 px-4 text-left">Game</th>
                <th className="py-3 px-4 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {topPlayers.map((player) => (
                <tr key={player.rank} className="border-b border-gray-200 hover:bg-purple-50">
                  <td className="py-3 px-4 font-bold">{player.rank}</td>
                  <td className="py-3 px-4">{player.name}</td>
                  <td className="py-3 px-4">{player.game}</td>
                  <td className="py-3 px-4 font-semibold">{player.score}</td>
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
