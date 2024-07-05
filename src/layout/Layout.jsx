import React from "react";

import Footer from "../layout/Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="min-h-[1000px]">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
