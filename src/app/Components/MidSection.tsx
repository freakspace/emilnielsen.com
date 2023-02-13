import React from "react";

const MidSection = () => {
  return (
    <section className="h-[31vh] flex items-center">
      <div className="container mx-auto py-6 text-center">
        <h2 className="text-4xl">
          Siden er udviklet med <br />{" "}
          <span className="font-extrabold">Next.JS</span> &{" "}
          <span className="font-extrabold">Tailwind</span>
        </h2>
        <button className="mt-4 underline underline-offset-4 text-lg text-black font-bold">
          Se på GitHub
        </button>
      </div>
    </section>
  );
};

export default MidSection;
