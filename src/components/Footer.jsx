import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalData } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1b1412] text-[#faf7f2] py-16 border-t-4 border-[#c59b27]">
      <div className="max-w-[1140px] mx-auto px-4 md:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b-2 border-[#faf7f2]/15">
          {/* Logo Brand */}
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 rounded-full bg-[#c59b27] text-[#1b1412] font-serif text-xl font-bold flex items-center justify-center shadow-sm">
              D
            </span>
            <div>
              <h3 className="font-serif text-2xl font-bold tracking-tight text-[#faf7f2]">{personalData.name}</h3>
              <p className="text-xs text-[#faf7f2]/75 font-sans uppercase tracking-widest">{personalData.role}</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 border-2 border-[#faf7f2]/30 text-[#faf7f2] hover:bg-[#c59b27] hover:border-[#c59b27] hover:text-[#1b1412] transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 border-2 border-[#faf7f2]/30 text-[#faf7f2] hover:bg-[#c59b27] hover:border-[#c59b27] hover:text-[#1b1412] transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              aria-label="Email"
              className="p-3 border-2 border-[#faf7f2]/30 text-[#faf7f2] hover:bg-[#c59b27] hover:border-[#c59b27] hover:text-[#1b1412] transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright, Legal Links & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#faf7f2]/75 font-normal">
          <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <Link
              to="/terms"
              className="hover:text-[#c59b27] font-semibold uppercase tracking-wider text-[11px] transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-[#faf7f2]/30">•</span>
            <Link
              to="/privacy"
              className="hover:text-[#c59b27] font-semibold uppercase tracking-wider text-[11px] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-[#faf7f2] hover:text-[#c59b27] font-bold transition-colors group uppercase tracking-widest text-[11px]"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 text-[#c59b27] group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </footer>
  );
}
