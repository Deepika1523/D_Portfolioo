import React from 'react';
import { certificationsData } from '../data/content';
import { Award, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#ffffff] border-t-2 border-[#e8dfd8]">
      <div className="max-w-[1140px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#c59b27] font-bold">05. Credentials</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#231b18] mt-2">Certifications</h2>
          <div className="w-16 h-[3px] bg-[#c59b27] mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#faf7f2] p-6 sm:p-8 border-2 border-[#231b18]/15 hover:border-[#c59b27] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#231b18] text-[#c59b27] flex items-center justify-center shadow-sm group-hover:bg-[#c59b27] group-hover:text-[#231b18] transition-colors font-bold border border-[#c59b27]/30">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#ffffff] border-2 border-[#231b18]/20 text-[#231b18]">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#231b18] group-hover:text-[#c59b27] transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs uppercase tracking-widest text-[#c59b27] font-bold">
                  {cert.issuer}
                </p>

                <p className="text-xs text-[#8c7d75] leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-[#231b18]/10 flex items-center space-x-2 text-[11px] text-[#c59b27] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#c59b27]" />
                <span>Verified Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
