import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="container my-4 mx-auto md:px-6">
      <div className=" bg-maroon h-[200px] md:h-[300px] lg:[400px] rounded-xl">
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center md:px-12">
            <h2 className=" mb-8 bold-20 md:bold-32 lg:bold-52 text-cream">
              Pre Order Raya 2024 <br />
              Is Now Open
            </h2>
            <Link href="https://www.thehautepastry.com.my/order/form/27">
              <button
                type="button"
                className="bg-cream rounded border-2 border-neutral-50 px-[22px] py-[8px] md:px-[46px] md:py-[14px] text-sm font-medium uppercase leading-normal text-maroon transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
