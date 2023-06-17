const About = () => {
  return (
    <section className="flex items-center justify-center py-10 md:py-24 px-4 bg-black snap-always snap-center h-screen">
      <div className="container mx-auto flex flex-col justify-between md:h-5/6">
        <div className="md:w-3/6 md:self-start">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-6">
            About me
          </h2>
          <p className="text-white text-sm md:text-xl mb-5">
            With my extensive experience as a fullstack developer, combined with
            my background in e-commerce and project management, I have developed
            an aptitude for translating complex and challenging problems into
            simple and scalable solutions.
          </p>
          <p className="text-white text-sm md:text-xl mb-5">
            Doing my time as e-commerce manager at Nordisk Film and as Shop
            Management Coordinator at Stylepit, I gained hands-on commercial
            experience, managing e-commerce sites with monthly sessions
            surpassing millions.
          </p>
          <p className="text-white text-sm md:text-xl mb-5">
            As a technical project manager at RadarSofthouse, I extensively
            worked to translate clients&apos; needs and wants into actionable
            plans, resulting in the successful launch of more than 10
            substantial projects.
          </p>
          <p className="text-white text-sm md:text-xl mb-5">
            Over the past 4 years, I have been sharpening my skills as a
            fullstack developer and have developed a plethora of different
            projects, ranging from multiple Django e-commerce sites to React web
            applications, as well as creating Discord bots and a diverse array
            of Python scripts.
          </p>
          <p className="text-white text-sm md:text-xl mb-5">
            In summary, my diverse experience in full-stack development,
            e-commerce, and project management, combined with my ability to
            translate complex problems into scalable solutions, equip me to
            deliver substantial value in a variety of technical and leadership
            roles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
