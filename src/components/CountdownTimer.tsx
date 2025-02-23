import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-03-07T00:00:00');

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex space-x-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          className="flex flex-col items-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          <div className="bg-[#ff1f53] w-20 h-20 rounded-lg border-4 border-black shadow-comic flex items-center justify-center transform -rotate-2">
            <span className="text-3xl font-bold text-white">{value}</span>
          </div>
          <span className="mt-2 text-[#ffe0e0] font-bold uppercase">{unit}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;