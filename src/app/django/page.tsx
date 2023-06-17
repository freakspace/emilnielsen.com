"use client";

import { Http2ServerRequest } from "http2";
import { useState } from "react";

export const metadata = {
  title: "Dansk Django Freelance Udvikler",
  description: "",
};

export default function Django() {
  const [buttonText, setButtonText] = useState("KONTAKT");

  const changeText = () => {
    setButtonText("HEJ@EMILNIELSEN.COM");
  };

  return (
    <div>
      <div className="bg-black">
        <section className="py-20 md:py-48 px-4">
          <div className="container mx-auto">
            <h2 className="text-white text-xl md:text-3xl mb-3 font-bold">
              Emil Nielsen
            </h2>
            <h1 className="text-white text-3xl md:text-7xl mb-3">
              <span className="font-extrabold text-blue-400">Django</span>{" "}
              Programmør
            </h1>
            <button
              onClick={changeText}
              className="px-4 py-2 mt-4 text-2xl border-4 border-white bg-transparent text-white font-bold hover:bg-white hover:text-black transition duration-400 hover:ease-in"
            >
              {buttonText}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
