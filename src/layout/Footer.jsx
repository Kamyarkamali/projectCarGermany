import React from "react";

//icons-sochialMedi
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

function Footer() {
  return (
    <div className="max-w-[1417px] h-[291px] bg-[#E00A0A] rounded-t-2xl">
      <div className="border-b-[6px] flex items-center justify-evenly max-w-[1417px] h-[78px]">
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

        {/* <div>2</div> */}

        <div className="flex items-center gap-1 text-white text-[13px]">
          <p>آدرس:</p>
          <p>آدرس مورد نظر قرار داده شود</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
