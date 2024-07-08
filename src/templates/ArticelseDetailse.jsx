import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { articlesData } from "../data/localData";

//icon
import { FaCarAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

//image profile
import profile from "../assets/images/profile.jpg";

function ArticelseDetailse() {
  const location = useLocation();

  const pathName =
    location.pathname ===
    "/%D8%B3%DB%8C%D8%B3%D8%AA%D9%85%20%D9%BE%D8%A7%DB%8C%D8%AF%D8%A7%D8%B1%DB%8C";

  const pathname2 =
    "/%D8%B3%DB%8C%D8%B3%D8%AA%D9%85%20%D9%BE%D8%A7%DB%8C%D8%AF%D8%A7%D8%B1%DB%8C";

  const { name } = useParams();

  const [open, setOpen] = useState(false);

  const fainalData = articlesData.filter((item) => item.title === name);

  return (
    <div
      className={`flex flex-col justify-center h-[1400px] max-w-[1400px] mx-auto`}
    >
      <div className="border-[3px] border-red-600 lg:p-9 p-7 rounded-3xl lg:w-[1400px] w-[430px] mx-auto">
        {fainalData.map((item) => (
          <div className="flex items-center gap-8 text-sm w-[900px]">
            <Link to={"/"}>
              <p className="flex gap-1 items-center">
                <FaCarAlt />
                صفحه اصلی
              </p>
            </Link>

            <Link to={"/"}>
              <p>تعمیرات خودرو</p>
            </Link>

            <p>{name}</p>
          </div>
        ))}
      </div>

      <div className="mt-[2rem] flex flex-col items-start mr-9 gap-4">
        <p className="text-2xl text-red-600">{name}</p>
        <div className="flex text-sm gap-3 items-center">
          <img src={profile} alt="/" className="w-[20px] " />
          <p>نویسنده:</p>
          <p>نام دلخواه نوشته شود</p>

          <div className="flex gap-2 items-center">
            <p>تاریخ ایجاد:</p>
            <p> ۱۸ تیر , ۱۴۰۲</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[3rem]">
        <div>
          <div className="flex flex-col  items-center w-[10000] lg:w-[1090px]">
            {fainalData?.map((item) => (
              <div>
                <img
                  src={item.imgae}
                  alt="/"
                  className={`lg:w-[800px] w-[453px] lg:h-[500px] ${
                    pathName && "lg:h-[300px]"
                  }`}
                />
              </div>
            ))}
            <div className="border-2 flex flex-col justify-between mt-4 lg:w-[800px] w-[440px] p-7 bg-[#E00A0A] rounded-2xl">
              <div className="flex justify-between">
                <h1 className="text-white font-bold">فهرست مطالب</h1>
                <MdKeyboardArrowDown
                  className="cursor-pointer"
                  onClick={() => setOpen(!open)}
                  size={27}
                  color="white"
                />
              </div>
              {open && (
                <div className="border p-3 bg-white rounded-2xl mt-9">
                  <p>{name}</p>
                </div>
              )}
            </div>

            {/* detailse */}
            <div className="mt-4  text-[#7A7C7E]">
              <h1>زمان مطالعه:1دقیقه</h1>
              {fainalData?.map((item) => (
                <div className="flex flex-col gap-4 text-[16px]">
                  <p className="ml-4 leading-7">{item?.li}</p>
                  <p>{item?.li2}</p>
                  <p>{item?.li3}</p>
                  <p>{item?.li4}</p>
                  <p>{item?.li5}</p>
                  <p>{item?.li6}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border w-[300px] absolute left-0 top-[15rem] h-[1249px] lg:block hidden"></div>
      </div>
    </div>
  );
}

export default ArticelseDetailse;
