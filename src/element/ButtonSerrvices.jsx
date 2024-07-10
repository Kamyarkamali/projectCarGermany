import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import Services2 from "./Services2";
import Services3 from "./Services3";

function ButtonSerrvices() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const onmusHandeleer = () => {
    setOpen(true);
    setOpen2(false);
  };

  const onmusHandeler2 = () => {
    setOpen(false);
    setOpen2(true);
  };

  return (
    <div className="bg-[#E00A0A] shadow-lg w-[200px] shadow-gray-600 p-5 rounded-2xl">
      <div className="flex relative items-center justify-between">
        <span onMouseEnter={onmusHandeleer}>خدمات خودرو</span>
        <MdArrowDropDown size={30} />

        <>
          <div className="absolute left-[-13.7rem] top-[-0.1rem]">
            {open && <Services2 />}
          </div>

          <div className={"absolute left-[-13.7rem] top-[3rem]"}>
            {open2 && <Services3 />}
          </div>
        </>
      </div>

      <div className="flex items-center justify-between">
        <span onMouseEnter={onmusHandeler2}>خدمات دیتیل خودرو</span>
        <MdArrowDropDown size={30} />
      </div>
    </div>
  );
}

export default ButtonSerrvices;
