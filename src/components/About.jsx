import React from 'react';
import { CheckCircle, Mail, Phone } from 'lucide-react';
import { personalData } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#ffffff] border-t-2 border-[#e8dfd8]">
      <div className="max-w-[1140px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c59b27] font-bold">01. Background</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#231b18] mt-2">About Me</h2>
          <div className="w-16 h-[3px] bg-[#c59b27] mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar / Photo Column */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="aspect-[4/5] bg-[#faf7f2] overflow-hidden relative shadow-lg border-4 border-[#231b18]">
                <img
                  src={personalData.avatar}
                  alt={personalData.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/avatar-placeholder.svg';
                  }}
                />
              </div>

              {/* Name & Title Accent */}
              <div className="mt-4">
                <h4 className="font-serif text-xl font-bold text-[#231b18]">{personalData.name}</h4>
                <p className="text-xs text-[#c59b27] font-bold uppercase tracking-wider">Python & Django Developer</p>
              </div>
            </div>
          </div>

          {/* Bio & Details Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#231b18] font-medium leading-snug">
              Building robust full-stack & AI-integrated web solutions with scalable backend architecture.
            </h3>

            <p className="text-base text-[#231b18]/80 leading-relaxed font-normal">
              I am a Computer Science student (2023–2026) with a strong interest in full-stack web development, backend systems, and AI technologies. I enjoy building practical, database-driven applications and continuously learning modern development tools.
            </p>

            <p className="text-base text-[#231b18]/80 leading-relaxed font-normal">
              Whether building enterprise contract intelligence tools with OpenAI API integration or crafting secure event management portals with Django and MySQL, I prioritize clean OOP standards, RESTful API design, and intuitive user experiences.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 p-4 bg-[#faf7f2] border-2 border-[#231b18]/15 hover:border-[#c59b27] transition-colors shadow-2xs">
                <CheckCircle className="w-5 h-5 text-[#c59b27] mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-serif font-bold text-sm text-[#231b18]">Backend Architecture</h5>
                  <p className="text-xs text-[#8c7d75] mt-1">Django, FastAPI & Modular DB Queries</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-[#faf7f2] border-2 border-[#231b18]/15 hover:border-[#c59b27] transition-colors shadow-2xs">
                <CheckCircle className="w-5 h-5 text-[#c59b27] mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-serif font-bold text-sm text-[#231b18]">AI & LLM Workflows</h5>
                  <p className="text-xs text-[#8c7d75] mt-1">LangGraph, OpenAI API & Clause Scoring</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-[#faf7f2] border-2 border-[#231b18]/15 hover:border-[#c59b27] transition-colors shadow-2xs">
                <CheckCircle className="w-5 h-5 text-[#c59b27] mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-serif font-bold text-sm text-[#231b18]">Database Normalization</h5>
                  <p className="text-xs text-[#8c7d75] mt-1">PostgreSQL, MySQL & Query Optimization</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-[#faf7f2] border-2 border-[#231b18]/15 hover:border-[#c59b27] transition-colors shadow-2xs">
                <CheckCircle className="w-5 h-5 text-[#c59b27] mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-serif font-bold text-sm text-[#231b18]">Agile & Software Engineering</h5>
                  <p className="text-xs text-[#8c7d75] mt-1">Git Version Control & OOP Best Practices</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Metadata */}
            <div className="pt-6 border-t-2 border-[#231b18]/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold">
              <div className="flex items-center space-x-2 text-[#231b18]">
                <Mail className="w-4 h-4 text-[#c59b27]" />
                <span>{personalData.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-[#231b18]">
                <Phone className="w-4 h-4 text-[#c59b27]" />
                <span>+91 {personalData.phone}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
