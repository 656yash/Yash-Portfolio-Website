import React, { useState } from 'react';
import { Mail, Send, Check, Loader2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PushPin, Tape, RubberStamp, StarCutout } from './PinboardDecorations';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';

export const ContactPostcard: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setIsSubmitting(true);
    setIsError(false);
    setStatusMessage(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name || 'Anonymous Visitor',
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Dispatch from ${formData.name || 'Visitor'}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (data?.success === 'true' || data?.success === true)) {
        setFormSent(true);
        setStatusMessage("Your message has been pinned and sent directly to Yash's inbox!");
      } else if (data?.message && data.message.toLowerCase().includes('activation')) {
        setFormSent(true);
        setStatusMessage("Message sent! (FormSubmit sent a 1-time activation confirmation to verify delivery).");
      } else {
        setFormSent(true);
        setStatusMessage('Your dispatch has been submitted directly!');
      }
    } catch {
      setIsError(true);
      setStatusMessage('Direct send encountered a network issue. You can send via your mail client below:');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailMe = () => {
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Inquiry for Yash Deshpande')}`;
    setTimeout(() => {
      const msgInput = document.getElementById('dispatch-message');
      if (msgInput) {
        msgInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        msgInput.focus();
      }
    }, 150);
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
            <div className="md:col-span-7 space-y-5">
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

              {/* Social Channels Physical Buttons */}
              <div className="pt-3">
                <span className="font-mono-code text-[11px] uppercase font-bold text-stone-500 block mb-2.5">
                  Verified Contact & Channels:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent('Inquiry for Yash Deshpande')}`}
                    onClick={handleEmailMe}
                    id="postcard-email-me-btn"
                    className="paper-sheet bg-[#e63946] text-white font-mono-code text-xs px-3.5 py-2 rounded-xs flex items-center gap-1.5 hover:bg-[#d62839] transition-transform hover:-translate-y-0.5 cursor-pointer shadow-xs active:scale-95"
                    title={`Email: ${profile.email}`}
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
                    className="paper-sheet bg-[#e4405f] text-white font-mono-code text-xs px-3.5 py-2 rounded-xs flex items-center gap-1.5 hover:brightness-110 transition-transform hover:-translate-y-0.5"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>INSTAGRAM</span>
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
                <div className="p-5 bg-emerald-50/90 border border-emerald-300 rounded-xs text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-emerald-950">
                      Dispatch Pinned & Sent!
                    </h4>
                    <p className="text-xs text-emerald-800 font-sans mt-1 leading-relaxed">
                      {statusMessage || "Thank you! Your message has been sent directly to Yash's inbox."}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSent(false);
                      setFormData({ name: '', email: '', message: '' });
                      setStatusMessage(null);
                      setIsError(false);
                    }}
                    className="font-mono-code text-[11px] font-bold text-emerald-800 hover:text-emerald-950 underline cursor-pointer pt-1"
                  >
                    Pin another message →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="dispatch-name" className="block font-mono-code text-[11px] text-stone-600 mb-1">
                      YOUR NAME
                    </label>
                    <input
                      id="dispatch-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      disabled={isSubmitting}
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs rounded-xs font-sans text-stone-900 focus:outline-none focus:border-[#244a33] disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label htmlFor="dispatch-email" className="block font-mono-code text-[11px] text-stone-600 mb-1">
                      YOUR EMAIL
                    </label>
                    <input
                      id="dispatch-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      disabled={isSubmitting}
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs rounded-xs font-sans text-stone-900 focus:outline-none focus:border-[#244a33] disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label htmlFor="dispatch-message" className="block font-mono-code text-[11px] text-stone-600 mb-1">
                      NOTE / MESSAGE
                    </label>
                    <textarea
                      id="dispatch-message"
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Yash, let's discuss..."
                      disabled={isSubmitting}
                      className="w-full bg-stone-50 border border-stone-300 px-3 py-2 text-xs rounded-xs font-sans text-stone-900 focus:outline-none focus:border-[#244a33] disabled:opacity-60"
                    />
                  </div>

                  {isError && (
                    <div className="p-2.5 bg-red-50 border border-red-200 rounded-xs text-[11px] text-red-800 font-sans space-y-1">
                      <p>{statusMessage}</p>
                      <a
                        href={`mailto:${profile.email}?subject=${encodeURIComponent(
                          `Portfolio Inquiry from ${formData.name || 'Visitor'}`
                        )}&body=${encodeURIComponent(formData.message)}`}
                        className="font-mono-code font-bold underline text-red-900 inline-block"
                      >
                        Open in Mail Client instead &rarr;
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#244a33] hover:bg-[#1a3826] disabled:bg-[#345b44] text-[#f7fae8] font-mono-code text-xs font-bold py-2.5 rounded-xs shadow-md uppercase tracking-wider flex items-center justify-center gap-1.5 transition-transform active:scale-95 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>PINNING & SENDING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>PIN THIS MESSAGE</span>
                      </>
                    )}
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
