import ButtonContact from "../Components/ButtonContact";

const WorkEnd = () => {
  return (
    <section className="py-10 md:py-48 px-4 bg-black snap-always snap-center h-screen">
      <div className="container mx-auto h-full">
        <div className="flex h-1/2 md:h-4/6 -mt-3">
          <h4 className="text-white text-sm md:text-lg pt-2 md:w-auto w-1/12 -mt-3">
            2011 - 2016
          </h4>
          <div className="w-2/12 md:w-1/12 flex justify-center">
            <div className="h-1/2 md:h-full w-1 mt-5 mx-10 relative">
              <div className="w-5 h-5 border border-4 border-white rounded-full bg-black absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <div className="w-9/12 md:w-10/12">
            <h3 className="text-white text-3xl -mt-3">Aarhus Universitet</h3>
            <h4 className="text-white text-xl mb-3 font-bold">
              Bachelor of Engineering in Business Development (BDE)
            </h4>
            <p className="text-white text-sm md:text-lg md:w-1/3">
              At Aarhus University, I pursued a Bachelor of Engineering in
              Business Development, where I concentrated extensively on
              e-commerce, branding, and international marketing. For my thesis,
              I wrote about my own businesses, delving deeply into areas such as
              conversion rate optimization, branding, marketing, and so much
              more.
            </p>
          </div>
        </div>
        <div className="h-auto bg-white p-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-5">
            Let&apos;s have a talk?
          </h2>
          <p className="text-sm md:text-lg md:w-1/3 mb-10">
            I&apos;m always looking to grow professionally, and currently,
            I&apos;m seeking opportunities in fullstack development and
            technical project management.
          </p>
          <ButtonContact />
        </div>
      </div>
    </section>
  );
};

export default WorkEnd;
