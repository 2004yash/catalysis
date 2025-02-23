import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface EventCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  time: string;
  index: number;
}

const EventCard = ({ title, description, icon, date, time, index }: EventCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-[#ffc247] transform rotate-3 rounded-xl"></div>
      <div className="relative bg-white rounded-xl border-4 border-black p-6 transform hover:-rotate-2 transition-transform duration-300 shadow-comic">
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#ff1f53] rounded-full border-4 border-black flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
          <div className="text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        <h3 className="text-2xl font-comic text-[#00237a] mb-3 mt-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        
        <div className="flex items-center justify-between text-sm mt-4 pt-4 border-t-2 border-dashed border-gray-300">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-[#ffc247] text-[#00237a] rounded-full font-bold">
              {date}
            </span>
          </div>
          <span className="font-bold text-[#ff1f53]">{time}</span>
        </div>

        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#0047fa] transform rotate-12"></div>
        <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-[#ffc247] transform -rotate-12"></div>
      </div>
    </motion.div>
  );
};

export default EventCard;