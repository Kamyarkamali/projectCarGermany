import React from "react";

import image9 from "../assets/articles/9.webp";
import image10 from "../assets/articles/10.webp";

function Articles3() {
  return (
    <div className="max-w-[1400px] mx-auto mt-[7rem]">
      {/* image articles1 */}
      <div className="flex items-center justify-center mt-9 gap-5">
        <div className="relative w-[360px] md:w-[658px]">
          <img
            className="md:w-[658px] rounded-2xl md:h-[250px] object-cover "
            src={image9}
            alt="/"
          />
          <div className="absolute w-full rounded-2xl shadow-lg shadow-gray-600 bg-black/40 top-0 h-full">
            .
          </div>
          <div className="absolute text-white top-[7rem] right-[3rem] text-3xl font-bold">
            <span className="absolute top-[-70px] md:top-[10px] right-[-2rem] md:text-2xl text-[17px] w-[200px]">
              سیستم تعلیق
            </span>
          </div>
        </div>
        <div className="relative w-[360px] md:w-[658px]">
          <img
            className="md:w-[658px] rounded-2xl md:h-[250px] object-cover "
            src={image10}
            alt="/"
          />
          <div className="absolute w-full rounded-2xl shadow-lg shadow-gray-600 bg-black/40 top-0 h-full">
            .
          </div>
          <div className="absolute text-white top-[7rem] right-[3rem] text-3xl font-bold">
            <span className="absolute top-[-70px] md:top-[10px] right-[-2rem] md:text-2xl text-[17px] w-[200px]">
              ایرکاندیشن
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles3;
