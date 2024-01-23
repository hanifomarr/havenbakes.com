import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div className="w-full h-screen bg-fixed bg-cover bg-center flex justify-center items-center relative">
      {/* Background Image for Desktop */}
      <div
        className="hidden md:flex w-full h-full bg-fixed bg-cover relative"
        style={{
          backgroundImage: 'url("/overview/apron.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Image
            src="/logo/hb_logotype_white.svg"
            alt="HavenBakes Logo"
            width={200}
            height={50}
            className="w-[300px] md:w-[500px]"
          />
        </div>
      </div>

      {/* Background Image for Mobile */}
      <div
        className="flex md:hidden w-full h-full bg-fixed bg-cover relative"
        style={{
          backgroundImage: 'url("/overview/mobile_apron.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Image
            src="/logo/hb_logotype_white.svg"
            alt="HavenBakes Logo"
            width={200}
            height={50}
            className="w-[300px] md:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
