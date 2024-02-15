"use client";
import { product } from "@/data/data";
import Image from "next/image";
import { useState } from "react";

const ImageGallery = () => {
  const [bigImage, setBigImage] = useState(product[0].image);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };
  return (
    <div className="grid gap-4 lg:grid-cols-5 ">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col  ">
        {product.map((item) => (
          <div
            key={item.id}
            className=" overflow-hidden rounded-lg bg-gray-100  "
          >
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(item.image)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 ">
        <Image
          src={bigImage}
          alt="photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
        <span className=" absolute right-0 top-0 bg-red-500 rounded-lg px-3 py-1.5 m-2 text-sm text-white tracking-wider uppercase">
          Sale
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;
