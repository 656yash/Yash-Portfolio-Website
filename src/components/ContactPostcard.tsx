import React, { useState } from 'react';
import { Mail, Send, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PushPin, Tape, RubberStamp, StarCutout } from './PinboardDecorations';
import { GithubIcon, LinkedinIcon, InstagramIcon, XIcon } from './SocialIcons';

export const ContactPostcard: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hello Yash,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from your portfolio pinboard.`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-8 border-t border-[#2d5f44] overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-12 left-10 hidden md:block">
        <StarCutout size={34} rotation="-rotate-12" />
      </div>
      <div className="absolute bottom-20 right-12 hidden md:block">
        <StarCutout size={28} rotation="rotate-12" />
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Airmail Envelope / Kraft Postcard Container */}
        <div className="relative paper-sheet paper-cream border-4 border-[#c8be9c] rounded-md p-6 sm:p-12 shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-300">
          <Tape position="top-left" angle="-4deg" width="w-28" />
          <Tape position="top-right" angle="3deg" width="w-28" />
          <PushPin color="red" className="-top-3 left-1/2 -translate-x-1/2" />

          {/* Airmail Strip Accent along top edge */}
          <div className="h-2 w-full bg-[repeating-linear-gradient(45deg,#d90429,#d90429_12px,#ffffff_12px,#ffffff_24px,#1d3557_24px,#1d3557_36px,#ffffff_36px,#ffffff_48px)] rounded-xs mb-8 opacity-80" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: Handwritten Note & Real Direct Links (7 cols) */}
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono-code text-[11px] uppercase font-bold tracking-widest bg-stone-900 text-stone-100 px-2.5 py-1 rounded-xs">
                  DISPATCH // REACH OUT
                </span>
                <RubberStamp text="OPEN FOR COLLAB" color="green" rotation="rotate-2" />
              </div>

              <h2 className="font-display font-black text-2xl sm:text-3xl text-stone-900 tracking-tight leading-snug">
                "Have an interesting problem? Let's build something meaningful."
              </h2>

              <p className="font-hand text-xl font-bold text-stone-700 leading-relaxed">
                Whether it's an exciting machine learning model, a data analytics challenge, an internship role, or a hackathon collaboration — my desk is always open.
              </p>

              {/* Direct Email Clipboard Box */}
              <div className="p-4 bg-white/90 border border-stone-300 rounded-xs flex flex-wrap items-center justify-between gap-3 shadow-xs">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 overflow-hidden hover:underline group cursor-pointer"
                  title="Click to email yash656deshpande@gmail.com"
                >
                  <Mail className="w-4 h-4 text-emerald-800 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-mono-code text-xs sm:text-sm font-bold text-stone-900 truncate">
                    {profile.email}
                  </span>
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="bg-[#244a33] hover:bg-[#1a3826] text-white px-3 py-1.5 rounded-xs font-mono-code text-xs font-bold flex items-center gap-1 transition-all active:scale-95 shrink-0 cursor-pointer"
                    title="Send email via mail client"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SEND</span>
                  </a>
                  <button
                    onClick={copyEmail}
                    className="bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 px-3 py-1.5 rounded-xs font-mono-code text-xs font-bold flex items-center gap-1 transition-all active:scale-95 shrink-0 cursor-pointer"
                    title="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>COPIED!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Channels Physical Buttons */}
              <div className="pt-2">
                <span className="font-mono-code text-[11px] uppercase font-bold text-stone-500 block mb-2">
                  Verified Contact & Channels:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="paper-sheet bg-[#e63946] text-white font-mono-code text-xs px-3.5 py-2 rounded-xs flex items-center gap-1.5 hover:bg-[#d62839] transition-transform hover:-translate-y-0.5 cursor-pointer shadow-xs"
                    title="Email: yash656deshpande@gmail.com"
                  >
                    <Mail className="w-4 h-4" />
                    <span>EMAIL ME</span>
                  </a>

                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-sheet bg-stone-900 text-white font-mono-code text-xs px-3.5 py-2 rounded-xs flex items-center gap-1.5 hover:bg-black transition-transform hover:-translate-y-0.5"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GITHUB</span>
                  </a>

                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-sheet bg-[#0077b5] text-white font-mono-code text-xs px-3.5 py-2 rounded-xs flex items-center gap-1.5 hover:brightness-110 transition-transform hover:-translate-y-0.5"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LINKEDIN</span>
                  </a>

                  <a
                    href={profile.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-sheet bg-[#e4405f] text-white font-mono-code text-xs px-3 py-2 rounded-xs flex items-center gap-1.5 hover:brightness-110 transition-transform hover:-translate-y-0.5"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>INSTAGRAM</span>
                  </a>

                  <a
                    href={profile.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="paper-sheet bg-black text-white font-mono-code text-xs px-3 py-2 rounded-xs flex items-center gap-1.5 hover:brightness-110 transition-transform hover:-translate-y-0.5"
                  >
                    <XIcon className="w-4 h-4" />
                    <span>X</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Stamp & Quick Note Form (5 cols) */}
            <div className="md:col-span-5 bg-white/80 p-5 rounded-xs border border-stone-300 shadow-xs relative">
              {/* Postage Stamp */}
              <div className="absolute -top-3 -right-3 w-14 h-16 bg-[#faf8f5] border-2 border-dashed border-[#b82a32] p-1 shadow-md rotate-6 flex flex-col items-center justify-between text-center select-none pointer-events-none">
                <span className="font-mono-code text-[8px] text-red-700 font-bold">INDIA POST</span>
                <span className="font-mono-code text-xs font-black text-stone-800">MITAOE</span>
                <span className="font-mono-code text-[8px] text-stone-500">2028</span>
              </div>

              <h3 className="font-mono-code text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">
                Send a Dispatch
              </h3>

              {formSent ? (
                <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xs text-center space-y-2">
                  <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="font-display font-bold text-sm text-emerald-950">
                    Dispatch Prepared!
                  </p>
                  <p className="text-xs text-emerald-800 font-sans">
                    Thank you! You can also email directly at{' '}
                    <a
                      href={`mailto:${profile.email}`}
                      className="underline font-mono-code font-bold"
                    >
                      {profile.email}
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block font-mono-code text-[11px] text-stone-600 mb-1">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs rounded-xs font-sans text-stone-900 focus:outline-none focus:border-[#244a33]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-code text-[11px] text-stone-600 mb-1">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs rounded-xs font-sans text-stone-900 focus:outline-none focus:border-[#244a33]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-code text-[11px] text-stone-600 mb-1">
                      NOTE / MESSAGE
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Yash, let's discuss..."
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs rounded-xs font-sans text-stone-900 focus:outline-none focus:border-[#244a33]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#244a33] hover:bg-[#1a3826] text-[#f7fae8] font-mono-code text-xs font-bold py-2.5 rounded-xs shadow-md uppercase tracking-wider flex items-center justify-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>PIN THIS MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <footer className="mt-16 text-center text-xs font-mono-code text-[#a5c2b0] space-y-2">
          <p>
            Designed & Assembled as an Interactive Creative Pinboard for Yash Deshpande.
          </p>
          <p className="opacity-80">
            MIT Academy of Engineering (MITAOE), Pune · Batch 2024–2028 ·{' '}
            <a href={`mailto:${profile.email}`} className="underline hover:text-white transition-colors">
              {profile.email}
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
};
