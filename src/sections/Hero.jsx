import React from 'react';
import { FiDownload, FiPlay } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-between py-24 min-h-[85vh] container" id="home">
      <div className="flex-1 max-w-[650px] relative z-10">
        <div className="inline-flex items-center gap-2 bg-text-primary border border-white/10 text-white px-5 py-2 rounded-full font-medium text-xs mb-8">
          <span>👋</span> Hi I'm Alex Robert
        </div>
        
        <h1 className="text-white text-[5rem] lg:text-[6rem] leading-[1] font-extrabold uppercase mb-6 tracking-tight">
          A UI/UX DESIGNER<br />
          <span className="text-accent font-serif italic text-[6rem] lg:text-[7rem] normal-case -mt-4 block font-normal">
            & Developer
          </span>
        </h1>
        
        <p className="text-base text-text-muted leading-relaxed mb-10 max-w-[85%] font-medium">
          As a dedicated professional with a passion for UX/UI, having 10+ years of 
          experience in UI/UX designer & developer throughout best of my career.
        </p>
        
        <div className="flex gap-6 items-center">
          <button className="btn-neon text-sm">
            <FiDownload /> DOWNLOAD CV
          </button>
          <button className="flex items-center gap-3 bg-text-primary border border-white/10 rounded-full pr-6 pl-2 py-2 text-white font-bold text-sm cursor-pointer hover:bg-white/5 transition-colors">
            <span className="text-accent w-8 h-8 rounded-full flex items-center justify-center">
              <FiPlay />
            </span> 
            PLAY VIDEO
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-end relative">
        <div className="relative w-full max-w-[500px]">
          <div className="rounded-[40px] overflow-hidden border border-white/10 bg-text-primary p-2">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
              alt="Alex Robert working" 
              className="w-full h-[600px] object-cover rounded-[32px] grayscale-[20%]"
            />
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-canvas/90 border border-white/10 text-white px-6 py-3 rounded-full flex items-center gap-2 text-xs font-bold backdrop-blur-md w-max shadow-2xl">
            Available for work <span className="w-2 h-2 bg-accent rounded-full ml-2 shadow-[0_0_5px_#C6FF00]"></span> 10+ Yrs
          </div>
          
          <div className="absolute -top-10 -right-10 w-[140px] h-[140px] flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-[spin_10s_linear_infinite] fill-text-muted text-[12px] font-bold tracking-[3px]">
              <path d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" id="circle2" fill="none" />
              <text>
                <textPath href="#circle2" startOffset="0%">
                  LET'S TALK • WORK TOGETHER •
                </textPath>
              </text>
            </svg>
            <div className="bg-text-primary border border-white/10 text-accent w-12 h-12 rounded-full flex items-center justify-center text-xl z-10">↗</div>
          </div>
        </div>
      </div>
      
      {/* Neon Star Decoration */}
      <div className="absolute bottom-[10%] right-[45%] text-accent text-5xl opacity-80">
        ✦
      </div>
    </section>
  );
};

export default Hero;
