import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
