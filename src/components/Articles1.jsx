import React from "react";

import image1 from "../assets/articles/1.webp";
import image2 from "../assets/articles/2.webp";

function Articles1() {
  return (
    <div className="max-w-[1400px] mx-auto mt-[7rem]">
      <h1 className="text-center font-bold text-[32px]">RDK Otomotive</h1>
      {/* image articles1 */}
      <div className="flex lg:flex-row flex-col items-center justify-center mt-9 gap-5">
        <div className="relative w-[360px] md:w-[658px]">
          <img
            className="w-[658px] rounded-2xl h-[250px] object-cover "
            src={image1}
            alt="/"
          />
          <div className="absolute w-full rounded-2xl shadow-lg shadow-gray-600 bg-black/40 top-0 h-full">
            .
          </div>
          <div className="absolute text-white top-[7rem] right-[3rem] text-3xl font-bold">
            <span>موتور خودرو</span>
          </div>
        </div>
        <div className="relative w-[360px] md:w-[658px]">
          <img
            className="w-[658px] rounded-2xl h-[250px] object-cover"
            src={image2}
            alt="/"
          />
          <div className="absolute w-full rounded-2xl shadow-lg shadow-gray-600 bg-black/40 top-0 h-full">
            .
          </div>
          <div className="absolute text-white top-[7rem] right-[3rem] text-3xl font-bold">
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
