import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="container py-24" id="contact">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="section-subtitle">GET IN TOUCH NOW</div>
        <h2 className="section-title">GET IN TOUCH <span className="accent-text">Today!</span></h2>
      </div>
      
      <div className="grid grid-cols-5 gap-8 max-w-[1100px] mx-auto">
        <div className="col-span-2 flex flex-col gap-6">
          <div className="flex gap-6">
            <div className="bg-text-primary border border-white/5 p-6 rounded-[24px] flex-1">
              <div className="text-text-muted text-[10px] font-bold uppercase tracking-widest mb-2">CALL US</div>
              <div className="text-white font-bold text-sm">+1 800 (123) 0019</div>
            </div>
            <div className="bg-text-primary border border-white/5 p-6 rounded-[24px] flex-1">
              <div className="text-text-muted text-[10px] font-bold uppercase tracking-widest mb-2">EMAIL US</div>
              <div className="text-accent font-bold text-sm">hello@robert.io</div>
            </div>
          </div>
          
          <div className="bg-text-primary border border-white/5 p-8 rounded-[24px] mt-auto">
            <div className="text-accent text-[10px] font-bold uppercase tracking-widest mb-4">SIGN UP NEWSLETTER</div>
            <h3 className="text-white text-2xl font-extrabold leading-tight mb-4 uppercase">
              STAY UP TO DATE WITH<br />ROBERT <span className="accent-text text-3xl">Newsletter</span>
            </h3>
            <p className="text-text-muted text-xs mb-8">
              Get monthly insights into UI/UX trends, case studies, and development how-tos.
            </p>
            
            <div className="flex bg-canvas rounded-full p-1 border border-white/10">
              <input 
                type="email" 
                placeholder="Enter your email address..." 
                className="bg-transparent border-none outline-none text-white text-xs px-4 w-full"
              />
              <button className="bg-accent text-black font-bold text-[10px] px-6 py-3 rounded-full uppercase tracking-wider whitespace-nowrap hover:bg-[#b0e600]">
                SUBSCRIBE NOW
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-span-3 bg-text-primary border border-white/5 p-10 rounded-[32px]">
          <h3 className="text-white text-xl font-bold uppercase mb-2">LEAVE A MESSAGE</h3>
          <p className="text-text-muted text-xs mb-8">
            Have a project in mind or want to explore working together? Drop your info below.
          </p>
          
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-bold">Full Name</label>
                <input type="text" placeholder="John Doe" className="bg-canvas border border-white/5 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent/50 transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-white text-xs font-bold">Email Address</label>
                <input type="email" placeholder="john@example.com" className="bg-canvas border border-white/5 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent/50 transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-white text-xs font-bold">Project Subject</label>
              <input type="text" placeholder="UI/UX Redesign of Web App" className="bg-canvas border border-white/5 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent/50 transition-colors" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-white text-xs font-bold">Your Message</label>
              <textarea rows="4" placeholder="Tell me about your project goals and timeline..." className="bg-canvas border border-white/5 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-accent/50 transition-colors resize-none"></textarea>
            </div>
            
            <button type="submit" className="bg-accent text-black font-bold text-xs px-6 py-4 rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#b0e600] transition-colors mt-2">
              SUBMIT NOW <span className="text-lg">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
