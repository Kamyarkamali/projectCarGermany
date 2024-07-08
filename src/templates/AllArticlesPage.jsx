import React from "react";
import { articlesData } from "../data/localData";
import { Link } from "react-router-dom";

function AllArticlesPage() {
  const newArrticlesData = articlesData.slice(0, 6);
  const saidbarArticels = articlesData.slice(6, 9);

  return (
    <div className="flex items-center h-[300px] justify-between max-w-[1390px] mx-auto">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 w-full justify-center mx-auto ml-7 lg:mt-[55rem] md:mt-[73rem] mt-[156rem]">
        {newArrticlesData.map((item) => (
          <div
            key={item.id}
            className="p-3 flex flex-col gap-5 rounded-2xl shadow-md"
          >
            <Link to={`/${item.title}`}>
              <img
                src={item.imgae}
                alt="/"
                className="lg:w-[390px] w-full h-[200px] rounded-2xl object-cover"
              />
            </Link>
            <p>{item.title}</p>
            <Link
              className="text-sm border-b-[1px] border-gray-300 p-4 text-red-600 font-bold"
              to={`/${item.title}`}
            >
              مشاهده مطلب
            </Link>

            <div className="flex gap-2 items-center text-[12px] text-gray-500 mr-6 p-3">
              <p>آذر ۱۸, ۱۴۰۲</p>
              <p>بدون دیدگاه</p>
            </div>
          </div>
        ))}
      </div>

      <div className=" shadow-md lg:block hidden w-[420px] h-[600px] mt-[34rem]">
        {saidbarArticels?.map((items) => (
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
  );
}

export default AllArticlesPage;
