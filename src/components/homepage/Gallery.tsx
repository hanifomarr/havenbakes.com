import React from "react";
import image1 from "../../../public/images/biscoff.jpg";
import image2 from "../../../public/images/papebag.jpg";
import image3 from "../../../public/images/nutella.jpg";
import Image from "next/image";
import clsx from "clsx";

const Gallery = () => {
  let rotations = ["rotate-2", "-rotate-2", "rotate-2"];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100  sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
