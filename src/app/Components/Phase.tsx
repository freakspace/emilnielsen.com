import Image from "next/image";

import { PhaseProps } from "typings";

const Phase = ({ props }: { props: PhaseProps }) => {
  return (
    <section className="flex items-center justify-center py-10 md:py-24 px-4 bg-black snap-always snap-center h-screen">
      <div className="container mx-auto h-auto">
        <div className="flex relative">
          <div className="md:w-1/2">
            <h3 className="text-white text-4xl font-bold">{props.phase}</h3>
            <h2 className="text-pink-700 text-3xl md:text-8xl font-extrabold pb-6">
              {props.title}
            </h2>
            <p className="text-white text-sm md:text-2xl mb-6">
              {props.description}
            </p>
            <p className="text-white font-bold text-xl md:text-3xl mb-2">
              Activities include
            </p>
            <ul className="text-white list-disc md:text-2xl list-inside">
              {props.actions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 flex items-center justify-center h-full">
            <Image
              src={props.imagePath}
              alt={props.title}
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

export default Phase;
