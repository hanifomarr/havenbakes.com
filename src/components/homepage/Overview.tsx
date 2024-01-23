import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <section className="flexCenter flex-col  gap-5 padding-container max-container py-10">
      <div className="bold-40 lg:bold-52 text-maroon text-center">
        Discover Our Delectable Selection
      </div>
      <div className="flex flex-col gap-5 mt-2">
        <div className="flexCenter flex-col lg:flex-row gap-4">
          <Image
            src={"/overview/paperbag.jpg"}
            sizes="100vw"
            width={200}
            height={50}
            alt="HavenBakes papperbag"
            className=" h-auto w-full rounded-lg"
          />
          <div className="text-maroon">
            Welcome to a world of mouthwatering delights! Explore our
            handcrafted selection of premium cookies made with the finest
            ingredients. From classic chocolate chip to exotic flavors, we have
            something to satisfy every sweet craving.
          </div>
        </div>
        <div className="flexCenter flex-col lg:flex-row-reverse gap-4">
          <Image
            src={"/overview/apron.jpg"}
            sizes="100vw"
            width={200}
            height={50}
            alt="HavenBakes cookies"
            className=" h-auto w-full rounded-lg "
          />
          <div className="text-maroon">
            Welcome to a world of mouthwatering delights! Explore our
            handcrafted selection of premium cookies made with the finest
            ingredients. From classic chocolate chip to exotic flavors, we have
            something to satisfy every sweet craving.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
