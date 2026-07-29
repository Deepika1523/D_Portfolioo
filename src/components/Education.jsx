import React from 'react';
import { educationData } from '../data/content';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#ffffff] border-t-2 border-[#e8e8e8]">
      <div className="max-w-[1140px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#1140c9] font-bold">04. Academic Background</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#171717] mt-2">Education</h2>
          <div className="w-16 h-[3px] bg-[#1140c9] mt-4" />
        </div>

        {/* Timeline Layout with Centered Timeline Axis Line */}
        <div className="relative py-4">
          {/* Vertical Timeline Center Axis Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-[#1140c9] transform md:-translate-x-1/2 z-0" />

          <div className="space-y-12 relative z-10">
            {educationData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group"
                >
                  {/* Card Content - Left (Even) or Right (Odd) */}
                  <div
                    className={`w-full md:w-[45%] pl-14 md:pl-0 ${
                      isEven ? 'md:text-right md:mr-auto' : 'md:text-left md:ml-auto'
                    }`}
                  >
                    <div className="bg-[#f6f6f6] p-6 sm:p-8 border-2 border-[#171717]/15 hover:border-[#1140c9] shadow-sm hover:shadow-md transition-all duration-300 space-y-3">
                      <div
                        className={`flex items-center space-x-2 text-xs uppercase tracking-wider text-[#1140c9] font-bold ${
                          isEven ? 'md:justify-end' : ''
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#1140c9]" />
                        <span>{item.period}</span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-[#171717]">{item.degree}</h3>

                      <p className="text-sm font-semibold text-[#171717]">{item.institution}</p>

                      <div
                        className={`flex items-center space-x-2 text-xs text-[#818a91] ${
                          isEven ? 'md:justify-end' : ''
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#1140c9]" />
                        <span>{item.location}</span>
                      </div>

                      {item.score && (
                        <div className={`pt-2 flex items-center ${isEven ? 'md:justify-end' : ''}`}>
                          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#1140c9] text-[#ffffff] text-xs font-mono font-bold">
                            <Award className="w-3.5 h-3.5 text-[#ffffff]" />
                            <span>Score: {item.score}</span>
                          </span>
                        </div>
                      )}

                      {item.status && (
                        <div className={`pt-2 flex items-center ${isEven ? 'md:justify-end' : ''}`}>
                          <span className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#1140c9] text-[#ffffff] text-xs font-mono font-bold">
                            <span>Status: {item.status}</span>
                          </span>
                        </div>
                      )}

                      <p className="text-xs text-[#171717]/80 font-normal pt-2 border-t-2 border-[#171717]/10 leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>

                  {/* Absolute Centered Timeline Icon Pin Directly On The Line */}
                  <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1140c9] text-[#ffffff] border-4 border-[#ffffff] shadow-md flex items-center justify-center z-20 font-bold">
                    <GraduationCap className="w-4 h-4 text-[#ffffff]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
