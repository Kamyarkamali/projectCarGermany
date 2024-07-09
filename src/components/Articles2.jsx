import React from "react";
import image3 from "../assets/articles/3.webp";
import image4 from "../assets/articles/4.webp";

function Articles2() {
  return (
    <div className="max-w-[1400px] mx-auto mt-[7rem]">
      {/* image articles1 */}
      <div className="flex items-center justify-center mt-9 gap-5 flex-wrap md:flex-nowrap">
        <div className="relative w-[calc(50%-10px)] md:w-1/2">
          <img
            className="w-full h-[100px] md:h-[250px] rounded-2xl object-cover"
            src={image3}
            alt="/"
          />
          <div className="absolute w-full h-full top-0 left-0 rounded-2xl shadow-lg shadow-gray-600 bg-black/40"></div>
          <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl font-bold">
            <span>گیربکس خودرو</span>
          </div>
        </div>
        <div className="relative w-[calc(50%-10px)] md:w-1/2">
          <img
            className="w-full h-[100px] md:h-[250px] rounded-2xl object-cover"
            src={image4}
            alt="/"
          />
          <div className="absolute w-full h-full top-0 left-0 rounded-2xl shadow-lg shadow-gray-600 bg-black/40"></div>
          <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-3xl font-bold">
            <span>برق خودرو</span>
          </div>
        </div>
      </div>

      {/*description */}
      <div className="md:mt-[3rem] mt-[1rem] md:mr-8 mr-2 flex flex-col md:items-start items-center">
        <p className="mt-[1rem] text-[#7D7D7D] text-right leading-7">
          خدمات خودرو و تعمیر خودروهای خارجی از جمله مهم‌ترین نیازهای هر فردی
          است که به خودروی خود اهمیت می‌دهد. در تعمیرگاه تخصصی خودروهای خارجی،
          تیمی از کارشناسان مجرب با استفاده از تجهیزات پیشرفته، خدماتی از قبیل
          تعویض روغن، تعویض لاستیک، تعمیرات موتور، تعمیرات بدنه و … را ارائه
          می‌دهند. همچنین این تعمیرگاه با توجه به اهمیت ویژه‌ای که خودروهای
          خارجی دارند، خدماتی از قبیل تعمیرات الکترونیکی، تعمیرات سیستم‌های ترمز
          و … را نیز به مشتریان خود ارائه می‌دهد.
        </p>
      </div>
    </div>
  );
}

export default Articles2;
