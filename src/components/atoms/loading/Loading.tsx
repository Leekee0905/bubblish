import { motion } from "motion/react";
import { useState, useEffect } from "react";

const LOADING_TEXT = ["로", "딩", "중", ".", ".", "."];
const Loading = () => {
  const [jumpIndex, setJumpIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setJumpIndex((prev) => (prev + 1) % LOADING_TEXT.length);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-2 text-4xl font-bold">
        {LOADING_TEXT.map((char, index) => (
          <motion.span
            key={char + index}
            animate={jumpIndex === index ? { y: [-10, -30, 0] } : {}}
            transition={{
              duration: 0.4,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
