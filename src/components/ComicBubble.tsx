import React from 'react';
import { motion } from 'framer-motion';

interface ComicBubbleProps {
  text: string;
  className?: string;
  delay?: number;
  variant?: 'default' | 'subtle';
}

const ComicBubble: React.FC<ComicBubbleProps> = ({ 
  text, 
  className = '', 
  delay = 0,
  variant = 'default'
}) => {
  const styles = {
    default: {
      wrapper: "bg-white border-4 border-black p-3 rounded-xl shadow-comic",
      text: "text-black font-bold text-sm md:text-base",
      bubble: "absolute -bottom-2 -left-1 w-3 h-3 bg-white border-4 border-black rounded-full"
    },
    subtle: {
      wrapper: "bg-[#ffc247]/90 p-2 rounded-lg",
      text: "text-[#00237a] font-bold text-sm md:text-base",
      bubble: "hidden"
    }
  }[variant];

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay 
      }}
      className={`relative z-10 ${className}`}
    >
      <div className={styles.wrapper}>
        <span className={styles.text}>{text}</span>
        <div className={styles.bubble} />
      </div>
    </motion.div>
  );
};

export default ComicBubble;