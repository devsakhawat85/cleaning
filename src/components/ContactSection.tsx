import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Instagram, Linkedin, Send, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import { SITE_INFO } from '../data/siteData';
import { QuoteFormData } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService = '' }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    facilityType: '',
    serviceNeeded: prefilledService || 'General Office Cleaning',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate prompt and verified submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#003D79] mb-3">
            Contact & Free Estimate
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display text-balance mb-4">
            Let's Talk About Your Cleaning Needs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Fill out the form below to receive a fast, free estimate for your facility, or contact Winston and the team directly by phone or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Lead Generation Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-900">
                    Estimate Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{formData.firstName}</span>. Our management team will review your {formData.serviceNeeded} specifications and reach out within 1 business day.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          company: '',
                          facilityType: '',
                          serviceNeeded: 'General Office Cleaning',
                          message: '',
                        });
                      }}
                      className="px-5 py-2.5 text-xs font-bold text-[#003D79] bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        First Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="e.g. John"
                        className="w-full px-3.5 py-2.5 bg-white text-sm text-slate-900 rounded-xl border border-slate-300 focus:border-[#003D79] focus:ring-1 focus:ring-[#003D79] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Last Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="e.g. Smith"
                        className="w-full px-3.5 py-2.5 bg-white text-sm text-slate-900 rounded-xl border border-slate-300 focus:border-[#003D79] focus:ring-1 focus:ring-[#003D79] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 bg-white text-sm text-slate-900 rounded-xl border border-slate-300 focus:border-[#003D79] focus:ring-1 focus:ring-[#003D79] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(609) 000-0000"
                        className="w-full px-3.5 py-2.5 bg-white text-sm text-slate-900 rounded-xl border border-slate-300 focus:border-[#003D79] focus:ring-1 focus:ring-[#003D79] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company / Facility Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization or Facility"
                        className="w-full px-3.5 py-2.5 bg-white text-sm text-slate-900 rounded-xl border border-slate-300 focus:border-[#003D79] focus:ring-1 focus:ring-[#003D79] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="serviceNeeded" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service Needed <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        required
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white text-sm text-slate-900 rounded-xl border border-slate-300 focus:border-[#003D79] focus:ring-1 focus:ring-[#003D79] transition-colors"
                      >
                        <option value="General Office Cleaning">General Office Cleaning</option>
                        <option value="School Cleaning">School Cleaning</option>
                        <option value="Gym & Fitness Center Cleaning">Gym & Fitness Center Cleaning</option>
                        <option value="Electrostatic Disinfecting">Electrostatic Disinfecting</option>
                        <option value="Warehouse & Logistics Facility">Warehouse & Logistics Facility</option>
                        <option value="Custom Commercial Scope">Custom Commercial Scope</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Tell Us About Your Facility (Approx. Sq. Ft., Schedule, Special Requirements)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your facility type, frequency (daily, weekly, etc.), or specific cleaning requirements..."
                      className="w-full px-3.5 py-2.5 bg-white text-sm text-slate-900 rounded-xl border border-slate-300 focus:border-[#003D79] focus:ring-1 focus:ring-[#003D79] transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 text-sm font-bold text-[#002244] bg-[#FCB913] hover:bg-[#e5a50a] active:scale-[0.99] rounded-xl shadow-md transition-all disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Submitting Request...' : 'Request My Free Estimate'}</span>
                  </button>

                  <p className="text-center text-xs text-slate-500 mt-2">
                    We respect your privacy. No spam. You will receive a direct reply from our local Mercer County management.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 font-display">
                Direct Contact Information
              </h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${SITE_INFO.phoneRaw}`}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#003D79] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E6F0FA] flex items-center justify-center text-[#003D79] shrink-0 group-hover:bg-[#FCB913] group-hover:text-[#002244] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500">Phone (Call or Text)</span>
                    <span className="text-base font-bold text-slate-900 group-hover:text-[#003D79] tabular-nums">
                      {SITE_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#003D79] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E6F0FA] flex items-center justify-center text-[#003D79] shrink-0 group-hover:bg-[#FCB913] group-hover:text-[#002244] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-semibold text-slate-500">Direct Inquiries</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#003D79] truncate block">
                      {SITE_INFO.email}
                    </span>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F0FA] flex items-center justify-center text-[#003D79] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500">Commercial Operating Hours</span>
                    <span className="text-sm font-bold text-slate-900 block">
                      {SITE_INFO.hours}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#E6F0FA] flex items-center justify-center text-[#003D79] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500">Primary Service Area</span>
                    <span className="text-sm font-bold text-slate-900 block">
                      {SITE_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Existing Google Form Quick Actions */}
            <div className="p-6 rounded-2xl bg-[#E6F0FA]/70 border border-[#003D79]/20 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#003D79]">
                Existing Client & Work Order Portal
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Already a client with a current service agreement? Submit a quick work order or schedule your upcoming walkthrough online.
              </p>
              
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={SITE_INFO.social.workOrderForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-[#003D79] hover:border-[#003D79] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#003D79]" />
                    <span>Submit A Work Order (Google Form)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={SITE_INFO.social.walkthroughForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-[#003D79] hover:border-[#003D79] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#003D79]" />
                    <span>Official Walkthrough Request Form</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2 flex items-center gap-4">
              <span className="text-xs font-semibold text-slate-500">Follow JMD:</span>
              <a
                href={SITE_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#003D79] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#003D79]" />
                <span>{SITE_INFO.social.instagramHandle}</span>
              </a>
              <a
                href={SITE_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#003D79] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#003D79]" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
