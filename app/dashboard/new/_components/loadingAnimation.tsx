import React from "react";
import { motion } from "framer-motion";

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-24">
      <motion.div
        className="w-4 h-4 bg-primary rounded-full mr-1"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="w-4 h-4 bg-primary rounded-full mr-1"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
      <motion.div
        className="w-4 h-4 bg-primary rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: 0.4,
        }}
      />
    </div>
  );
};

export default LoadingAnimation;
