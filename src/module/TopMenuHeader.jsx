import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { TbMenuDeep } from "react-icons/tb";
import { headerMenu } from "../data/localData";
import HamburgerMenu from "../module/HamburgerMenuComponent";
import SearchBar from "../components/SearchBar";
import TitleSlider from "../module/TitleSlider";
import ButtonSlider from "./ButtonSlider";

function TopMenuHeader() {
  const location = useLocation();

  const [selected, setSelected] = useState(headerMenu[0].id);
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  const clickHandler = (id) => {
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
            <ul key={item.id} className="text-white hidden lg:block">
              <Link className="flex items-center" to={item.paths}>
                <li
                  onClick={() => clickHandler(item.id)}
                  className={`text-[16px] cursor-pointer ${
                    item.id === selected ? "text-black font-bold" : "text-white"
                  }`}
                >
                  {item.title}
                </li>
                {item.title === "خدمات" && (
                  <li className="text-[23px] cursor-pointer">{item.icon}</li>
                )}
              </Link>
            </ul>
          ))}
        </div>
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

      {location.pathname === "/" && (
        <>
          <div className="flex justify-center">
            <SearchBar />
          </div>
          <div>
            <TitleSlider />
          </div>
          <div>
            <ButtonSlider />
          </div>
        </>
      )}
    </div>
  );
}

export default TopMenuHeader;
