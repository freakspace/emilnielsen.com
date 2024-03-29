"use client";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

interface Project {
  name: string;
  title: string;
  link: string;
  github: string;
  description: string;
  tags: string[];
}

interface ProjectSliderProps {
  projects: Project[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    customPaging: (i: number) => (
      <div className="slick-slide mt-10" style={{ color: "white" }}>
        {i == currentSlideIndex ? (
          <div className="slick-active w-4 h-4 bg-black border border-white border-4"></div>
        ) : (
          <div className="w-4 h-4 bg-white"></div>
        )}
      </div>
    ),
    afterChange: (current: number) => setCurrentSlideIndex(current),
    className: "",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <div>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="border-4 border-white p-6">
            <h3 className="text-white text-xl">{project.name}</h3>
            <h4 className="text-white text-3xl font-bold mb-4">
              {project.title}
            </h4>
            <div className="flex mt-5 mb-4">
              {project.tags.map((item: string, id: number) => (
                <span
                  key={id}
                  className="text-black bg-white py-1 px-4 font-bold mr-2"
                >
                  {item}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                className="inline-block text-white mt-3"
                target="_blank"
                rel="noreferrer"
                title="Personlige Malerier & Portrætter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </a>
            )}
            {project.github && (
              <a
                href={project.link}
                className="inline-block text-white mt-3"
                target="_blank"
                rel="noreferrer"
                title="Personlige Malerier & Portrætter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 fill-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {/* <button
              onClick={() => handleOpenModal(project.component)}
              className="text-white font-bold inline-block flex text-xl"
            >
              Vis
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-5 h-5 mt-1 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button> */}
          </div>
        ))}
      </Slider>
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:align-middle w-full h-screen">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {modalData}
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => setIsModalOpen(false)}
                  type="button"
                  className=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSlider;
