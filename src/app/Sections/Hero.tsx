import Image from "next/image";

import ButtonContact from "../Components/ButtonContact";

const Hero = () => {
  return (
    <section className="py-20 md:py-48 px-4 bg-black snap-always snap-center h-screen">
      <div className="flex items-center justify-center h-full container mx-auto">
        <div className="grid md:grid-cols-2">
          <div>
            <h2 className="text-white text-xl md:text-3xl mb-3 font-bold">
              Emil Nielsen
            </h2>
            <h1 className="text-white text-4xl md:text-7xl mb-5 font-bold">
              Fullstack Developer & Technical Project Manager
            </h1>
            <p className="text-white text-2xl mb-5">
              I help business professionals to translate their most challenging
              and technical issues into simple and scalable IT solutions.
            </p>
            <ButtonContact />
          </div>
          <div className="flex justify-center">
            <Image
              src="/mig3.jpg"
              alt="Emil Nielsen"
              width={500}
              height={500}
              className="rounded-full w-2/3"
            />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-12 h-12 fixed bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
