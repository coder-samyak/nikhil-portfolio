import React from 'react';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonial = () => {
  return (
    <section className="container py-24" id="testimonial">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="section-subtitle">MY TESTIMONIALS</div>
        <h2 className="section-title">CLIENT LOVED <span className="accent-text">Testimonial</span></h2>
      </div>
      
      <div className="bg-text-primary border border-white/5 rounded-[32px] p-12 lg:p-16 max-w-[1000px] mx-auto relative">
        <div className="absolute top-12 right-12 text-accent font-serif text-[8rem] leading-none opacity-20 italic">"</div>
        
        <div className="flex gap-1 mb-10">
          {[...Array(5)].map((_, i) => (
            <FiStar key={i} className="text-[#FFB800] text-xl" fill="currentColor" />
          ))}
        </div>
        
        <p className="text-white text-xl lg:text-2xl font-serif italic leading-relaxed mb-16 max-w-[90%] relative z-10">
          "Working with FlexStudio was a standout process. Not once were deadlines compromised, and his user-centric UI approach boosted our app conversion by 30%. He guided us seamlessly through design to front-end development."
        </p>
        
        <div className="flex items-center justify-between mt-auto relative z-10">
          <div className="flex items-center gap-4">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="Oliver Brown" className="w-14 h-14 rounded-full object-cover border-2 border-accent" />
            <div>
              <h4 className="text-white font-bold text-sm">Oliver Brown</h4>
              <span className="text-text-muted text-xs">CEO, LAY INDIA LLC</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-white/5 text-white/50 flex items-center justify-center hover:bg-white/10 transition-colors">
              <FiChevronLeft />
            </button>
            <button className="w-10 h-10 rounded-full bg-accent text-black flex items-center justify-center hover:bg-[#b0e600] transition-colors">
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
      
      {/* Logos Row - Just placeholders based on design pattern */}
      <div className="flex justify-between items-center opacity-30 mt-24 max-w-[1000px] mx-auto">
        <div className="font-bold text-xl tracking-wider">SKETCH</div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="font-bold text-xl tracking-wider">CREATIVE</div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="font-bold text-xl tracking-wider">HEADSPACE</div>
        <div className="w-1 h-1 bg-white rounded-full"></div>
        <div className="font-bold text-xl tracking-wider">SHADOW</div>
      </div>
    </section>
  );
};

export default Testimonial;
