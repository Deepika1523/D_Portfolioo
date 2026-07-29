import React, { useEffect } from 'react';
import { ShieldCheck, Lock, CheckCircle2, Server, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { personalData } from '../data/content';

export default function PrivacyPolicy() {
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
              <ShieldCheck className="w-6 h-6" />
              <span className="text-xs uppercase tracking-widest font-bold">Data Governance</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#231b18]">Privacy Policy</h1>
            <div className="w-20 h-[3px] bg-[#c59b27] mt-4" />
            <p className="text-xs text-[#8c7d75] font-mono mt-3">Last Updated: July 29, 2026</p>
          </div>

          {/* Policy Content Container */}
          <div className="bg-[#ffffff] border-2 border-[#231b18]/15 p-8 sm:p-12 shadow-sm space-y-10">

            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-[#231b18] flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#231b18] text-[#c59b27] text-sm font-bold flex items-center justify-center border border-[#c59b27]/30">1</span>
                <span>Information We Collect</span>
              </h2>
              <div className="pl-11 space-y-3">
                <p className="text-sm text-[#231b18]/80 leading-relaxed">
                  We respect your privacy. This portfolio collects minimal personal data solely required to facilitate professional inquiry communications.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#faf7f2] border-2 border-[#231b18]/10">
                    <h4 className="font-bold text-xs uppercase text-[#c59b27] mb-1">Contact Form Data</h4>
                    <p className="text-xs text-[#8c7d75] leading-relaxed">
                      When submitting a message via the Contact form, we collect your name, email address, subject line, and message body.
                    </p>
                  </div>

                  <div className="p-4 bg-[#faf7f2] border-2 border-[#231b18]/10">
                    <h4 className="font-bold text-xs uppercase text-[#c59b27] mb-1">Technical Telemetry</h4>
                    <p className="text-xs text-[#8c7d75] leading-relaxed">
                      Standard server log data (such as IP address, browser user-agent, and page request timestamps) collected automatically by edge hosting infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-[#231b18] flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#231b18] text-[#c59b27] text-sm font-bold flex items-center justify-center border border-[#c59b27]/30">2</span>
                <span>How Your Information Is Used</span>
              </h2>
              <div className="pl-11 space-y-2 text-sm text-[#231b18]/80 leading-relaxed">
                <p>Information submitted through this site is utilized exclusively for:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#231b18]/90">
                  <li>Responding to direct project, employment, or technical inquiries.</li>
                  <li>Fulfilling requests for professional consultation or code collaboration.</li>
                  <li>Maintaining the security and operational performance of this web application.</li>
                </ul>
                <p className="text-xs text-[#8c7d75] pt-1">
                  Your information is never sold, rented, leased, or shared with third parties for marketing purposes.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-[#231b18] flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#231b18] text-[#c59b27] text-sm font-bold flex items-center justify-center border border-[#c59b27]/30">3</span>
                <span>Cookies Policy</span>
              </h2>
              <p className="text-sm text-[#231b18]/80 leading-relaxed pl-11">
                This website does not deploy advertising or cross-site tracking cookies. Standard session or security headers may be utilized by our edge host network to ensure HTTPS encryption and protection against DDoS attacks.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-[#231b18] flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#231b18] text-[#c59b27] text-sm font-bold flex items-center justify-center border border-[#c59b27]/30">4</span>
                <span>Third-Party Services</span>
              </h2>
              <div className="pl-11 space-y-3">
                <p className="text-sm text-[#231b18]/80 leading-relaxed">
                  We integrate secure third-party services to deliver seamless email routing and static site hosting:
                </p>
                <div className="space-y-2">
                  <div className="p-3 bg-[#faf7f2] border-l-4 border-[#231b18]">
                    <span className="text-xs font-bold text-[#231b18]">Cloudflare Pages & Edge Network:</span>
                    <span className="text-xs text-[#8c7d75] ml-2">Global static content delivery and DNS routing.</span>
                  </div>
                  <div className="p-3 bg-[#faf7f2] border-l-4 border-[#c59b27]">
                    <span className="text-xs font-bold text-[#231b18]">Web3Forms & Formspree API:</span>
                    <span className="text-xs text-[#8c7d75] ml-2">Secure encrypted processing of contact form message submissions.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-2xl font-serif font-bold text-[#231b18] flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#231b18] text-[#c59b27] text-sm font-bold flex items-center justify-center border border-[#c59b27]/30">5</span>
                <span>Your Data Rights</span>
              </h2>
              <p className="text-sm text-[#231b18]/80 leading-relaxed pl-11">
                You have the right to request access to, correction of, or permanent deletion of any message or contact information you have previously transmitted.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 pt-4 border-t-2 border-[#231b18]/10">
              <h2 className="text-2xl font-serif font-bold text-[#231b18] flex items-center space-x-3">
                <span className="w-8 h-8 rounded-full bg-[#231b18] text-[#c59b27] text-sm font-bold flex items-center justify-center border border-[#c59b27]/30">6</span>
                <span>Contact Information</span>
              </h2>
              <p className="text-sm text-[#231b18]/80 leading-relaxed pl-11">
                To exercise your data privacy rights or inquire about this policy, please reach out to:
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
