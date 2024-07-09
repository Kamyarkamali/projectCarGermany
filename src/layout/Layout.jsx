import React from "react";
import Footer from "../layout/Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const isArticleDetailPage = /^\/[^/]+$/.test(location.pathname);

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

      <footer
        className={`${
          location.pathname === "/articles"
            ? "mt-[1rem]"
            : isArticleDetailPage
            ? "mt-[1rem]"
            : "h-fit md:mt-0"
        }`}
      >
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
