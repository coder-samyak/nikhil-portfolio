import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-canvas text-text-light py-5 sticky top-0 z-50 border-b border-white/5">
      <div className="container flex items-center justify-between">
        <div className="text-[1.75rem] font-extrabold flex items-center gap-2 tracking-wide text-white">
          <span className="text-accent">✦</span> SIFF.
        </div>
        
        <ul className="flex gap-10">
          <li><a href="#home" className="text-white font-medium hover:text-accent transition-colors text-sm">Home</a></li>
          <li><a href="#about" className="text-[#a0a0a0] font-medium hover:text-white transition-colors text-sm">About</a></li>
          <li><a href="#services" className="text-[#a0a0a0] font-medium hover:text-white transition-colors text-sm">Services</a></li>
          <li><a href="#skills" className="text-[#a0a0a0] font-medium hover:text-white transition-colors text-sm">Skills</a></li>
          <li><a href="#projects" className="text-[#a0a0a0] font-medium hover:text-white transition-colors text-sm">Projects</a></li>
          <li><a href="#testimonial" className="text-[#a0a0a0] font-medium hover:text-white transition-colors text-sm">Testimonials</a></li>
          <li><a href="#contact" className="text-[#a0a0a0] font-medium hover:text-white transition-colors text-sm">Contact</a></li>
        </ul>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-text-primary px-4 py-2 rounded-full text-xs font-semibold text-white/80 border border-white/10">
            <span className="w-2 h-2 bg-accent rounded-full shadow-[0_0_5px_#C6FF00]"></span> Available for work
          </div>
          <a href="#contact" className="btn-neon text-xs">
            LET'S TALK <FiArrowUpRight />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
