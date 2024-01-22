import { product } from "@/data/data";
import Image from "next/image";
import React from "react";

interface ProductProps {
  backgroundImage: string;
  title: string;
}

const ProductItem = ({ title, backgroundImage }: ProductProps) => {
  return (
    <div className="flex items-center flex-col">
      <div className="relative rounded-full overflow-hidden h-40 w-40">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flexCenter bold-20 text-center text-maroon">{title}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="h-auto flexCenter flex-col max-container padding-container py-10">
      <div className=" text-center bold-52 lg:bold-88 text-maroon">
        Premium Butter Cookies
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {product.map((item, index) => (
          <ProductItem
            key={index}
            backgroundImage={item.image}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
