
const JoinUs = () => {
  return (
    <section id="join" className="py-16">
      <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 border-b-4 border-yellow-400 pb-2 inline-block">JOIN THE QUEST</h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Register Now!</h3>
            <p className="mb-4">
              Secure your spot at Super Game Fest and be part of an epic gaming adventure. Early birds get special perks and exclusive in-game items!
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">★</span> Access to all tournaments and events
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">★</span> Meet gaming celebrities and developers
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">★</span> Exclusive swag bag with gaming merch
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">★</span> Chance to win amazing gaming gear
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2">
            <form className="bg-blue-800 p-6 rounded-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Your Name</label>
                <input type="text" id="name" className="w-full p-2 rounded bg-blue-50 text-blue-900" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email Address</label>
                <input type="email" id="email" className="w-full p-2 rounded bg-blue-50 text-blue-900" />
              </div>
              <div className="mb-4">
                <label htmlFor="gamertag" className="block mb-1">Gamer Tag</label>
                <input type="text" id="gamertag" className="w-full p-2 rounded bg-blue-50 text-blue-900" />
              </div>
              <div>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded">
                  REGISTER
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
