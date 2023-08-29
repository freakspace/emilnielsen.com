import Image from "next/image";
import { HeroProps } from "typings";

import ContactButton from "../Components/ContactButton";

const Hero = ({ props }: { props: HeroProps }) => {
  return (
    <section className="p-4 md:p-20 bg-white">
      <div className="container mx-auto flex items-center justify-center rounded-3xl p-8 md:p-20 bg-blue-600 shadow-xl">
        <div className="grid md:grid-cols-10">
          <div className="flex flex-col h-full justify-between items-start md:col-span-6">
            <div className="">
              <h2 className="text-white text-xl md:text-3xl mb-3 font-bold">
                {props.subtitle}
              </h2>
              <h1 className="text-white text-3xl md:text-7xl md:text-7xl mb-6 font-extrabold mb-4">
                {props.title}
              </h1>
              <p className="text-white text-2xl mb-5">{props.description}</p>
            </div>
            <ContactButton />
          </div>
          <div className="flex md:justify-end md:col-span-4 mt-4 md:mt-0">
            <Image
              src={props.imagePath}
              alt={props.subtitle}
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
