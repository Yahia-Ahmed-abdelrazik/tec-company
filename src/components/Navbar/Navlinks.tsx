import { useState } from "react";
import { Tab } from "./Tab";
import { Cursor } from "./Cursor";
//
type Position = {
  left: number;
  width: number;
  opacity: number;
};

export const Navlinks = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-sticky"
    >
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex w-fit  border-black bg-white"
      >
        <Tab setPosition={setPosition}>الرئيسية</Tab>
        <Tab setPosition={setPosition}>من نحن</Tab>
        <Tab setPosition={setPosition}>خدماتنا</Tab>
        <Tab setPosition={setPosition}>المدونة</Tab>
        <Tab setPosition={setPosition}>تواصل معنا</Tab>

        <Cursor position={position} />
      </ul>
    </div>
  );
};
