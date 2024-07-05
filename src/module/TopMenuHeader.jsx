import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

//icon
import { TbMenuDeep } from "react-icons/tb";

//localdataMenu/foldter-data
import { headerMenu } from "../data/localData";

//module
import HamburgerMenu from "../module/HamburgerMenuComponent";

function TopMenuHeader() {
  // selected items-color=black
  const [selected, setSelected] = useState(headerMenu[0].id);

  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  const clickHandeler = (id) => {
    setSelected(id);
  };

  return (
    <div className="max-w-[1402px] lg:h-[76px] xl:w-[1400px] lg:w-[1040px] lg:mt-0 md:w-[850px] h-[56px] md:mt-3  mx-auto bg-[#E00A0A] rounded-2xl lg:rounded-t-none sm:w-[630px] sm:mt-3 w-[370px] mt-3">
      <div className="flex justify-between items-center">
        {/* hamburgerMenu-icon and component */}
        <div className="flex items-center mt-2 justify-center w-[100px] relative md:hidden">
          <TbMenuDeep
            onClick={() => setOpenHamburgerMenu(true)}
            size={36}
            color="white"
            className="cursor-pointer"
          />
          <div
            className={`transition-all fixed duration-500 ease-in top-[-1.3rem] ${
              openHamburgerMenu ? "right-[-0.7rem]" : "right-[-400%]"
            } `}
          >
            <HamburgerMenu
              openHamburgerMenu={openHamburgerMenu}
              setOpenHamburgerMenu={setOpenHamburgerMenu}
            />
          </div>
        </div>

        <div className="mr-14 mt-6 flex items-center gap-11">
          {headerMenu.map((item) => (
            <ul
              key={item.id}
              className={`text-white hidden lg:block ${
                item.id === selected ? "text-gray-800 font-bold" : "text-white"
              }`}
            >
              <Link className="flex items-center" to={item.paths}>
                <li
                  onClick={() => clickHandeler(item.id)}
                  className="text-[16px]"
                >
                  {item.title}
                </li>
                <li className="text-[23px] cursor-pointer">
                  {item.title === "خدمات" ? item.icon : null}
                </li>
              </Link>
            </ul>
          ))}
        </div>

        {/* <div>center</div> */}

        <div className="lg:ml-14">
          <img src={logo} alt="logo" className="lg:w-[171px] w-[134px] mt-3" />
        </div>
      </div>
    </div>
  );
}

export default TopMenuHeader;
