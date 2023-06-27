const Experience = [
  {
    year: "2018 - 2023",
    company: "RadarSofthouse",
    title: "Technical Project Manager",
    description:
      "Through my work at RadarSofthouse, I was responsible for a wide range of projects, where my daily tasks included communication with developers and clients, translating requirements into actionable plans, and general management.",
  },
  {
    year: "2018 - 2018",
    company: "Nordisk Film",
    title: "Nordic E-Commerce Manager",
    description:
      "At Nordisk Film, I worked as an e-commerce manager, with responsibility for their Nordic e-commerce markets: Denmark, Norway, and Sweden.",
  },
  {
    year: "2017 - 2018",
    company: "Stylepit",
    title: "Shop Management Coordinator",
    description:
      "I managed on-site marketing for STYLEPIT across Europe, drawing over 15 million annual sessions. My tasks included analysis of user behavior via Google Analytics, and e-commerce consultancy and on-going site development as product owner.",
  },
  {
    year: "2011 - 2017",
    company: "Watchmen",
    title: "Founder/Owner",
    description:
      "I established Watchmen, an online e-commer cestore, in 2011 and managed it until 2017. Our mission was to cater to budget-conscious men with a flair for stylish timepieces. Over the course of its operation, the store successfully processed over 3,000 orders. My journey with Watchmen allowed me to delve into every aspect of e-commerce, encompassing areas from coding and marketing to customer service.",
  },
  {
    year: "2011 - 2016",
    company: "Aarhus University",
    title: "Bachelor of Engineering in Business Development (BDE)",
    description:
      "At Aarhus University, I pursued a Bachelor of Engineering in Business Development, where I concentrated extensively on e-commerce, branding, and international marketing. For my thesis, I wrote about my own businesses, delving deeply into areas such as conversion rate optimization, branding, marketing, and so much more.",
  },
];

const Work = () => {
  return (
    <section className="py-10 md:py-48 px-4 bg-black">
      <div className="container mx-auto h-full">
        <h2 className="text-pink-700 text-4xl md:text-6xl font-bold mb-10">
          Experience
        </h2>
        {Experience.map((item, index) => (
          <div key={index} className="flex h-96">
            <h4 className="text-white text-sm md:text-lg pt-2 md:w-auto w-1/12">
              {item.year}
            </h4>
            <div className="w-2/12 md:w-1/12 flex justify-center">
              <div className="h-full w-1 bg-white mt-7 md:mx-10 relative">
                <div className="w-5 h-5 border border-4 border-white rounded-full bg-black absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
            <div className="w-9/12 md:w-10/12">
              <h3 className="text-white text-3xl">{item.company}</h3>
              <h4 className="text-white text-xl mb-3 font-bold">
                {item.title}
              </h4>
              <p className="text-white text-sm md:text-lg md:w-1/3">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
