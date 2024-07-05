import React from "react";

//component-module
import TopMenuHeader from "../module/TopMenuHeader";
import HeroSlider from "../components/HeroSlider";

function Header() {
  return (
    <div>
      <div className="relative">
        <HeroSlider />
        <div className="absolute top-0 right-0 left-0">
          <TopMenuHeader />
        </div>
      </div>
    </div>
  );
}

export default Header;
