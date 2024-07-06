import React from "react";

//image logo2

import logo2 from "../assets/images/logo2.png";

function TitleSlider() {
  return (
    <div>
      <div className="flex justify-center md:w-[600px] mt-9 md:text-4xl text-2xl font-bold">
        <h1>تعمیرگاه تخصصی اتومبیل های لوکس</h1>
      </div>

      <div className="flex justify-center md:mt-3">
        <img src={logo2} alt="/" />
      </div>
    </div>
  );
}

export default TitleSlider;
