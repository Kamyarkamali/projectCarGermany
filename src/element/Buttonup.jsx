import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

function Buttonup() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="cursor-pointer bg-red-400 p-3 rounded-full">
          <FaArrowUp onClick={scrollToTop} size={23} color="white" />
        </div>
      )}
    </>
  );
}

export default Buttonup;
