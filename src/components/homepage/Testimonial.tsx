import { TESTIMONIAL } from "@/constants";
import React from "react";

const Testimonial = () => {
  return (
    <section className="min-w-screen min-h-screen flex items-center px-5 py-16 md:py-24">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="bold-32 md:bold-52 mb-5 text-maroon">
            What people are saying.
          </h1>
        </div>
        <div className="-mx-3 py-10 md:flex items-start">
          {TESTIMONIAL.map((item, index) => (
            <div className="px-3 md:w-1/3" key={index}>
              {item.column.map((data, index) => (
                <div
                  key={index}
                  className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
                >
                  <div className="w-full flex mb-4 items-center">
                    <div className="flex-grow ">
                      <h6 className="font-bold text-sm uppercase text-maroon">
                        {data.name}
                      </h6>
                      <p className="regular-16 text-sm  text-gray-600">
                        {data.platform}
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      {data.content}
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
