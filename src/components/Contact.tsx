import React from 'react';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[#00237a]" />,
      title: "Location",
      content: "ISE Department, Engineering College, Bangalore",
      link: "https://maps.google.com"
    },
    {
      icon: <Mail className="w-6 h-6 text-[#00237a]" />,
      title: "Email",
      content: "genesis.club@example.com",
      link: "mailto:genesis.club@example.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-[#00237a]" />,
      title: "Phone",
      content: "+91 1234567890",
      link: "tel:+911234567890"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#00237a]">
        <div className="absolute inset-0 opacity-10 action-lines"></div>
        <div className="absolute inset-0 opacity-5 halftone"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <span className="inline-block bg-[#ff1f53] text-white px-6 py-2 rounded-full text-lg mb-4 font-bold">
            Get in Touch
          </span>
          <h2 className="text-6xl font-comic text-[#ffc247] mb-4">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 group"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-[#ffc247] rounded-xl flex items-center justify-center flex-shrink-0 shadow-comic transform group-hover:-rotate-6 transition-transform">
                  {info.icon}
                </div>
                <div className="flex-grow">
                  <h3 className="text-[#ffc247] font-bold text-lg mb-1 flex items-center">
                    {info.title}
                    <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[#ffe0e0] group-hover:text-white transition-colors">
                    {info.content}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.form 
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            <div className="relative group">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#ffc247] text-white placeholder-white/50 focus:outline-none focus:border-[#ff1f53] shadow-comic transform group-hover:-rotate-1 transition-transform"
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#ffc247] text-white placeholder-white/50 focus:outline-none focus:border-[#ff1f53] shadow-comic transform group-hover:-rotate-1 transition-transform"
              />
            </div>
            <div className="relative group">
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border-2 border-[#ffc247] text-white placeholder-white/50 focus:outline-none focus:border-[#ff1f53] shadow-comic transform group-hover:-rotate-1 transition-transform"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-4 bg-[#ff1f53] text-white rounded-xl shadow-comic font-comic text-lg flex items-center justify-center space-x-2 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Send Message
                <Send className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-[#ffc247]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;