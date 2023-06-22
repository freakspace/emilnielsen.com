const Skills = () => {
  return (
    <section className="flex items-center justify-center px-4 bg-black">
      <div className="container mx-auto flex flex-col justify-between">
        <div className="md:w-3/6 md:self-start py-20">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Fullstack Developer
          </h2>
          <p className="text-white text-xl md:text-2xl">
            Over the past 4 years, I have been deeply immersed in Python and
            TypeScript programming. I&apos;ve developed a wide array of
            projects, both independently and in collaboration with others. While
            I have a preference for Django and React/Next.js, I&apos;m always
            open to acquiring new knowledge and skills.
          </p>
        </div>
        <div className="md:w-3/6 md:self-end py-20">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-6 mt-10 md:mt-0">
            Technical Project Manager
          </h2>
          <p className="text-white text-xl md:text-2xl">
            At RadarSofthouse, I had the privilege of serving as a technical
            project manager, where i over a span of 4.5 years, I managed
            numerous clients on an ongoing basis and successfully orchestrated
            the launch of 10+ projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
