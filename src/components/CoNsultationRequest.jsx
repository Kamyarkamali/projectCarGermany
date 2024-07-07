import React from "react";

function CoNsultationRequest() {
  return (
    <div className="max-w-[1357px] mx-auto h-fit bg-[#E00A0A] p-9 mt-7 shadow-lg shadow-gray-400 rounded-2xl flex flex-col md:flex-row items-center justify-between lg:w-[1357px] md:w-[800px] sm:w-[600px] w-[360px]">
      <div className="mr-9 leading-[50px]">
        <h1 className="text-white font-bold md:text-[32px] text-[22px] text-center md:text-start mb-3">
          درخواست مشاوره
        </h1>
        <p className="text-white text-[16px] leading-[30px] mb-3">
          برای درخواست مشاوره به صورت رایگان به صورت تلفنی و یا حضوری فرم زیر را
          تکمیل نمایید.
        </p>
      </div>

      {/* <div>2</div> */}

      <div>
        <form className="ml-8 flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <input
              className="bg-white md:w-[237px] w-[330px] p-2 rounded-2xl outline-none"
              type="text"
              placeholder="نام و نام خوانوادگی"
            />
            <input
              className="bg-white md:w-[237px] w-[330px] p-2 rounded-2xl outline-none"
              type="text"
              placeholder="شماره تماس"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="md:w-[484px] w-[330px] bg-white p-2 rounded-2xl text-red-600 font-bold"
            >
              درخواست مشاوره
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CoNsultationRequest;
