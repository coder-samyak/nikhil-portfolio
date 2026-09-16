import React from 'react';
import { FiDribbble, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8 mt-12">
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-extrabold flex items-center gap-2 tracking-wide text-white">
          <span className="text-accent">✦</span> SIFF.
        </div>
        
        <p className="text-text-muted text-xs font-medium">
          © 2024 Alex Robert. FlexStudio All Rights Reserved.
        </p>
        
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors">
            <FiDribbble />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors">
            <FiTwitter />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors">
            <FiInstagram />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors">
            <FiLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
