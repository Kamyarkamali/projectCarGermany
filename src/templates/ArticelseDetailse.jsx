import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import { articlesData } from "../data/localData";

//icon
import { FaCarAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

//image profile
import profile from "../assets/images/profile.jpg";

function ArticelseDetailse() {
  const { name } = useParams();

  const location = useLocation();

  const [randomData, setRandomData] = useState([]);

  const [open, setOpen] = useState(false);

  const fainalData = articlesData.filter((item) => item.title === name);

  useEffect(() => {
    const shuffledData = articlesData
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setRandomData(shuffledData);
  }, []);

  return (
    <div className="flex flex-col justify-center h-[1330px]">
      <div className="border-[3px] border-red-600 lg:p-12 p-7 rounded-3xl lg:w-[1400px] md:h-[10px] h-fit mt-[6rem] md:mt-0 w-[340px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 text-sm">
          <Link to={"/"}>
            <p className="flex gap-1 items-center">
              <FaCarAlt />
              صفحه اصلی
            </p>
          </Link>

          <Link to={"/"}>
            <p>تعمیرات خودرو</p>
          </Link>

          <p className="text-red-700 font-bold">{name}</p>
        </div>
      </div>

      <div className="mt-[2rem] flex flex-col items-start mr-9 gap-4">
        <p className="text-3xl font-bold text-red-600">{name}</p>
        <div className="flex flex-col md:flex-row w-[300px] md:w-[600px] text-sm gap-3 items-center">
          <img src={profile} alt="/" className="w-[20px]" />
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
          <div className="flex flex-col items-center w-[10000] lg:w-[1090px] h-[900px]">
            {fainalData?.map((item) => (
              <div key={item.id}>
                <img
                  src={item.imgae}
                  alt="/"
                  className={`lg:w-[800px] w-[453px] lg:h-[500px]`}
                />
              </div>
            ))}
            <div className="border-2 flex flex-col justify-between mt-4 lg:w-[800px] w-[340px] p-7 bg-[#E00A0A] rounded-2xl">
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
            <div className="mt-4 mr-2 text-[#7A7C7E]">
              <h1>زمان مطالعه:1دقیقه</h1>
              {fainalData?.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 text-[16px]">
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
        <div className="w-[300px] absolute left-0 top-[15rem] h-[1249px] lg:block hidden">
          {randomData?.map((items) => (
            <div key={items.id} className="p-3">
              <Link to={`/${items.title}`}>
                <img
                  className="w-[320px] rounded-t-2xl"
                  src={items.imgae}
                  alt="imagecar"
                />
              </Link>
              <p>{items?.title}</p>
              <Link
                className="text-red-600 text-[13px] font-bold"
                to={`/${items.title}`}
              >
                (مشاهده مطلب)
              </Link>

              <div className="flex gap-2 items-center text-[11px] text-gray-600 mt-3">
                <p>تاریخ ایجاد:</p>
                <p>تیر ۱۸, ۱۴۰۲</p>
                <p>بدون دیدگاه</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticelseDetailse;
