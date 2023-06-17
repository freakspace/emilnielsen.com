import ProjectSlider from "../Components/Slider";

const projects = [
  {
    name: "Bjørn Art",
    title: "E-commerce site with complex pricing structure",
    link: "https://bjornart.dk",
    github: "https://bjornart.dk",
    description: "",
    tags: ["Python", "Django", "JavaScript", "Stripe"],
  },
  {
    name: "DrypDryp",
    title: "Affiliate site with automatic product- and price sync.",
    link: "https://drypdryp.dk",
    github: "",
    description: "",
    tags: ["Python", "Django", "JavaScript"],
  },
  {
    name: "MoonMiners",
    title: "Idle-game with the goal of accumulating ressources",
    link: "",
    github: "",
    description: "",
    tags: ["TypeScript", "Next.js", "React"],
  },
  {
    name: "Emilnielsen.com",
    title: "Personal portfolio/resume showcasing my experience",
    link: "",
    github: "",
    description: "",
    tags: ["TypeScript", "Next.js", "Tailwind"],
  },
  {
    name: "Refill",
    title: "Marketplace subscription-service for coffeeroasters",
    link: "",
    github: "",
    description: "",
    tags: ["Python", "Django"],
  },
  {
    name: "Tiny Analytics",
    title: "Simple dashboard to fetch and display data from GA4",
    link: "",
    github: "",
    description: "",
    tags: ["TypeScript", "Next.js", "React", "oAuth", "API"],
  },
  {
    name: "Discord Rafflestore",
    title: "Discord rafflestore with blockchain support",
    link: "",
    github: "",
    description: "",
    tags: ["Python", "Pycord", "Linux", "Solana"],
  },
];

const Projects = () => {
  return (
    <section className="flex items-center justify-center py-10 md:py-48 px-4 bg-black snap-always snap-center h-screen">
      <div className="container mx-auto">
        <>
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-10">
            Projekter
          </h2>
          <ProjectSlider projects={projects} />
        </>
      </div>
    </section>
  );
};

export default Projects;
