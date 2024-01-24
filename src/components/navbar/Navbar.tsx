import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="relative flex justify-center items-center py-8 mx-8 my-20 h-10 w-auto">
      <Image src="/overview/hb_logotype.svg" alt="HavenBakes Logo" fill />
    </nav>
  );
};

export default Navbar;
