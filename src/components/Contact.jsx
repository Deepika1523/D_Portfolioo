import React, { useState } from 'react';
import { personalData } from '../data/content';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e3441cf1-45ea-4028-98e9-d91206dfa9c0",
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          to_email: personalData.email,
        }),
      });

      const resData = await response.json();

      if (response.ok && (resData.success || resData.ok)) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const fallbackResp = await fetch(personalData.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject || 'Portfolio Message',
            message: formData.message,
          }),
        });

        if (fallbackResp.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          window.location.href = `mailto:${personalData.email}?subject=${encodeURIComponent(
            formData.subject || 'Portfolio Inquiry'
          )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
          )}`;
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        }
      }
    } catch (error) {
      window.location.href = `mailto:${personalData.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Message'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#ffffff] border-t-2 border-[#e8e8e8]">
      <div className="max-w-[1140px] mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-[#1140c9] font-bold">06. Connect</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#171717] mt-2">Get In Touch</h2>
          <div className="w-16 h-[3px] bg-[#1140c9] mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#171717] mb-3">Let's build together</h3>
              <p className="text-sm text-[#818a91] font-normal leading-relaxed">
                Whether you have an inquiry about full-stack web applications, AI technologies, backend systems, or potential career opportunities — feel free to send a message.
              </p>
            </div>

            {/* Direct Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-5 bg-[#f6f6f6] border-2 border-[#171717]/15 shadow-2xs">
                <div className="p-3 bg-[#1140c9] text-[#ffffff] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1140c9]">Direct Email</h4>
                  <a href={`mailto:${personalData.email}`} className="text-sm font-bold text-[#171717] hover:text-[#1140c9] mt-0.5 block">
                    {personalData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 bg-[#f6f6f6] border-2 border-[#171717]/15 shadow-2xs">
                <div className="p-3 bg-[#1140c9] text-[#ffffff] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1140c9]">Phone / Mobile</h4>
                  <a href={`tel:${personalData.phone}`} className="text-sm font-bold text-[#171717] hover:text-[#1140c9] mt-0.5 block">
                    +91 {personalData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-5 bg-[#f6f6f6] border-2 border-[#171717]/15 shadow-2xs">
                <div className="p-3 bg-[#1140c9] text-[#ffffff] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1140c9]">Location</h4>
                  <p className="text-sm font-bold text-[#171717] mt-0.5">
                    {personalData.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center space-x-4">
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 bg-[#ffffff] border-2 border-[#171717]/20 text-[#171717] text-xs uppercase font-bold tracking-wider hover:bg-[#1140c9] hover:border-[#1140c9] hover:text-[#ffffff] transition-all duration-300 shadow-2xs"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-4 py-2.5 bg-[#ffffff] border-2 border-[#171717]/20 text-[#171717] text-xs uppercase font-bold tracking-wider hover:bg-[#1140c9] hover:border-[#1140c9] hover:text-[#ffffff] transition-all duration-300 shadow-2xs"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Interactive Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#ffffff] p-8 sm:p-10 border-2 border-[#171717]/15 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#171717] mb-6">Send A Message</h3>

              {status === 'success' ? (
                <div className="p-6 bg-[#f6f6f6] border-2 border-[#1140c9] space-y-3 text-center animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-[#1140c9] mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-[#171717]">Message Sent Successfully!</h4>
                  <p className="text-xs text-[#818a91] font-normal">
                    Thank you for reaching out, {personalData.name} will respond to your message as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2 bg-[#1140c9] text-[#ffffff] text-xs uppercase font-bold tracking-wider hover:bg-[#0d319a] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="p-4 bg-[#ffffff] border-2 border-[#1140c9] flex items-start space-x-3 text-[#171717] text-xs font-bold">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#1140c9]" />
                      <div>
                        <p className="font-bold">Transmission Notice</p>
                        <p>{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-[#ffffff] border-2 border-[#171717]/20 text-sm text-[#171717] font-semibold focus:outline-none focus:border-[#1140c9] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-3 bg-[#ffffff] border-2 border-[#171717]/20 text-sm text-[#171717] font-semibold focus:outline-none focus:border-[#1140c9] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Opportunity / AI Consultation"
                      className="w-full px-4 py-3 bg-[#ffffff] border-2 border-[#171717]/20 text-sm text-[#171717] font-semibold focus:outline-none focus:border-[#1140c9] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#171717]">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your project details or inquiry here..."
                      className="w-full px-4 py-3 bg-[#ffffff] border-2 border-[#171717]/20 text-sm text-[#171717] font-semibold focus:outline-none focus:border-[#1140c9] transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-[#1140c9] text-[#ffffff] text-xs uppercase font-bold tracking-widest hover:bg-[#0d319a] disabled:opacity-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <a
                      href={`mailto:${personalData.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message || '')}`}
                      className="text-xs text-[#1140c9] hover:underline font-bold transition-colors"
                    >
                      Or click here to email directly via your mail app ({personalData.email})
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
