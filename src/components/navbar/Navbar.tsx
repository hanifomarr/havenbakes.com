import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-center z-[999] relative">
      <nav className="flex items-center justify-center  fixed top-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full">
        <ul className="flex items-center justify-center">
          <li className="h-3/4 flex items-center justify-center relative">
            <Link
              className={
                "relative flex items-center justify-center transition "
              }
              href="/"
            >
              <img
                src="/logo/hb_logotype.svg"
                alt="HavenBakes Logo"
                className="h-12 sm:h-16 w-32 sm:w-40"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
