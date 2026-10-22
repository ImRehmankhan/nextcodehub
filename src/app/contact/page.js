'use client';
import { useState } from 'react';
import Link from 'next/link';
import { sendContactEmail } from '../actions/sendEmail';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');
    
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setErrorMsg('Something went wrong. Please try again or reach out directly via email.');
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again or reach out directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs sm:text-sm font-semibold mb-4 border border-primary-100">
            <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
            We&apos;re Here to Help
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Get in <span className="text-primary-600">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a question, feedback, or a feature request for our calculators? Drop a message below or connect with us directly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Contact Info (Left Side - 5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl p-7 sm:p-9 text-white shadow-xl shadow-gray-950/10 border border-gray-800 relative overflow-hidden">
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary-500/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
              
              <div className="relative z-10 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-2">Direct Contact Details</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Have a quick question or want to collaborate? Reach out via phone, email, or social media anytime.
                  </p>
                </div>

                {/* Contact Cards List */}
                <div className="space-y-4">
                  {/* Location Card */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/40 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/15 text-primary-400 flex items-center justify-center flex-shrink-0 border border-primary-500/20">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Location</p>
                      <p className="text-white font-medium text-base">Islamabad, Pakistan</p>
                      <div className="inline-flex items-center gap-1.5 mt-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Available for Remote Work
                      </div>
                    </div>
                  </div>

                  {/* Phone Card */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/40 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/15 text-primary-400 flex items-center justify-center flex-shrink-0 border border-primary-500/20">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Phone / WhatsApp</p>
                      <a 
                        href="tel:+923425221720" 
                        className="text-white hover:text-primary-400 transition-colors font-semibold text-base block"
                      >
                        +92-3425221720
                      </a>
                      <p className="text-xs text-gray-400 mt-1">Mon to Fri • 9:00 AM to 6:00 PM</p>
                    </div>
                  </div>

                  {/* Email Card */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/40 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/15 text-primary-400 flex items-center justify-center flex-shrink-0 border border-primary-500/20">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                      <a 
                        href="mailto:rehmanattock30@gmail.com" 
                        className="text-white hover:text-primary-400 transition-colors font-semibold text-sm sm:text-base break-all block"
                      >
                        rehmanattock30@gmail.com
                      </a>
                      <p className="text-xs text-gray-400 mt-1">Send me your query anytime!</p>
                    </div>
                  </div>
                </div>

                {/* Response Guarantee Badge */}
                <div className="p-4 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary-300 uppercase tracking-wider">Fast Response Time</p>
                    <p className="text-sm font-bold text-white">Within 24 Hours Guaranteed</p>
                  </div>
                </div>

                {/* Social Connect Profiles */}
                <div className="pt-4 border-t border-gray-800 space-y-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Connect on Social Media</p>
                  <div className="grid grid-cols-3 gap-2.5">
                    {/* Facebook */}
                    <a 
                      href="https://web.facebook.com/rehman.khan.246606" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Facebook Profile"
                      className="group flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#1877F2]/20 hover:border-[#1877F2]/50 hover:text-[#1877F2] transition-all text-center"
                    >
                      <svg className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span className="text-xs font-medium text-gray-300 group-hover:text-white">Facebook</span>
                    </a>

                    {/* GitHub */}
                    <a 
                      href="https://github.com/ImRehmankhan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="group flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 hover:border-white/40 hover:text-white transition-all text-center"
                    >
                      <svg className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                      <span className="text-xs font-medium text-gray-300 group-hover:text-white">GitHub</span>
                    </a>

                    {/* LinkedIn */}
                    <a 
                      href="https://www.linkedin.com/in/rehmankhan301b/?isSelfProfile=true" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="group flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 hover:text-[#0A66C2] transition-all text-center"
                    >
                      <svg className="w-5 h-5 mb-1.5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span className="text-xs font-medium text-gray-300 group-hover:text-white">LinkedIn</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Form (Right Side - 7 columns) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600 text-sm mb-8">
                Fill in your details and we will reply to your inbox within 24 hours.
              </p>

              {submitted && (
                <div className="mb-8 p-5 bg-emerald-50 text-emerald-800 rounded-2xl border border-emerald-200 flex items-start gap-3.5 animate-in fade-in duration-300">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Message sent successfully!</h3>
                    <p className="text-sm mt-0.5 text-emerald-700">
                      Thank you for reaching out, Rehman Khan will get back to you within 24 hours at <span className="font-semibold">{formData.email || 'your email'}</span>.
                    </p>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="mb-8 p-5 bg-red-50 text-red-800 rounded-2xl border border-red-200 flex items-start gap-3.5 animate-in fade-in duration-300">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Unable to send message</h3>
                    <p className="text-sm mt-0.5 text-red-700">{errorMsg}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3.5 bg-gray-50/70 text-gray-900 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. you@example.com"
                      className="w-full px-4 py-3.5 bg-gray-50/70 text-gray-900 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-800 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your query about?"
                    className="w-full px-4 py-3.5 bg-gray-50/70 text-gray-900 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your feedback, question, or feature request here..."
                    className="w-full px-4 py-3.5 bg-gray-50/70 text-gray-900 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-400"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-9 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all shadow-md shadow-primary-600/20 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}