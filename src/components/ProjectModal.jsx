import React from 'react';
import { X, Github, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171717]/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#ffffff] w-full max-w-3xl max-h-[90vh] overflow-y-auto border-4 border-[#171717] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#171717] text-[#ffffff] hover:bg-[#1140c9] transition-colors z-10 font-bold"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Header Image */}
        <div className="relative h-64 sm:h-80 bg-[#252525] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-90"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/assets/images/portfolio-2-sm.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/60 to-transparent p-6 flex flex-col justify-end">
            <span className="px-3 py-1 bg-[#1140c9] text-[#ffffff] text-[10px] font-bold uppercase tracking-widest self-start mb-2 shadow-sm">
              {project.badge}
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#ffffff] leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-[#ffffff]/80 font-mono mt-1">{project.subtitle}</p>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1140c9] font-bold mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[#f6f6f6] text-[#171717] border-2 border-[#171717]/20 text-xs font-mono font-bold"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements & Bullet Points */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#1140c9] font-bold mb-4">Key Implementation Highlights</h4>
            <div className="space-y-3">
              {project.highlights.map((bullet, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 bg-[#f6f6f6] border-2 border-[#171717]/15">
                  <CheckCircle2 className="w-5 h-5 text-[#1140c9] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-[#171717] leading-relaxed font-normal">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-6 border-t-2 border-[#171717]/15 flex items-center justify-between">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#1140c9] text-[#ffffff] text-xs uppercase font-bold tracking-widest hover:bg-[#0d319a] transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>

            <button
              onClick={onClose}
              className="px-6 py-3 border-2 border-[#171717] text-[#171717] text-xs uppercase font-bold tracking-widest hover:bg-[#171717] hover:text-[#ffffff] transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
