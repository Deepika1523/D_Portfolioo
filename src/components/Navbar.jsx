import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { personalData } from '../data/content';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#ffffff]/95 backdrop-blur-md py-4 shadow-md border-b-2 border-[#171717]'
          : 'bg-[#ffffff] py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center space-x-2 text-xl font-bold tracking-tight text-[#171717]"
        >
          <span className="w-9 h-9 rounded-full bg-[#1140c9] text-[#ffffff] flex items-center justify-center font-serif text-lg font-bold group-hover:bg-[#0d319a] transition-colors shadow-sm">
            D
          </span>
          <span className="font-serif text-2xl tracking-tight text-[#171717] transition-colors">
            Deepika<span className="text-[#1140c9] font-sans font-semibold text-xs uppercase tracking-widest ml-2 hidden sm:inline-block">.portfolio</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-1 text-sm uppercase tracking-widest font-bold transition-colors ${
                  isActive ? 'text-[#1140c9]' : 'text-[#171717]/75 hover:text-[#1140c9]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1140c9] transition-all duration-300" />
                )}
              </button>
            );
          })}

          {/* Social Icons & Resume CTA */}
          <div className="flex items-center space-x-4 pl-4 border-l-2 border-[#171717]/20">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="text-[#171717] hover:text-[#1140c9] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="text-[#171717] hover:text-[#1140c9] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="/assets/Deepika_Resume.pdf"
              target="_blank"
              download
              className="px-4 py-2 text-xs uppercase font-bold tracking-wider text-[#ffffff] bg-[#1140c9] hover:bg-[#0d319a] transition-colors rounded-none shadow-sm"
            >
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#171717] hover:text-[#1140c9] transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#ffffff] border-b-2 border-[#171717] shadow-xl px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 text-base uppercase tracking-widest font-bold border-b border-[#171717]/15 flex items-center justify-between ${
                    isActive ? 'text-[#1140c9] font-bold pl-2 border-l-4 border-[#1140c9]' : 'text-[#171717]/75'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-[#1140c9]" />}
                </button>
              );
            })}

            <div className="pt-4 flex items-center justify-between border-t-2 border-[#171717]">
              <div className="flex items-center space-x-4">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-[#171717] hover:text-[#1140c9]"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-[#171717] hover:text-[#1140c9]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <a
                href="/assets/Deepika_Resume.pdf"
                target="_blank"
                download
                className="px-4 py-2 text-xs uppercase font-bold tracking-wider text-[#ffffff] bg-[#1140c9]"
              >
                Resume PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
