"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [buttonText, setButtonText] = useState("KONTAKT");
  const [stacks, setStacks] = useState([
    "Python",
    "TypeScript",
    "Django",
    "Next.js",
    "API",
    "JavaScript",
    "REST",
    "Jira",
    "Tailwind",
    "Blockchain",
    "Bootstrap",
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

  const changeText = () => {
    setButtonText("HEJ@EMILNIELSEN.COM");
  };

  return (
    <section className="py-20 md:py-48 px-4">
      <div className="container mx-auto">
        <h1 className="text-white text-xl md:text-3xl mb-3 font-bold">
          Emil Nielsen
        </h1>
        <h2 className="text-white text-3xl md:text-7xl mb-3">
          Full-Stack{" "}
          <span className="font-extrabold text-blue-400">Udvikler</span> &<br />
          Teknisk{" "}
          <span className="font-extrabold text-blue-400">IT Projektleder</span>
        </h2>
        <h3 className="text-white text-lg md:text-3xl mb-4">
          Jeg arbejder blandt andet med
          <br />
          <span className="font-bold"> {stacks[0]}</span>
        </h3>
        <button
          onClick={changeText}
          className="px-4 py-2 mt-4 text-2xl border-4 border-white bg-transparent text-white font-bold hover:bg-white hover:text-black transition duration-400 hover:ease-in"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default Hero;
