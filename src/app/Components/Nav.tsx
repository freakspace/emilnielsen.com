import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="container mx-auto py-6">
      <div className="flex gap-3">
        <p className="text-white flex-1 font-bold">+45 33 55 66 77</p>
        <Image
          src="/github-mark.png"
          alt=""
          width={25}
          height={25}
          className="flex-none"
        />
        <Image
          src="/In-White-128.png"
          alt=""
          width={25}
          height={25}
          className="flex-none"
        />
      </div>
    </nav>
  );
};

export default Nav;
