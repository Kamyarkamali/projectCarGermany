import React from "react";
import image1 from "../assets/articles/1.webp";
import image2 from "../assets/articles/2.webp";
import { Link } from "react-router-dom";

function Articles1() {
  return (
    <div className="max-w-[1400px] mx-auto mt-[7rem]">
      <h1 className="text-center font-bold text-[32px]">RDK Otomotive</h1>
      {/* image articles1 */}
      <div className="flex items-center justify-center mt-9 gap-5 flex-nowrap">
        <div className="relative w-[calc(50%-10px)]">
          <Link to={"/articles"}>
            <img
              className="w-full h-[100px] md:h-[250px] rounded-2xl object-cover"
              src={image1}
              alt="/"
            />
          </Link>
          <div className="absolute w-full h-full top-0 left-0 rounded-2xl shadow-lg shadow-gray-600 bg-black/40"></div>
          <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:text-xl font-bold">
            <span>موتور خودرو</span>
          </div>
        </div>
        <div className="relative w-[calc(50%-10px)]">
          <Link to={"/articles"}>
            <img
              className="w-full h-[100px] md:h-[250px] rounded-2xl object-cover"
              src={image2}
              alt="/"
            />
          </Link>
          <div className="absolute w-full h-full top-0 left-0 rounded-2xl shadow-lg shadow-gray-600 bg-black/40"></div>
          <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:text-xl font-bold">
            <span>پولیش خودرو</span>
          </div>
        </div>
      </div>

      {/*description */}
      <div className="mt-[3rem] md:mr-8 mr-2 flex flex-col md:items-start items-center">
        <h2 className="text-[#999999] font-bold">
          پشتیبانی و پاسخگویی ۲۴ ساعته و تمام وقت تعمیرگاه تخصصی خودروهای لوکس
          RDK Otomotive
        </h2>
        <p className="mt-[1rem] text-[#7D7D7D] text-right leading-7">
          تیم پشتیبانی و پاسخگویی تعمیرگاه تخصصی خودروهای لوکس RDK Otomotive، در
          تمامی ساعات شبانه‌روز و در تمامی روزهای هفته، آماده پاسخگویی به سوالات
          و نیازهای مشتریان محترم می‌باشد. این تیم با داشتن دانش فنی و تجربه
          کافی، به مشتریان خود در زمینه‌هایی از قبیل تعمیرات و خدمات خودرو،
          مشاوره و راهنمایی، پشتیبانی فنی و … کمک می‌کند
        </p>
        <p className="mt-[1rem] text-[#7D7D7D] leading-8">
          برای اطلاعات بیشتر و یا رزرو وقت با تعمیرگاه تخصصی خودروهای لوکس RDK
          Otomotive از طریق فرم زیر و یا شماره های تماس ما با ما در ارتباط
          باشید.
        </p>
      </div>
    </div>
  );
}

export default Articles1;
