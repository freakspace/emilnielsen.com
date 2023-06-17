const Work = () => {
  return (
    <section className="py-10 md:py-48 px-4 bg-black snap-always snap-center h-screen">
      <div className="container mx-auto h-full">
        <h2 className="text-white text-4xl md:text-6xl font-bold mb-10">
          Experience
        </h2>
        <div className="flex h-1/2 md:h-4/6 -mt-3">
          <h4 className="text-white text-sm md:text-lg pt-2 md:w-auto w-1/12">
            2018 - 2023
          </h4>
          <div className="w-2/12 md:w-1/12 flex justify-center">
            <div className="h-full w-1 bg-white mt-7 md:mx-10 relative">
              <div className="w-5 h-5 border border-4 border-white rounded-full bg-black absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <div className="w-9/12 md:w-10/12">
            <h3 className="text-white text-3xl">RadarSofthouse</h3>
            <h4 className="text-white text-xl mb-3 font-bold">
              Technical Project Manager
            </h4>
            <p className="text-white text-sm md:text-lg md:w-1/3">
              Through my work at RadarSofthouse, I was responsible for a wide
              range of projects, where my daily tasks included communication
              with developers and clients, translating requirements into
              actionable plans, and general management.
            </p>
          </div>
        </div>
        <div className="flex h-full -mt-3">
          <h4 className="text-white text-sm md:text-lg pt-2 md:w-auto w-1/12">
            2018 - 2018
          </h4>
          <div className="w-2/12 md:w-1/12 flex justify-center">
            <div className="h-full w-1 bg-white mt-7 md:mx-10 relative">
              <div className="w-5 h-5 border border-4 border-white rounded-full bg-black absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <div className="w-9/12 md:w-10/12">
            <h3 className="text-white text-3xl">Nordisk Film</h3>
            <h4 className="text-white text-xl mb-3 font-bold">
              Nordic E-Commerce Manager
            </h4>
            <p className="text-white text-sm md:text-lg md:w-1/3">
              At Nordisk Film, I worked as an e-commerce manager, with
              responsibility for their Nordic e-commerce markets: Denmark,
              Norway, and Sweden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
