import React from "react";
import image9 from "../assets/articles/9.webp";
import image10 from "../assets/articles/10.webp";

function Articles3() {
  return (
    <div className="max-w-[1400px] mx-auto mt-[7rem]">
      {/* image articles1 */}
      <div className="flex items-center justify-center mt-9 gap-5 flex-wrap md:flex-nowrap">
        <div className="relative w-[calc(50%-10px)] md:w-1/2">
          <img
            className="w-full h-[100px] md:h-[250px] rounded-2xl object-cover"
            src={image9}
            alt="/"
          />
          <div className="absolute w-full h-full top-0 left-0 rounded-2xl shadow-lg shadow-gray-600 bg-black/40"></div>
          <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl font-bold">
            <span>سیستم تعلیق</span>
          </div>
        </div>
        <div className="relative w-[calc(50%-10px)] md:w-1/2">
          <img
            className="w-full h-[100px] md:h-[250px] rounded-2xl object-cover"
            src={image10}
            alt="/"
          />
          <div className="absolute w-full h-full top-0 left-0 rounded-2xl shadow-lg shadow-gray-600 bg-black/40"></div>
          <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl font-bold">
            <span>ایرکاندیشن</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles3;
