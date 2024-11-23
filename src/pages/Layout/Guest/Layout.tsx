import { FunctionComponent } from "react";
import menue_icon from "@/assets/imgs/menu-icon.svg";

const Layout: FunctionComponent = () => {
  return (
    <>
      {/* navbar */}

      <nav className=" bg-white   fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-20">
          {/* logo */}
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Logo
            </span>
          </a>
          {/* toggle */}

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-900 rounded-lg md:hidden hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900"
          >
            <img src={menue_icon} alt="menu icon button" />
          </button>

          {/* links */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-zinc-900 rounded md:bg-transparent md:text-zinc-900 md:p-0 "
                >
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-zinc-900 rounded md:bg-transparent md:text-zinc-900 md:p-0 "
                >
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-zinc-900 rounded md:bg-transparent md:text-zinc-900 md:p-0 "
                >
                  خدماتنا
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-zinc-900 rounded md:bg-transparent md:text-zinc-900 md:p-0 "
                >
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Layout;
