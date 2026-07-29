import React, { useEffect } from 'react';
import { ShieldAlert, FileText, CheckCircle2, ExternalLink, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { personalData } from '../data/content';

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#231b18] flex flex-col font-sans">
      <Navbar activeSection="" />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-[1140px] mx-auto px-4 md:px-8">
          
          {/* Back Button & Header */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-[#c59b27] hover:text-[#a87814] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Main Portfolio</span>
            </Link>

            <div className="flex items-center space-x-3 text-[#c59b27] mb-2">
              <FileText className="w-6 h-6" />
              <span className="text-xs uppercase tracking-widest font-bold">Legal Agreement</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#231b18]">Terms & Conditions</h1>
            <div className="w-20 h-[3px] bg-[#c59b27] mt-4" />
            <p className="text-xs text-[#8c7d75] font-mono mt-3">Last Updated: July 29, 2026</p>
          </div>

          {/* Terms Content Container */}
          <div className="bg-[#ffffff] border-2 border-[#231b18]/15 p-8 sm:p-12 shadow-sm space-y-10">

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-[#231b18] flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#231b18] text-[#c59b27] text-sm font-bold flex items-center justify-center border border-[#c59b27]/30">1</span>
                <span>Acceptance of Terms</span>
              </h2>
              <p className="text-sm text-[#231b18]/80 leading-relaxed pl-11">
                By accessing and using this portfolio website (<a href="https://deepika.site" className="text-[#c59b27] font-bold hover:underline">deepika.site</a>), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any portion of these terms, please discontinue use of the site.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-[#231b18] flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#231b18] text-[#c59b27] text-sm font-bold flex items-center justify-center border border-[#c59b27]/30">2</span>
                <span>Use of Site Content</span>
              </h2>
              <p className="text-sm text-[#231b18]/80 leading-relaxed pl-11">
                The content on this website—including project descriptions, source code snippets, architectural documentation, skill graphics, and resume information—is provided solely for professional evaluation, recruitment, and informational purposes. Unauthorized duplication, redistribution, or commercial exploitation without prior written consent is strictly prohibited.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-[#231b18] flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#231b18] text-[#c59b27] text-sm font-bold flex items-center justify-center border border-[#c59b27]/30">3</span>
                <span>Intellectual Property Ownership</span>
              </h2>
              <div className="pl-11 space-y-3">
                <p className="text-sm text-[#231b18]/80 leading-relaxed">
                  All projects, codebase demonstrations, software designs, AI workflows, and content displayed on this portfolio are the exclusive intellectual property of <strong>Deepika</strong> unless explicitly noted otherwise.
                </p>
                <div className="p-4 bg-[#faf7f2] border-l-4 border-[#c59b27] space-y-2">
                  <div className="flex items-center space-x-2 text-xs uppercase font-bold text-[#c59b27] tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-[#c59b27]" />
                    <span>Originality & Ownership Verification</span>
                  </div>
                  <p className="text-xs text-[#8c7d75] leading-relaxed">
                    Featured solutions (such as LegalMind Contract Intelligence Platform and Event Management System) represent original development work, customized backend logic, and database schemas authored by Deepika.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-[#231b18] flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#231b18] text-[#c59b27] text-sm font-bold flex items-center justify-center border border-[#c59b27]/30">4</span>
                <span>Disclaimer of Liability</span>
              </h2>
              <p className="text-sm text-[#231b18]/80 leading-relaxed pl-11">
                This portfolio and all project demonstrations are provided on an "as is" and "as available" basis. While every effort is made to maintain accurate information and bug-free code demonstrations, no warranties of any kind (express or implied) are provided regarding uninterrupted availability or error-free operation.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-[#231b18] flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#231b18] text-[#c59b27] text-sm font-bold flex items-center justify-center border border-[#c59b27]/30">5</span>
                <span>External Links Disclaimer</span>
              </h2>
              <p className="text-sm text-[#231b18]/80 leading-relaxed pl-11">
                This site may contain links to external third-party websites (e.g., GitHub, LinkedIn, live application demos). These links are provided for convenience only. Deepika has no control over and assumes no responsibility for the content, privacy policies, or practices of any external sites.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-4 border-t-2 border-[#231b18]/10">
              <h2 className="text-2xl font-serif font-bold text-[#231b18] flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#231b18] text-[#c59b27] text-sm font-bold flex items-center justify-center border border-[#c59b27]/30">6</span>
                <span>Inquiries & Contact</span>
              </h2>
              <p className="text-sm text-[#231b18]/80 leading-relaxed pl-11">
                If you have any questions regarding these Terms & Conditions, please contact:
              </p>
              <div className="pl-11 pt-2">
                <a
                  href={`mailto:${personalData.email}`}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#c59b27] text-[#231b18] text-xs font-bold uppercase tracking-wider hover:bg-[#a87814] hover:text-[#ffffff] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email: {personalData.email}</span>
                </a>
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
