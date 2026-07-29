import React, { useState } from 'react';
import { projectsData } from '../data/content';
import ProjectModal from './ProjectModal';
import { Eye, Github } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'AI & Web', 'Full-Stack', 'Backend & DB'];

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#ffffff] border-t-2 border-[#e8dfd8]">
      <div className="max-w-[1140px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#c59b27] font-bold">03. Portfolio</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#231b18] mt-2">Featured Projects</h2>
            <div className="w-16 h-[3px] bg-[#c59b27] mt-4" />
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#c59b27] text-[#231b18] shadow-sm'
                    : 'bg-[#faf7f2] text-[#231b18] hover:bg-[#c59b27] hover:text-[#231b18] border-2 border-[#231b18]/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#ffffff] border-2 border-[#231b18]/15 hover:border-[#c59b27] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div>
                {/* Thumbnail Image with Hover Zoom */}
                <div className="relative aspect-[4/3] bg-[#231b18] overflow-hidden img-zoom-container cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/portfolio-2-sm.jpg';
                    }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-[#1b1412]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-5 py-2.5 bg-[#c59b27] text-[#231b18] text-xs uppercase font-bold tracking-widest flex items-center space-x-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#a87814] hover:text-[#ffffff]"
                    >
                      <Eye className="w-4 h-4 text-current" />
                      <span>Inspect Details</span>
                    </button>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-[#231b18] text-[#c59b27] text-[10px] uppercase font-bold tracking-widest border border-[#c59b27]/30 shadow-sm">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#231b18] group-hover:text-[#c59b27] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#8c7d75] leading-relaxed line-clamp-3 font-normal">
                    {project.highlights[0]}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-[#faf7f2] text-[#231b18] text-[10px] font-mono border border-[#231b18]/15 font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 py-4 border-t-2 border-[#231b18]/10 bg-[#ffffff] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="nk-btn-2 text-xs font-bold text-[#231b18]"
                >
                  View Details
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#231b18] hover:text-[#c59b27] transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
