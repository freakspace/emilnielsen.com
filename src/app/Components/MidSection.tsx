import React from "react";

import Link from "next/link";

const MidSection = () => {
  return (
    <section className="h-[31vh] flex items-center">
      <div className="container mx-auto py-6 text-center">
        <h2 className="text-7xl mb-4">
          <span className="text-3xl">Siden er udviklet med</span> <br />
          <span className="font-extrabold">Next.js</span> &{" "}
          <span className="font-extrabold">Tailwind CSS</span>
        </h2>
        <Link
          href={
            "https://github.com/freakspace/nextjs-tailwind-personal-portfolio"
          }
          className="underline underline-offset-4 text-lg text-black font-bold"
          target={"_blank"}
        >
          Se på GitHub
        </Link>
      </div>
    </section>
  );
};

export default MidSection;
