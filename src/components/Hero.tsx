import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import ComicBubble from './ComicBubble';
import CountdownTimer from './CountdownTimer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const { scrollY } = useScrollAnimation();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-[#00237a]"
        style={{ y: scrollY * 0.5 }}
      >
        <div className="absolute inset-0 halftone opacity-20"></div>
        <div className="absolute inset-0 action-lines opacity-10"></div>
      </motion.div>
      
      {/* Comic-style decorative elements */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: scrollY * 0.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Dynamic background shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: Math.random() * 360 }}
            animate={{ 
              scale: 1,
              rotate: 0,
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: i * 0.2
            }}
            className={`absolute ${
              i % 2 === 0 ? 'bg-[#ffc247]' : 'bg-[#ff1f53]'
            } opacity-20 transform`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              borderRadius: i % 2 === 0 ? '50%' : '0'
            }}
          />
        ))}
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-4 mt-10">
        <div className="text-center">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-block mb-8 relative"
          >
            {/* Single subtle comic bubble */}
            <ComicBubble 
              text="TECH FEST 2024!" 
              className="absolute -top-12 right-0 transform rotate-3"
              variant="subtle"
            />
            
            <h1 className="text-7xl md:text-8xl font-comic text-[#ffc247] mb-6 relative">
              CATALYSIS 2024
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-[#ff1f53] opacity-20 rounded-full"
              />
            </h1>
          </motion.div>

          <motion.p
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-[#ffe0e0] mb-12 max-w-3xl mx-auto font-comic"
          >
            The Ultimate Technical Showdown by Genesis Club
            <br />
            <span className="text-[#ffc247]">ISE Department</span>
          </motion.p>

          <div className="mb-12">
            <CountdownTimer />
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <div className="text-[#ffe0e0] text-2xl font-comic">
              <span className="font-bold">March 7-8, 2024</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#ff1f53] text-white rounded-xl border-4 border-black shadow-comic text-xl font-comic flex items-center group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="w-6 h-6 mr-2" />
                REGISTER NOW!
                <ChevronRight className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-[#ffc247]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;