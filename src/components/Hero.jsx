import React from 'react';
import { ArrowDown, MapPin, Github, Linkedin } from 'lucide-react';
import { personalData } from '../data/content';

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 flex flex-col justify-center relative bg-[#faf7f2] overflow-hidden">
      {/* Subtle Radial Grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#231b18_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1140px] mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="max-w-4xl space-y-6">
          {/* Top Subtitle / Location */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#ffffff] border-2 border-[#c59b27] text-xs font-bold uppercase tracking-widest text-[#c59b27] shadow-2xs">
            <MapPin className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>{personalData.location}</span>
          </div>

          {/* Name Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-[#231b18] leading-[1.08]">
            {personalData.name}
          </h1>

          {/* Role Title */}
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#c59b27] font-sans tracking-tight leading-relaxed">
            {personalData.role}
          </p>

          {/* Bio Snippet */}
          <p className="text-base sm:text-lg text-[#231b18]/80 font-normal leading-relaxed max-w-3xl">
            {personalData.bio}
          </p>

          {/* Action Buttons & Social Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#c59b27] text-[#231b18] text-xs uppercase font-bold tracking-widest hover:bg-[#a87814] hover:text-[#ffffff] transition-all duration-300 shadow-md"
            >
              Get In Touch
            </button>

            <button
              onClick={scrollToAbout}
              className="nk-btn-2 text-xs text-[#231b18]"
            >
              Explore Profile
            </button>

            <div className="flex items-center space-x-3 pl-2 sm:pl-4 sm:border-l-2 border-[#231b18]/20">
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 border-2 border-[#231b18] bg-[#ffffff] text-[#231b18] hover:bg-[#c59b27] hover:border-[#c59b27] hover:text-[#231b18] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 border-2 border-[#231b18] bg-[#ffffff] text-[#231b18] hover:bg-[#c59b27] hover:border-[#c59b27] hover:text-[#231b18] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group" onClick={scrollToAbout}>
        <span className="text-[10px] uppercase tracking-widest text-[#231b18]/70 group-hover:text-[#c59b27] font-bold transition-colors mb-2">Scroll Down</span>
        <ArrowDown className="w-4 h-4 text-[#c59b27] animate-bounce" />
      </div>
    </section>
  );
}
