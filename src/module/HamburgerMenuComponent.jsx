import React from "react";

//icon close
import { MdOutlineClose } from "react-icons/md";
import { headerMenu } from "../data/localData";
import { Link } from "react-router-dom";

function HamburgerMenuComponent({ openHamburgerMenu, setOpenHamburgerMenu }) {
  return (
    <div className=" bg-black/80 text-white w-[300px] h-screen">
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
            <Link key={item.id}>
              <li
                onClick={() => setOpenHamburgerMenu(false)}
                className="mr-4 mb-7 text-[18px]"
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* <div>left</div> */}
    </div>
  );
}

export default HamburgerMenuComponent;
