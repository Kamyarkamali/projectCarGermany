import React from "react";

//component-module
import TopMenuHeader from "../module/TopMenuHeader";
import HeroSlider from "../components/HeroSlider";
import { useLocation } from "react-router-dom";

function Header() {
  const locatinArticle = useLocation();

  return (
    <div>
      <div className="relative">
        {locatinArticle.pathname === "/articles" ||
          locatinArticle.pathname === "/:name" ||
          (locatinArticle.pathname === "/" && <HeroSlider />)}
        <div className="absolute z-50 top-0 right-0 left-0">
          <TopMenuHeader />
        </div>
      </div>
    </div>
  );
}

export default Header;
