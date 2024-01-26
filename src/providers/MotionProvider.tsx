"use client";
import { motion } from "framer-motion";

const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div 
    initial={{ translateY: -20, opacity: 0 }}
    animate={{ translateY : 0 , opacity : 1 }}
    transition={{duration : .6}}
    >
      {children}
    </motion.div>
  );
};

export default MotionProvider;
