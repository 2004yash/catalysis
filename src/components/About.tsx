import React from 'react';
import { Zap, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ComicBubble from './ComicBubble';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-[#00237a]" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge tech challenges"
    },
    {
      icon: <Star className="w-8 h-8 text-[#00237a]" />,
      title: "Excellence",
      description: "Showcasing the best technical talent"
    },
    {
      icon: <Users className="w-8 h-8 text-[#00237a]" />,
      title: "Community",
      description: "Building connections in tech community"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Comic-style background elements */}
      <div className="absolute inset-0 bg-[#00237a]">
        <div className="absolute inset-0 opacity-10 action-lines"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16 relative">
            <ComicBubble 
              text="LEVEL UP!" 
              className="absolute -top-16 -right-8 transform rotate-12"
            />
            <h2 className="text-5xl font-comic text-[#ffc247] mb-6">
              The Genesis Story
            </h2>
            <p className="text-[#ffe0e0] text-xl leading-relaxed">
              Catalysis is the flagship technical extravaganza brought to you by Genesis, 
              the technical club of the Information Science Engineering Department.
              Join us for an epic adventure of innovation, learning, and fun!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-[#0047fa]/10 rounded-xl transform rotate-3"></div>
                <div className="relative bg-[#0047fa]/10 p-8 rounded-xl backdrop-blur-sm border-4 border-[#ffc247] transform group-hover:-rotate-2 transition-transform duration-300">
                  <div className="w-16 h-16 bg-[#ffc247] rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-comic text-[#ffc247] text-center mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-[#ffe0e0] text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;