import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    { title: 'Fintech Analytics Dashboard', category: 'DASHBOARDS', year: '2023', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
    { title: 'Crypto & Web3 Smart Wallet', category: 'MOBILE APP', year: '2023', img: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=800&auto=format&fit=crop' },
    { title: 'Chiropractor Clinic Portal', category: 'PORTALS & UX', year: '2022', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' }
  ];

  return (
    <section className="container py-24" id="projects">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="section-subtitle">PROJECTS FEATURES</div>
        <h2 className="section-title">OUR FEATURES <span className="accent-text">Projects</span></h2>
      </div>
      
      <div className="grid grid-cols-3 gap-6 mb-16">
        {projects.map((proj, idx) => (
          <div className="group bg-text-primary border border-white/5 p-4 rounded-[24px] cursor-pointer hover:border-white/20 transition-all" key={idx}>
            <div className="flex justify-between items-center px-2 py-3">
              <span className="bg-[#4b2c82] text-white text-[10px] font-bold px-3 py-1 rounded-full">{proj.category}</span>
              <span className="text-text-muted text-[10px] font-bold">{proj.year}</span>
            </div>
            
            <div className="w-full h-[220px] rounded-[16px] overflow-hidden mb-4">
              <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            
            <div className="flex justify-between items-center px-2 pb-2">
              <h3 className="text-white font-bold text-base w-3/4">{proj.title}</h3>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/30 group-hover:bg-accent group-hover:text-black transition-colors">
                <FiArrowUpRight />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button className="btn-neon text-xs">
          VIEW MORE PROJECTS <span className="text-xl">↗</span>
        </button>
      </div>
    </section>
  );
};

export default Projects;
