import React, { useState, useEffect } from "react";
import { articlesData } from "../data/localData";
import { Link } from "react-router-dom";

// ایجاد داده‌های تصادفی یک بار
const getRandomData = () => {
  return articlesData.sort(() => 0.5 - Math.random()).slice(0, 3);
};

const randomData = getRandomData();

function NewArticelse() {
  const [data] = useState(randomData);

  return (
    <div className="grid lg:grid-cols-3 justify-center mt-[3rem] gap-4 items-center">
      {data.map((item) => (
        <div key={item.id} className="p-3 shadow-md rounded-2xl">
          <Link to={`/${item.title}`}>
            <img
              className="w-[420px] h-[300px] rounded-t-2xl"
              src={item.imgae}
              alt="imagecar"
            />
          </Link>
          <p>{item?.title}</p>
          <Link
            className="text-red-600 text-[13px] font-bold"
            to={`/${item.title}`}
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
  );
}

export default NewArticelse;
