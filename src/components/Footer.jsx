import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171717] text-[#ffffff] py-16 border-t-4 border-[#1140c9]">
      <div className="max-w-[1140px] mx-auto px-4 md:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b-2 border-[#ffffff]/15">
          {/* Logo Brand */}
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 rounded-full bg-[#1140c9] text-[#ffffff] font-serif text-xl font-bold flex items-center justify-center shadow-sm">
              D
            </span>
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-[#ffffff]">{personalData.name}</h3>
              <p className="text-xs text-[#ffffff]/75 font-sans uppercase tracking-widest">{personalData.role}</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 border-2 border-[#ffffff]/30 text-[#ffffff] hover:bg-[#1140c9] hover:border-[#1140c9] transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 border-2 border-[#ffffff]/30 text-[#ffffff] hover:bg-[#1140c9] hover:border-[#1140c9] transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              aria-label="Email"
              className="p-3 border-2 border-[#ffffff]/30 text-[#ffffff] hover:bg-[#1140c9] hover:border-[#1140c9] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#ffffff]/75 font-normal">
          <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved. Built with React & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[#ffffff] hover:text-[#1140c9] font-bold transition-colors group uppercase tracking-widest text-[11px]"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 text-[#1140c9] group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}
