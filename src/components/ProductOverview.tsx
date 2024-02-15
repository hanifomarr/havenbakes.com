const ProductOverview = () => {
  return (
    <div className="md:py-4 space-y-4">
      <div className=" mb-3 md:mb-4">
        <span className=" text-sm text-neutral-500">Pod Edition</span>
        <h1 className=" font-bold text-xl md:text-2xl">Nutella Pod</h1>
        <p>
          {
            "A chocolate lovers dream cookies! These Red Velvet cookies dipped with premium dark choc. Absolutely crumbly, soft and melt in the mouth"
          }
        </p>
      </div>
      <div className="flex gap-2 items-end">
        <span className=" text-xl font-bold text-gray-800 md:text-2xl">
          RM 100
        </span>
        <span className=" line-through text-red-500">RM300</span>
      </div>

      <div className="flex gap-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Onpay
        </button>
        <button className=" bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Shopee
        </button>
        <button className=" bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Tiktok
        </button>
      </div>

      <div className="">
        <h2 className=" font-bold text-xl">Ingredients</h2>
        <p>
          High-quality flour, Premium chocolate chunks, Butter and sugar, Secret
          blend of spices
        </p>
      </div>
    </div>
  );
};

export default ProductOverview;
