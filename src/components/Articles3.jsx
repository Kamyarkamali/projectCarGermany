import React from "react";

import image9 from "../assets/articles/9.webp";
import image10 from "../assets/articles/10.webp";

function Articles3() {
  return (
    <div className="max-w-[1400px] mx-auto mt-[7rem]">
      {/* image articles1 */}
      <div className="flex lg:flex-row flex-col items-center justify-center mt-9 gap-5">
        <div className="relative w-[360px] md:w-[658px]">
          <img
            className="w-[658px] rounded-2xl h-[220px] object-cover "
            src={image9}
            alt="/"
          />
          <div className="absolute w-full rounded-2xl shadow-lg shadow-gray-600 bg-black/40 top-0 h-full">
            .
          </div>
          <div className="absolute text-white top-[7rem] right-[3rem] text-3xl font-bold">
            <span>سیستم تعلیق</span>
          </div>
        </div>
        <div className="relative w-[360px] md:w-[658px]">
          <img
            className="w-[658px] rounded-2xl h-[220px] object-cover"
            src={image10}
            alt="/"
          />
          <div className="absolute w-full rounded-2xl shadow-lg shadow-gray-600 bg-black/40 top-0 h-full">
            .
          </div>
          <div className="absolute text-white top-[7rem] right-[3rem] text-3xl font-bold">
            <span>ایرکاندیشن</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles3;
