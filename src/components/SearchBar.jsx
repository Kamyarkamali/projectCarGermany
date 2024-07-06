import React from "react";

//icon
import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="w-full md:mt-[4rem] mt-[2rem] xl:w-[1000px] md:w-[700px] sm:w-[300px] w-[280px] flex justify-between h-[40px] rounded-full shadow-md shadow-gray-500 bg-white ">
      <input
        type="text"
        placeholder="جستوجوکنید"
        className="rounded-full w-[917px] h-[40px] outline-none placeholder:text-start placeholder:text-gray-800 px-2"
      />
      <button>
        <IoSearch size={20} className="ml-3" />
      </button>
    </div>
  );
}

export default SearchBar;
