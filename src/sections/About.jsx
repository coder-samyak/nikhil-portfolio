import React from 'react';
import { FiCheck, FiArrowUpRight } from 'react-icons/fi';

const About = () => {
  return (
    <section className="container py-24" id="about">
      <div className="flex gap-16 items-center">
        <div className="flex-1 max-w-[600px]">
          <div className="section-subtitle">ABOUT US</div>
          <h2 className="section-title mb-6">
            BEST UI/UX DESIGNER<br />
            <span className="accent-text">& developer</span> IN USA
          </h2>
          <p className="text-text-muted text-base mb-8">
            At SIFF, we understand that exceptional user experience drives business growth. Specialized in creating scalable digital designs, rapid wireframing, design systems, and robust web architectures.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="flex items-center gap-3 bg-text-primary px-4 py-3 rounded-xl border border-white/5">
              <span className="text-accent text-xl"><FiCheck /></span>
              <span className="text-white text-xs font-bold uppercase tracking-wide">UI/UX DESIGN</span>
            </div>
            <div className="flex items-center gap-3 bg-text-primary px-4 py-3 rounded-xl border border-white/5">
              <span className="text-accent text-xl"><FiCheck /></span>
              <span className="text-white text-xs font-bold uppercase tracking-wide">WEB DEVELOPMENT</span>
            </div>
            <div className="flex items-center gap-3 bg-text-primary px-4 py-3 rounded-xl border border-white/5">
              <span className="text-accent text-xl"><FiCheck /></span>
              <span className="text-white text-xs font-bold uppercase tracking-wide">PRODUCT DESIGN</span>
            </div>
            <div className="flex items-center gap-3 bg-text-primary px-4 py-3 rounded-xl border border-white/5">
              <span className="text-accent text-xl"><FiCheck /></span>
              <span className="text-white text-xs font-bold uppercase tracking-wide">BRAND IDENTITY</span>
            </div>
          </div>
          
          <button className="btn-neon text-xs">
            GET IN TOUCH NOW <FiArrowUpRight />
          </button>
        </div>
        
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div className="bg-text-primary border border-white/5 py-10 px-6 rounded-[24px] text-center hover:bg-white/5 transition-colors">
            <h3 className="text-[3.5rem] text-white font-extrabold mb-2">12K<span className="text-accent">+</span></h3>
            <p className="text-text-muted text-[10px] font-bold tracking-widest uppercase">FREELANCE COMPLETED</p>
          </div>
          <div className="bg-text-primary border border-white/5 py-10 px-6 rounded-[24px] text-center hover:bg-white/5 transition-colors">
            <h3 className="text-[3.5rem] text-white font-extrabold mb-2">10K<span className="text-accent">+</span></h3>
            <p className="text-text-muted text-[10px] font-bold tracking-widest uppercase">SATISFIED CUSTOMER</p>
          </div>
          <div className="bg-text-primary border border-white/5 py-10 px-6 rounded-[24px] text-center hover:bg-white/5 transition-colors">
            <h3 className="text-[3.5rem] text-white font-extrabold mb-2">10K<span className="text-accent">+</span></h3>
            <p className="text-text-muted text-[10px] font-bold tracking-widest uppercase">HAPPY REVIEWS</p>
          </div>
          <div className="bg-text-primary border border-white/5 py-10 px-6 rounded-[24px] text-center hover:bg-white/5 transition-colors">
            <h3 className="text-[3.5rem] text-white font-extrabold mb-2">12K<span className="text-accent">+</span></h3>
            <p className="text-text-muted text-[10px] font-bold tracking-widest uppercase">GLOBAL REACH</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
