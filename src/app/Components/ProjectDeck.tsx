import Image from "next/image";
import Pill from "./Pill";

import { IProject } from "typings";

const ProjectDeck = ({ project }: { project: IProject }) => {
  return (
    <section className="px-4 py-10 md:p-10 bg-white">
      <div className="container mx-auto border border-neutral-300 rounded-3xl p-8 md:p-20 bg-neutral-100 shadow-xl">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-6 md:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-xl md:text-3xl font-bold text-blue-600">
                {project.subtitle}
              </h3>
              {project.link && (
                <a href={project.link} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 md:w-6 md:h-6 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    />
                  </svg>
                </a>
              )}
            </div>
            <h2 className="text-3xl md:text-5xl md:text-5xl font-bold mb-6">
              {project.title}
            </h2>
            <p className="text-lg md:text-2xl text-black mb-8">
              {project.description}
            </p>
            <div className="">
              <div className="flex flex-wrap">
                {project.stack.map((stack, id) => (
                  <Pill text={stack} key={id} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-4 md:flex gap-4">
            {project.features.map((feature, id) => (
              <div
                key={id}
                className="rounded-3xl overflow-hidden border bg-white p-4 mb-4 md:mb-0"
              >
                <Image
                  key={id}
                  src={feature.imagePath}
                  alt="test"
                  width={500}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="p-4 bg-white border-t-2 border-neutral-200">
                  <p className="text-base font-semibold text-gray-900">
                    {feature.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDeck;
