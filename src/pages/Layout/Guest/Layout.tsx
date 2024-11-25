import { FunctionComponent } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import Home from "@/pages/Home/Home";

import "@/index.css";
import body_bg from "@/assets/imgs/body-bg.png";
import AboutUs from "@/sections/AboutUs/AboutUS";
const Layout: FunctionComponent = () => {
  return (
    <>
      <Navbar />
      {/* content */}
      <div className="content">
        {/*  body overlay  */}
        <div className="fixed inset-0 z-10 p opacity-100 bg-top-right bg-repeat pointer-events-none">
          <div
            className="inset-0 ointer-events-none"
            style={{ backgroundImage: `url(${body_bg})` }}
          ></div>
        </div>
        <Home />
        {/* <div className="h-[200px] bg-black"></div> */}
        <AboutUs />
      </div>
    </>
  );
};

export default Layout;
