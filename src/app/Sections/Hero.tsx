import Image from "next/image";
import { HeroProps } from "typings";

import ButtonContact from "../Components/ButtonContact";

const Hero = ({ props }: { props: HeroProps }) => {
  return (
    <section className="py-20 md:py-48 px-4 bg-black h-screen snap-always snap-center">
      <div className="flex items-center justify-center h-full container mx-auto">
        <div className="grid md:grid-cols-2">
          <div>
            <h2 className="text-white text-xl md:text-3xl mb-3 font-bold">
              {props.subtitle}
            </h2>
            <h1 className="text-pink-700 text-7xl md:text-7xl mb-6 font-extrabold pb-4">
              {props.title}
            </h1>
            <p className="text-white text-2xl mb-5">{props.description}</p>
            <ButtonContact />
          </div>
          <div className="flex justify-center">
            <Image
              src={props.imagePath}
              alt={props.subtitle}
              width={500}
              height={500}
              className="rounded-full w-2/3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
