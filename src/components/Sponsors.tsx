import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

const Sponsors = () => {
  const sponsors = {
    platinum: [
      {
        name: "TechCorp",
        logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80"
      }
    ],
    gold: [
      {
        name: "CodeLabs",
        logo: "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?w=200&h=100&fit=crop&q=80"
      },
      {
        name: "InnovateX",
        logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=100&fit=crop&q=80"
      }
    ],
    silver: [
      {
        name: "DevHub",
        logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=100&fit=crop&q=80"
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" id="sponsors">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#00237a]">
        <div className="absolute inset-0 opacity-10 action-lines"></div>
        <div className="absolute inset-0 opacity-5 halftone"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="relative mb-20 text-center"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <span className="inline-block bg-[#ff1f53] text-white px-6 py-2 rounded-full text-lg mb-4 font-bold">
            Thank You!
          </span>
          <h2 className="text-6xl font-comic text-[#ffc247] mb-4">
            Our Super Sponsors
          </h2>
          <p className="text-[#ffe0e0] text-xl max-w-2xl mx-auto">
            Meet the incredible organizations powering our tech extravaganza!
          </p>
        </motion.div>

        {/* Platinum Tier */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-3xl font-comic text-center mb-12 relative"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <span className="inline-block bg-[#ff1f53] text-white px-6 py-3 rounded-xl border-4 border-black shadow-comic transform -rotate-2">
              <Sparkles className="inline-block w-6 h-6 mr-2" />
              Platinum Powerhouses!
            </span>
          </motion.h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.platinum.map((sponsor, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-[#ffc247] transform rotate-3 rounded-xl"></div>
                <div className="relative bg-white rounded-xl border-4 border-black p-6 transform hover:-rotate-2 transition-transform duration-300 shadow-comic">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h3 className="text-[#00237a] font-bold text-xl text-center">{sponsor.name}</h3>
                  <Star className="absolute -top-4 -right-4 w-8 h-8 text-[#ff1f53] transform rotate-12" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Gold Tier */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-3xl font-comic text-center mb-12"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <span className="inline-block bg-[#ffc247] text-[#00237a] px-6 py-3 rounded-xl border-4 border-black shadow-comic transform rotate-2">
              Golden Guardians!
            </span>
          </motion.h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-[#ffc247] transform rotate-3 rounded-xl"></div>
                <div className="relative bg-white rounded-xl border-4 border-black p-6 transform hover:-rotate-2 transition-transform duration-300 shadow-comic">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h3 className="text-[#00237a] font-bold text-xl text-center">{sponsor.name}</h3>
                  <Star className="absolute -top-4 -right-4 w-8 h-8 text-[#ff1f53] transform rotate-12" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Silver Tier */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-3xl font-comic text-center mb-12"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <span className="inline-block bg-gray-200 text-[#00237a] px-6 py-3 rounded-xl border-4 border-black shadow-comic transform -rotate-1">
              Silver Supporters!
            </span>
          </motion.h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsors.silver.map((sponsor, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-[#ffc247] transform rotate-3 rounded-xl"></div>
                <div className="relative bg-white rounded-xl border-4 border-black p-6 transform hover:-rotate-2 transition-transform duration-300 shadow-comic">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="w-full h-32 object-contain mb-4"
                  />
                  <h3 className="text-[#00237a] font-bold text-xl text-center">{sponsor.name}</h3>
                  <Star className="absolute -top-4 -right-4 w-8 h-8 text-[#ff1f53] transform rotate-12" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;