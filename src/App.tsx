import React from 'react';
import { Calendar, Code, Brain, Gamepad2, Palette, Search, Keyboard, Trophy, Mail, Phone, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import FAQ from './components/FAQ';
import About from './components/About';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';

function App() {
  const events = [
    {
      title: "Code Relay",
      description: "Team-based coding competition where participants relay code solutions.",
      icon: <Code className="w-6 h-6" />,
      date: "March 7",
      time: "10:00 AM"
    },
    {
      title: "DSA Smackdown",
      description: "Intense Data Structures & Algorithms competition to test your problem-solving skills.",
      icon: <Brain className="w-6 h-6" />,
      date: "March 7",
      time: "2:00 PM"
    },
    {
      title: "Tech Quiz",
      description: "Test your technical knowledge across various domains of computer science.",
      icon: <Trophy className="w-6 h-6" />,
      date: "March 7",
      time: "4:00 PM"
    },
    {
      title: "Valorant Tournament",
      description: "Show off your tactical shooter skills in this exciting gaming competition.",
      icon: <Gamepad2 className="w-6 h-6" />,
      date: "March 8",
      time: "10:00 AM"
    },
    {
      title: "UI Design Competition",
      description: "Create stunning user interfaces and compete for the best design.",
      icon: <Palette className="w-6 h-6" />,
      date: "March 8",
      time: "11:00 AM"
    },
    {
      title: "Technoseek",
      description: "Technical treasure hunt that will test your technical and logical thinking.",
      icon: <Search className="w-6 h-6" />,
      date: "March 8",
      time: "2:00 PM"
    },
    {
      title: "TypeMaster",
      description: "Show off your typing speed and accuracy in this fast-paced competition.",
      icon: <Keyboard className="w-6 h-6" />,
      date: "March 8",
      time: "4:00 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-[#00237a] relative">
      {/* Comic-style background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#ffc247] opacity-10 rotate-45"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#ff1f53] opacity-10 rounded-full"></div>
        <div className="absolute bottom-60 left-40 w-24 h-24 bg-[#0047fa] opacity-10 transform skew-x-12"></div>
      </div>

      <Navbar />
      <Hero />
      
      <About />

      <main className="container mx-auto px-4 py-16" id="events">
        <div className="relative">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Epic Events
            <span className="absolute -top-4 -right-4 w-8 h-8 bg-[#ffc247] opacity-50 rounded-full"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </main>

      <Sponsors />
      <FAQ />
      <Contact />

      <footer className="bg-[#00237a] text-white py-8 border-t border-[#0047fa]/30">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="mailto:genesis.club@example.com" className="text-[#ffe0e0] hover:text-[#ffc247]">
              <Mail className="w-6 h-6" />
            </a>
            <a href="tel:+1234567890" className="text-[#ffe0e0] hover:text-[#ffc247]">
              <Phone className="w-6 h-6" />
            </a>
            <a href="#location" className="text-[#ffe0e0] hover:text-[#ffc247]">
              <MapPin className="w-6 h-6" />
            </a>
          </div>
          <p className="text-[#ffe0e0]">© 2024 Genesis - ISE Department</p>
          <p className="mt-2 text-[#ffe0e0]">Made with 💻 by Genesis Tech Team</p>
        </div>
      </footer>
    </div>
  );
}

export default App;