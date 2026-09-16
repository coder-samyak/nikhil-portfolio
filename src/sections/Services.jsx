import React from 'react';
import { FiPenTool, FiLayout, FiSettings, FiEdit3 } from 'react-icons/fi';

const Services = () => {
  const services = [
    { title: 'UI/UX DESIGN', icon: <FiPenTool />, desc: 'UI/UX design is the cornerstone of creating exceptional digital experiences that seamlessly blend aesthetics with functionality for web, SaaS, & mobile app.' },
    { title: 'FRONT END DEVELOPMENT', icon: <FiLayout />, desc: 'Meticulous front-end coding using modern tools (React, Vue, etc) delivers flawless interfaces that provide flawless responsive user experiences.' },
    { title: 'CMS & WP DEVELOPMENT', icon: <FiSettings />, desc: 'Flexible CMS architectures (headless WordPress setups, and custom-built CMS) offer dynamic features for robust security and effective management.' },
    { title: 'BRANDING & LOGO DESIGN', icon: <FiEdit3 />, desc: 'Distinctive visual identity systems, typography guidelines, color palettes, and comprehensive assets that help you build trust in a crowded market.' }
  ];

  return (
    <section className="container py-24" id="services">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="section-subtitle">MY SERVICE PROVIDE</div>
        <h2 className="section-title">MY BEST QUALITY <span className="accent-text">Service</span></h2>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {services.map((svc, idx) => (
          <div className="bg-text-primary border border-white/5 p-8 rounded-[24px] flex flex-col hover:border-white/20 transition-colors" key={idx}>
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent text-xl mb-6">
              {svc.icon}
            </div>
            <h3 className="text-white text-lg font-bold mb-4 w-3/4 leading-tight">{svc.title}</h3>
            <p className="text-text-muted text-xs leading-relaxed mb-8 flex-1">{svc.desc}</p>
            <div className="mt-auto">
              <a href="#" className="text-accent text-xs font-bold tracking-widest uppercase flex items-center justify-between hover:text-white transition-colors">
                READ MORE <span className="text-white/30 text-lg">↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
