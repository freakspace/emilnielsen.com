"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { InlineWidget } from "react-calendly";
import Calendly from "./Calendly";

const CalendlyWidget = dynamic(() => import("./Calendly"), { ssr: false });

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-8 py-2 text-xl w-full md:w-auto md:text-2xl border-4 rounded-3xl border-white bg-transparent text-white font-bold hover:bg-white hover:text-black transition duration-400 hover:ease-in flex items-center"
      >
        Schedule a call
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="ml-2 w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
      </button>
      <CalendlyWidget isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ContactButton;
