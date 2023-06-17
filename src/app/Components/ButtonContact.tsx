"use client";

import { useState } from "react";

const ButtonContact = () => {
  const [buttonText, setButtonText] = useState("CONTACT");

  const handleContact = () => {
    setButtonText("hej@emilnielslen.com");
  };
  return (
    <button
      onClick={handleContact}
      className="px-4 py-2 mb-10 text-2xl border-4 border-black bg-transparent text-black font-bold hover:bg-white hover:text-black transition duration-400 hover:ease-in"
    >
      {buttonText}
    </button>
  );
};

export default ButtonContact;
