import React, { useContext, useState } from "react";

//icon close
import { MdOutlineClose } from "react-icons/md";
import { headerMenu, service2, services } from "../data/localData";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { context } from "../context/ContextProvider";

function HamburgerMenuComponent({ setOpenHamburgerMenu }) {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openServices2, setOpenServices2] = useState(false);

  const handleMenuClick = (title) => {
    if (title === "مقالات") {
      setOpen1((prevOpen1) => !prevOpen1);
      setOpen2((prevOpen2) => prevOpen2); // Toggle open2 based on the previous state of open1
    } else if (
      title !== "خدمات" &&
      title !== "خدمات خودرو" &&
      title !== "خدمات دیتل خودرو"
    ) {
      setOpenHamburgerMenu(false);
    }
  };

  return (
    <div className=" bg-black/80 overflow-y-auto scrollbar-thin text-white w-[300px] h-screen">
      <div className="flex justify-end">
        <MdOutlineClose
          onClick={() => setOpenHamburgerMenu(false)}
          size={40}
          className="mt-9 ml-3 cursor-pointer"
        />
      </div>

      <div>
        <ul className="mt-3">
          {headerMenu.map((item) => (
            <Link to={item.paths} key={item.id}>
              <li
                onClick={() => handleMenuClick(item.title)}
                className="mr-4 mb-7 text-[18px]"
              >
                {item.title === "خدمات" ? (
                  <div className={`flex flex-col items-start justify-between`}>
                    <li
                      className="flex items-center justify-between w-full"
                      onClick={() => setOpenServices((prev) => !prev)}
                    >
                      {item.title}
                      <IoIosArrowDown size={22} className="ml-4" />
                    </li>
                    <li
                      onClick={() => setOpen1((prev) => !prev)}
                      className={`${
                        openServices
                          ? "block flex  transition-all duration-200 ease-in justify-between w-full mt-3"
                          : "hidden"
                      } text-sm ml-5`}
                    >
                      خدمات خودرو
                      <IoIosArrowDown
                        size={21}
                        className={`ml-4 ${!open1 ? "rotate-0" : "rotate-180"}`}
                      />
                    </li>
                    {services.map((item) => (
                      <Link
                        className={`${open1 ? "block" : "hidden"}`}
                        key={item.id}
                        to={item.path}
                      >
                        <li
                          onClick={() => setOpenHamburgerMenu(false)}
                          className="text-sm mb-4 py-3"
                          key={item.id}
                        >
                          {item.title}
                        </li>
                      </Link>
                    ))}

                    <li
                      onClick={() => setOpen2((prev) => !prev)}
                      className={`${
                        openServices
                          ? "block flex  transition-all duration-200 ease-in justify-between w-full mt-3"
                          : "hidden"
                      } text-sm ml-5`}
                    >
                      خدمات دیتل خودرو
                      <IoIosArrowDown
                        size={21}
                        className={`ml-4 ${!open2 ? "rotate-0" : "rotate-180"}`}
                      />
                    </li>
                    {service2.map((item) => (
                      <Link
                        className={`${open2 ? "block" : "hidden"}`}
                        key={item.id}
                        to={item.paths}
                      >
                        <li
                          onClick={() => setOpenHamburgerMenu(false)}
                          className="text-sm py-3"
                          key={item.id}
                        >
                          {item.title}
                        </li>
                      </Link>
                    ))}
                  </div>
                ) : (
                  item.title
                )}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenuComponent;
