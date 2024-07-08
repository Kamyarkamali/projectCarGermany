import React from "react";

import Footer from "../layout/Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div>
      <header>
        <Header />
      </header>

      <main
        className={`${
          location.pathname === "/articles"
            ? "xl:h-[1100px] md:h-[1500px] lg:h-[1100px] h-[2800px]"
            : "h-fit"
        }`}
      >
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
