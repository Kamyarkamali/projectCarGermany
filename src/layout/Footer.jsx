import React from "react";

//icons-sochialMedi
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

//imagelogo
import logo from "../assets/images/logo3.png";

function Footer() {
  return (
    <div className="max-w-[1417px] lg:h-[291px] bg-[#E00A0A] rounded-t-2xl">
      <div className="border-b-[6px] flex flex-col md:flex-row items-center justify-evenly max-w-[1417px] h-[78px]">
        {/* sochial medi icons */}
        <div className="text-white flex justify-between items-center w-[300px]">
          <div className="cursor-pointer">
            <a
              className="flex items-center gap-1"
              href="url اینستاگرام قرار داده شود"
              target="_blank"
            >
              <IoLogoInstagram size={20} />
              <p>اینستاگرام</p>
            </a>
          </div>

          <div className="cursor-pointer">
            <a
              className="flex gap-1 items-center"
              href="آدرس تلگرام قرار داده شود"
              target="_blank"
            >
              <FaTelegramPlane size={20} />
              <p>تلگرام</p>
            </a>
          </div>

          <div className="cursor-pointer">
            <a
              className="flex items-center gap-1"
              href="آدرس واتسس اپ گذاشته شود"
              target="_blank"
            >
              <FaWhatsapp size={20} />
              <p>واتس اپ</p>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-1 text-white text-[13px]">
          <p>آدرس:</p>
          <p>آدرس مورد نظر قرار داده شود</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly items-center p-5">
        <div className="flex flex-col lg:flex-row items-center lg:gap-[8rem] gap-[4rem]">
          <div className="text-[12px] font-bold flex flex-col gap-4 items-start text-white">
            <span>دسترسی اسان</span>
            <span>وبلاگ</span>
            <span>خدمات ما</span>
            <span>درباره ما</span>
            <span>مسیریابی</span>
          </div>

          <div className="text-[12px] font-bold flex flex-col gap-4 items-start text-white">
            <span>تعمیرات تخصصی</span>
            <span>BENZ</span>
            <span>BMW</span>
            <span>Rangerover</span>
            <span>Porsche</span>
          </div>

          <div className="text-[12px] font-bold flex flex-col gap-4 lg:items-start items-center text-white">
            <span>ارتباط با ما:</span>
            <span>نام مورد نظر</span>
            <span>شماره تماس نوشته شود</span>
          </div>
        </div>

        <div>
          <img src={logo} alt="" />
          <div className="text-white flex flex-col  items-center mt-3">
            <p>تعمیرگاه تخصصی اتوموبیل های آلمانی</p>
            <a href="mailto:ایمیل نوشته شود"> ایمیل نوشته شود </a>
            <div className="flex  items-center gap-2">
              <IoLogoInstagram />
              <FaTelegramPlane />
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
