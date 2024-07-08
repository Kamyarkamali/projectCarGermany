import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/logo.png";

//icon
import { TbMenuDeep } from "react-icons/tb";

//localdataMenu/foldter-data
import { headerMenu } from "../data/localData";

//module
import HamburgerMenu from "../module/HamburgerMenuComponent";
import SearchBar from "../components/SearchBar";
import TitleSlider from "../module/TitleSlider";
import ButtonSlider from "./ButtonSlider";

function TopMenuHeader() {
  const locatinArticle = useLocation();

  // selected items-color=black
  const [selected, setSelected] = useState(headerMenu[0].id);

  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  const clickHandeler = (id) => {
    setSelected(id);
  };

  return (
    <div className="relative max-w-[1400px] 2xl:w-full xl:max-w-[1400px] lg:max-w-[1030px] lg:h-[76px] md:max-w-[900px] sm:max-w-[600px] lg:mt-0 h-[56px] md:mt-3 mx-auto bg-[#E00A0A] rounded-2xl lg:rounded-t-none sm:mt-3 mt-3">
      <div className="flex justify-between items-center">
        {/* hamburgerMenu-icon and component */}
        <div className="flex items-center mt-2 justify-center w-[100px] relative lg:hidden">
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
                item.id === selected ? "text-black font-bold" : "text-white"
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
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              className="lg:w-[171px] w-[134px] mt-3"
            />
          </Link>
        </div>
      </div>

      {locatinArticle.pathname !== "/articles" ||
        (locatinArticle.pathname === "/name" && (
          <div className="flex justify-center">
            <SearchBar />
          </div>
        ))}

      {locatinArticle.pathname !== "/articles" ||
        (locatinArticle.pathname === "/name" && (
          <div>
            <TitleSlider />
          </div>
        ))}

      {locatinArticle.pathname !== "/articles" ||
        (locatinArticle.pathname === "/name" && (
          <div>
            <ButtonSlider />
          </div>
        ))}
    </div>
  );
}

export default TopMenuHeader;
