import { useState } from "react";
import { Tab } from "./Tab";
import { Cursor } from "./Cursor";
//
type Position = {
  left: number;
  width: number;
  height: number;
  top: number;
  opacity: number;
};
export const Navlinks = ({ activeToggle }: { activeToggle: boolean }) => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    height: 0,
    top: 0,
    opacity: 0,
  });

  return (
    <>
      <div
        className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          className="relative mx-auto flex w-fit  bg-white"
        >
          <Tab setPosition={setPosition}>الرئيسية</Tab>
          <Tab setPosition={setPosition}>من نحن</Tab>
          <Tab setPosition={setPosition}>خدماتنا</Tab>
          <Tab setPosition={setPosition}>المدونة</Tab>
          <Tab setPosition={setPosition}>تواصل معنا</Tab>

          <Cursor position={position} />
        </ul>
      </div>
      {/* mobile */}
      {activeToggle && (
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          className=" absolute right-0 top-[100%] flex flex-col  w-full gap-y-4  py-5 px-6 -ml-6 bg-white animate-slide-from-right transition-all duration-500 "
        >
          <Tab setPosition={setPosition}>الرئيسية</Tab>
          <Tab setPosition={setPosition}>من نحن</Tab>
          <Tab setPosition={setPosition}>خدماتنا</Tab>
          <Tab setPosition={setPosition}>المدونة</Tab>
          <Tab setPosition={setPosition}>تواصل معنا</Tab>

          <Cursor position={position} />
        </ul>
      )}
    </>
  );
};
