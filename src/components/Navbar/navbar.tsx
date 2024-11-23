import { HamburgerButton } from "./HamburgerButton ";
import { Navlinks } from "./Navlinks";

export const Navbar = () => {
  return (
    <nav className=" bg-white   fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-12">
        {/* logo */}
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Logo
          </span>
        </a>
        {/* toggle */}

        <HamburgerButton />

        {/* navlinks */}
        <Navlinks />
      </div>
    </nav>
  );
};
