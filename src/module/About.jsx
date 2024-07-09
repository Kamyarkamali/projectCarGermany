import React from "react";

import image from "../assets/images/about.webp";
import GalleryCars from "./GalleryCars";

function About() {
  return (
    <div className="flex flex-col max-w-[1200px] mx-auto items-center py-28">
      <div className="mb-[4rem] flex flex-col md:items-start items-center gap-3 w-[300px] md:w-[1200px]">
        <h2 className="text-3xl text-red-600 font-bold">درباره ما</h2>
        <p className="text-[#7A7A7A] text-[18px]">
          خوش آمدید به نام تعمیرگاه نوشته شود تعمیرگاه تخصصی اتومبیل های لوکس
        </p>
      </div>

      <div className="max-w-[1200px]">
        <img
          className="md:w-[800px] h-[300px] min-w-[330px] md:h-[500px] rounded-lg"
          src={image}
          alt="/"
        />
      </div>
      <div className="flex flex-col gap-3 mt-8 w-[340px] leading-8 md:w-[1000px]">
        <p>
          RDK Otomotive یک تعمیرگاه تخصصی و معتبر برای تعمیر و خدمات اتومبیل های
          لوکس است. با سالها تجربه در این صنعت، ما به عنوان یک تیم متخصص در
          تعمیر و نگهداری اتومبیل های لوکس شناخته می‌شویم. هدف ما ارائه خدماتی
          با کیفیت برتر و رضایتمندی کامل مشتریان است.
        </p>

        <div>
          <p>تیم ما:</p>
          <p>
            در RDK Otomotive، ما خدمات گسترده ای برای اتومبیل های لوکس ارائه
            می‌دهیم. از تعمیرات عمومی و نگهداری دوره‌ای تا تعمیرات خاص و با
            کیفیت بالا، همه را در یک مکان یافت خواهید کرد. برخی از خدماتی که
            ارائه می‌دهیم عبارتند از:
          </p>
        </div>

        <p>
          1.تعمیرات مکانیکی: تیم فنی ما توانایی تشخیص و رفع مشکلات مکانیکی
          اتومبیل شما را دارد. از تعمیرات موتور و جعبه دنده تا سیستم تعلیق و
          ترمز، ما همه را پوشش می‌دهیم.
        </p>

        <p>
          2.تعمیرات مکانیکی: تیم فنی ما توانایی تشخیص و رفع مشکلات مکانیکی
          اتومبیل شما را دارد. از تعمیرات موتور و جعبه دنده تا سیستم تعلیق و
          ترمز، ما همه را پوشش می‌دهیم.
        </p>

        <p>
          3.خدمات تعویض و تعمیر لوازم جانبی: در صورت نیاز به تعویض قطعات و لوازم
          جانبی اتومبیل، ما با استفاده از قطعات اصلی و با کیفیت بالا مرتبط با
          مدل اتومبیل شما، خدمات لازم را ارائه خواهیم داد.
        </p>

        <p>
          4.خدمات رنگ و بدنه: با تکنیک‌های پیشرفته رنگ‌آمیزی و تعمیر بدنه، ما
          قادر به بازسازی زیبایی و برقراری استانداردهای اصلی خودرو شما هستیم.
        </p>

        <p>
          5.خدمات شستشو و تمیزکاری: ارائه خدمات شستشو و تمیزکاری حرفه‌ای برای
          اتومبیل شما، با استفاده از مواد و تجهیزات با کیفیت بالا، به منظور حفظ
          ظاهری و براقیت خودروی شما.
        </p>

        <p>
          خدمات تعمیرات ضربه و تصادف: در صورت وقوع حادثه و آسیب به بدنه و
          سیستم‌های خودرو، تیم فنی ما آماده بهبود و بازسازی آن است. خدمات ما
          همواره با رعایت استانداردهای بین‌المللی و با استفاده از تجهیزات
          پیشرفته انجام می‌شوند. ما به مشتریانمان اهمیت می‌دهیم و تلاش می‌کنیم
          تا همیشه خدماتی را ارائه کنیم که توقعات آن‌ها را برآورده کند
        </p>

        <p>
          ما در RDK Otomotive بر این باوریم که تعمیر و نگهداری اتومبیل شما
          نیازمند تخصص و دقت است. بنابراین، با انتخاب ما، شما در دست خدماتی قرار
          خواهید گرفت که بر اساس تجربه و کیفیت برتر ساخته شده است.
        </p>

        <p>
          با تشکر از انتخاب شما، ما منتظر حضور شما در RDK Otomotive هستیم تا
          بهترین خدمات را برای اتومبیل لوکس شما ارائه دهیم.
        </p>
      </div>

      <div>
        <GalleryCars />
      </div>
    </div>
  );
}

export default About;
