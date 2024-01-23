import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div
      className="w-full h-screen bg-fixed bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: 'url("/overview/apron.jpg")',
      }}
    >
      <Image
        src="/logo/hb_logotype_white.svg"
        alt="HavenBakes Logo"
        sizes="100vw"
        width={200}
        height={50}
        className="w-[250px] md:w-[500px]"
      />
    </div>
  );
};

export default Overview;
