import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="relative flexCenter max-container padding-container py-8 my-4">
      <Link href="/">
        <Image src="/hb_logo.svg" alt="HavenBakes Logo" fill />
      </Link>
    </nav>
  );
};

export default Navbar;
