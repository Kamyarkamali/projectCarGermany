import React from "react";

//icon
import { IoLocationSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";

function ButtonSlider() {
  return (
    <div>
      <div className="flex flex-col items-center gap-3 md:w-[350px] mt-5 md:mt-0">
        <button className=" bg-[#E00A0A] text-white gap-2 flex items-center md:w-[160px] w-[350px] h-[40px] rounded-lg justify-center">
          جای شماره تماس
          <IoCallSharp size={18} color="white" />
        </button>
        <button className="flex items-center text-white gap-2 bg-[#E00A0A] ml-7 md:w-[137px] w-[350px] h-[40px] rounded-lg justify-center mr-5 md:mr-0">
          مسیریابی
          <IoLocationSharp size={18} color="white" />
        </button>
      </div>
    </div>
  );
}

export default ButtonSlider;
