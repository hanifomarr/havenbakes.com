"use client";

import { Product } from "@/type";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductProps {
  data: Product;
}

const ProductCard: React.FC<ProductProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className=" bg-white group cursor-pointer border rounded-xl p-3 space-y-4"
    >
      <div className=" aspect-square bg-gray-100 rounded-xl relative">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className=" aspect-square rounded-md object-cover"
        />
      </div>
      <div>
        <p className=" font-semibold text-lg">{data.title}</p>
        <p className=" text-sm text-gray-500">{"Pod Edition"}</p>
      </div>

      <div>
        <p>RM14</p>
      </div>
    </div>
  );
};

export default ProductCard;
