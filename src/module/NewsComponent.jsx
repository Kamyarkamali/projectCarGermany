import React, { useState } from "react";

function NewsComponent() {
  const [news, setNews] = useState("");

  const changeHandeler = (e) => {
    setNews(e.target.value);
  };

  const clickHandeler = () => {
    if (news) {
      setNews("");
    }
  };

  return (
    <>
      <div className="mb-[3rem] flex md:flex-row flex-col items-center justify-between md:w-[1390px] w-[360px] mx-auto rounded-2xl shadow-md shadow-gray-700 bg-[#E00A0A] p-14">
        <div className="flex flex-col gap-3">
          <h3 className="md:text-[32px] text-center md:text-start text-white font-bold">
            عضویت در خبرنامه
          </h3>
          <p className="md:text-[16px] mb-8 text-white">
            برای عضویت در خبرنامه و اطلاع از تخفیف ها و کمپین ها شماره خود را
            وارد نمایید.
          </p>
        </div>

        <div className="flex flex-col gap-3 items-center md:items-start">
          <input
            value={news}
            onChange={changeHandeler}
            className="md:w-[502px] w-[330px] p-2 rounded-2xl outline-none text-md"
            type="text"
            placeholder="شماره تماس"
          />
          <button
            onClick={clickHandeler}
            type="submit"
            className="md:w-[502px] w-[330px] bg-white p-2 rounded-2xl"
          >
            عضویت در خبرنامه
          </button>
        </div>
      </div>
      <p className="text-[#828D8B] leading-9 mb-9 md:w-[1300px] md:mr-9 w-[380px] mr-4">
        تعمیرگاه تخصصی خودروهای لوکس RDK Otomotive با بیش از ۱۰ سال سابقه درخشان
        در زمینه تعمیر و نگهداری خودروهای لوکس، بهترین خدمات را به مشتریان خود
        ارائه می‌دهد. این تعمیرگاه با استفاده از تجهیزات پیشرفته و تیمی از
        کارشناسان مجرب، تعمیرات و خدماتی از قبیل تعویض روغن، تعویض لاستیک،
        تعمیرات موتور، تعمیرات بدنه و … را ارائه می‌دهد. همچنین این تعمیرگاه با
        توجه به اهمیت ویژه‌ای که خودروهای لوکس دارند، خدماتی از قبیل تعمیرات
        الکترونیکی، تعمیرات سیستم‌های ترمز و … را نیز به مشتریان خود ارائه
        می‌دهد.
      </p>
      <p className="mb-9 mr-9 text-[#828D8B] w-[300px] md:w-[1200px] leading-7">
        برای اطلاعات بیشتر و یا رزرو وقت با تعمیرگاه تخصصی خودروهای لوکس RDK
        Otomotive تماس بگیرید.
      </p>
    </>
  );
}

export default NewsComponent;
