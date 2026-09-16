import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Skills = () => {
  const skills = [
    { name: 'Figma', level: 98 },
    { name: 'Sketch', level: 90 },
    { name: 'UI Design', level: 80 },
    { name: 'Photoshop', level: 90 },
    { name: 'Webflow & Tailwind CSS', level: 98 }
  ];

  return (
    <section className="container py-24" id="skills">
      <div className="flex gap-16 items-start">
        <div className="flex-1 max-w-[500px]">
          <div className="section-subtitle">MY SKILLS</div>
          <h2 className="section-title mb-6">
            LET'S EXPLORE POPULAR SKILLS AND <span className="accent-text">Experience</span>
          </h2>
          <p className="text-text-muted text-sm mb-10">
            At SIFF, we combine technological edge and deep experience across custom prototyping and rapid development stacks.
          </p>
          <button className="flex items-center gap-2 bg-text-primary border border-white/10 text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-white/5 transition-colors">
            EXPLORE MORE SKILLS <span className="text-accent text-lg">↗</span>
          </button>
        </div>
        
        <div className="flex-1 flex flex-col gap-6">
          {skills.map((skill, idx) => (
            <div className="bg-text-primary border border-white/5 p-6 rounded-[20px]" key={idx}>
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-bold text-sm">{skill.name}</span>
                <span className="text-accent text-xs font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
