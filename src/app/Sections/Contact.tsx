import ButtonContact from "../Components/ButtonContact";

const Contact = () => {
  return (
    <section className="pb-20 px-4 bg-black">
      <div className="container mx-auto h-full">
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

export default Contact;
