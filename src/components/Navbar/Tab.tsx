import { Dispatch, SetStateAction, useRef } from "react";

type Position = {
  left: number;
  width: number;
  height: number;
  top: number;
  opacity: number;
};

export const Tab = ({
  children,
  setPosition,
}: {
  children: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);

  return (
    <>
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref?.current) return;

          const { height, width } = ref.current.getBoundingClientRect();

          setPosition({
            left: ref.current.offsetLeft,
            top: ref.current.offsetTop,
            width,
            height,
            opacity: 1,
          });
        }}
        className="relative z-10 block cursor-pointer px-3 py-1.5 text-xl uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
      >
        <a href="#">{children}</a>
      </li>
    </>
  );
};
