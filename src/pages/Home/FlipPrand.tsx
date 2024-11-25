import { motion } from "framer-motion";
const FlipPrand = ({ children }: { children: string | JSX.Element }) => {
  return (
    <motion.h1
      initial="initial"
      whileHover="hover"
      className="flex  font-bold text-5xl md:text-6xl text-center items-start text-zinc-900 text-balance relative overflow-hidden "
    >
      <motion.div
        layout
        variants={{
          initial: { y: 0, transition: { duration: 0.75, type: "spring" } },
          hover: {
            y: "-100%",
            transition: { duration: 0.75, type: "spring" },
          },
        }}
        className="font-serif pb-1"
      >
        {children}
      </motion.div>
      <motion.div
        layout
        variants={{
          initial: {
            y: "100%",
            transition: { duration: 0.75, type: "spring" },
          },
          hover: { y: 0, transition: { duration: 0.75, type: "spring" } },
        }}
        className="font-serif absolute inset-0"
      >
        {children}
      </motion.div>
    </motion.h1>
  );
};

export default FlipPrand;
