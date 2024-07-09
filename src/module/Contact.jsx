import React from "react";

import image from "../assets/images/about.webp";

function Contact() {
  return (
    <div className="flex flex-col items-center h-[1300px] justify-center">
      <h1 className="text-center md:w-[600px] md:mb-8 mt-[3rem] mb-6 text-3xl text-red-600 font-bold">
        تماس با ما
      </h1>
      <div className="flex justify-center">
        <img
          className="md:w-[530px] w-[400px] rounded-lg md:h-[360px] h-[300px]"
          src={image}
          alt=""
        />
      </div>

      <div className="flex text-[#BF8F7A] flex-col items-center justify-center mt-9">
        <p className="md:w-[1200px] text-sm md:text-md leading-7 text-[#BF8F7A]">
          از اطلاعات زیر برای تماس با تعمیرگاه تخصصی اتومبیل های لوکس RDK
          Otomotive استفاده کنید. ما همواره آماده پاسخگویی به سوالات شما و ارائه
          خدمات مورد نیاز در زمینه تعمیر و نگهداری اتومبیل های لوکس هستیم.
        </p>
        <div className="flex flex-col justify-start md:w-[1200px]  w-[400px] mt-8">
          <p>آدرس:</p>
          <p>آدرس مورد نظر ثبت شود</p>
        </div>
        <div className="flex justify-start md:w-[1200px] w-[400px] mt-8">
          <p>ایمیل:</p>
          <p>ایمیل مورد نظر ثبت شود</p>
        </div>
        <div className="flex flex-col justify-start md:w-[1200px] w-[400px] mt-8">
          <p>ساعت کاری:</p>
          <p>ساعت های کاری ثبت شود</p>
        </div>
        <p className="mt-5">
          برای درخواست خدمات، پرسش‌ها یا هر گونه درخواست دیگر، می‌توانید از فرم
          تماس زیر استفاده کنید. کارشناسان ما در اسرع وقت به شما پاسخ خواهند داد
        </p>
        <div className="bg-[#E00A0A] shadow-md shadow-gray-500 flex flex-col gap-4 md:flex-row items-center justify-between md:p-7 p-5 mt-9 md:w-[900px] w-[400px] rounded-2xl">
          <h1 className="text-2xl text-white font-bold">تماس با ما</h1>
          <a
            className="text-gray-800 bg-white md:p-3 p-2 rounded-2xl text-sm"
            href="tel:شماره مورد نظر را قرار دهید"
          >
            {" "}
            شماره مورد نظر قرار گرفته شود{" "}
          </a>
        </div>
        <p className="mt-[2rem] md:w-[900px] w-[450px] leading-8">
          ما در نام تعمیرگاه ذکر شود به ارتباط با مشتریانمان بسیار اهمیت می دهیم
          و به همین دلیل در تمامی ساعات کاری آماده پاسخگویی به سئالات شما هستیم,
          با تیم ما تماس بگیرید و به ما اجازه دهید اتئمئبیل لوکس شمارا با تخصص و
          دقتی که لایق آن هاست,تعمیر و نگهداری کنیم.
        </p>
        <p className="text-right md:w-[900px] mt-4">با تشکر از انتخاب شما</p>
      </div>
    </div>
  );
}

export default Contact;
