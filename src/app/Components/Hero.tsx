"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [stacks, setStacks] = useState([
    "Python",
    "TypeScript",
    "JavaScript",
    "Django",
    "Next.JS",
    "API",
    "Jira",
    "Tailwind",
    "Boostrap",
    "Blockchain",
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const firstItem = stacks.shift();
      if (firstItem) {
        setStacks([...stacks, firstItem]);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [stacks]);

  return (
    <section className="h-[69vh] flex items-center">
      <div className="container mx-auto py-6">
        <h1 className="text-3xl mb-3 font-bold">Emil Nielsen</h1>
        <h2 className="text-7xl mb-3">
          Full-Stack{" "}
          <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-blue-600 to-blue-500">
            Udvikler
          </span>{" "}
          &<br />
          Teknisk{" "}
          <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 via-blue-600 to-blue-500">
            Projektleder
          </span>
        </h2>
        <h3 className="text-3xl mb-4">
          Jeg arbejder blandt andet med
          <span className="font-bold"> {stacks[0]}</span>
        </h3>
        <button className="px-4 py-2 mt-4 text-2xl border-4 border-black bg-transparent text-black font-bold hover:bg-white transition duration-400 hover:ease-in">
          KONTAKT
        </button>
      </div>
    </section>
  );
};

export default Hero;
