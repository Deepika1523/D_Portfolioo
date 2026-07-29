import React from 'react';
import { certificationsData } from '../data/content';
import { Award, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[#f6f6f6] border-t-2 border-[#e8e8e8]">
      <div className="max-w-[1140px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#1140c9] font-bold">05. Credentials</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#171717] mt-2">Certifications</h2>
          <div className="w-16 h-[3px] bg-[#1140c9] mt-4" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] p-6 sm:p-8 border-2 border-[#171717]/15 hover:border-[#1140c9] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-[#1140c9] text-[#ffffff] flex items-center justify-center shadow-sm group-hover:bg-[#0d319a] transition-colors font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-[#f6f6f6] border-2 border-[#171717]/20 text-[#171717]">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#171717] group-hover:text-[#1140c9] transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs uppercase tracking-widest text-[#1140c9] font-bold">
                  {cert.issuer}
                </p>

                <p className="text-xs text-[#818a91] leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-[#171717]/10 flex items-center space-x-2 text-[11px] text-[#1140c9] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#1140c9]" />
                <span>Verified Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
