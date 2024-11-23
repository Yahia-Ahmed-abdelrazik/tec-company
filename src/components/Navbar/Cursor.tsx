import { motion } from "framer-motion";
type Position = {
  left: number;
  width: number;
  opacity: number;
};
export const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
