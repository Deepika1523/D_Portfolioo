import React, { useState } from 'react';
import { skillsData } from '../data/content';
import { Code2, Server, Database, Wrench, Cpu, Layout } from 'lucide-react';

const categoryIcons = {
  Languages: <Code2 className="w-5 h-5" />,
  Backend: <Server className="w-5 h-5" />,
  Frontend: <Layout className="w-5 h-5" />,
  Databases: <Database className="w-5 h-5" />,
  'Tools & DevOps': <Wrench className="w-5 h-5" />,
  'Concepts & Architecture': <Cpu className="w-5 h-5" />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((cat) => cat.category)];

  const filteredCategories =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((cat) => cat.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-[#faf7f2] border-t-2 border-[#e8dfd8]">
      <div className="max-w-[1140px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#c59b27] font-bold">02. Capabilities</span>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#231b18] mt-2">Technical Skills</h2>
            <div className="w-16 h-[3px] bg-[#c59b27] mt-4" />
          </div>

          {/* Filter Tabs */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#c59b27] text-[#231b18] shadow-sm'
                    : 'bg-[#ffffff] text-[#231b18] hover:bg-[#c59b27] hover:text-[#231b18] border-2 border-[#231b18]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((group, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] p-6 sm:p-8 border-2 border-[#231b18]/15 shadow-sm hover:shadow-md transition-all duration-300 space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 pb-4 border-b-2 border-[#231b18]/15 text-[#231b18]">
                <span className="p-2.5 bg-[#231b18] text-[#c59b27]">
                  {categoryIcons[group.category] || <Code2 className="w-5 h-5" />}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#231b18]">{group.category}</h3>
              </div>

              {/* Skills / Technology Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {group.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2.5 bg-[#faf7f2] text-[#231b18] border-2 border-[#231b18]/20 text-sm font-bold tracking-tight hover:bg-[#c59b27] hover:border-[#c59b27] hover:text-[#231b18] transition-all duration-200 shadow-2xs"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
