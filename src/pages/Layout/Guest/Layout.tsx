import { FunctionComponent } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import Home from "@/pages/Home/Home";

import "@/index.css";
import body_bg from "@/assets/imgs/body-bg.png";
const Layout: FunctionComponent = () => {
  return (
    <>
      <Navbar />
      {/* content */}
      <div className="content">
        {/*  body overlay  */}
        <div
          className="fixed inset-0 z-10 pointer-events-none opacity-100 bg-top-right bg-repeat"
          style={{ backgroundImage: `url(${body_bg})` }}
        >
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
