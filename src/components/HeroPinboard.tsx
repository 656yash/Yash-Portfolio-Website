import React from 'react';
import { ArrowDownRight, Terminal, Sparkles, MapPin, GraduationCap, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  PushPin,
  Tape,
  PolaroidPhoto,
  StarCutout,
  ChicletKeyboard,
  ErgonomicMouse,
  EarphonesCable,
} from './PinboardDecorations';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface Props {
  onExploreWork: () => void;
  onOpenResume: () => void;
  onContact: () => void;
}

export const HeroPinboard: React.FC<Props> = ({
  onExploreWork,
  onOpenResume,
  onContact,
}) => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="hero" className="relative min-h-[92dvh] w-full pt-8 pb-16 px-4 sm:px-8 overflow-hidden flex flex-col justify-center">
      {/* Background Decor Items - Desktop Floating Tactile Cutouts */}
      <div className="absolute top-10 left-6 hidden lg:block select-none pointer-events-none">
        <ChicletKeyboard className="-rotate-12 hover:rotate-0 transition-transform duration-300" />
      </div>

      <div className="absolute top-1/2 left-8 hidden xl:block select-none pointer-events-none">
        <ErgonomicMouse className="-rotate-6" />
      </div>

      <div className="absolute top-20 right-10 hidden xl:block select-none pointer-events-none">
        <EarphonesCable className="rotate-12 opacity-90" />
      </div>

      <div className="absolute top-8 right-1/4 hidden md:block">
        <StarCutout size={34} rotation="rotate-12" />
      </div>
      <div className="absolute bottom-16 left-1/4 hidden md:block">
        <StarCutout size={28} rotation="-rotate-6" />
      </div>
      <div className="absolute top-1/3 right-12 hidden lg:block">
        <StarCutout size={30} rotation="rotate-45" />
      </div>

      {/* Main Composition Layout */}
      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Big Typographic Paper Sheet & Bio Notes (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Main Giant Identity Sheet (White textured paper, rotated) */}
          <div className="relative paper-sheet paper-white p-6 sm:p-9 rounded-sm border border-stone-200/90 -rotate-1 hover:rotate-0 transition-transform duration-300">
            <Tape position="top-left" angle="-6deg" width="w-28" />
            <Tape position="top-right" angle="4deg" width="w-24" />
            <PushPin color="red" className="top-3 right-6" />

            {/* Tagline Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="font-mono-code text-[11px] font-bold uppercase tracking-widest bg-stone-900 text-stone-100 px-2.5 py-1 rounded-xs">
                PORTFOLIO DOSSIER
              </span>
              <span className="font-hand text-lg text-emerald-800 font-bold">
                @MITAOE Pune
              </span>
            </div>

            {/* Name Heading with layered Kraft & Yellow paper scraps */}
            <div className="space-y-2 mb-4">
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter text-stone-950 leading-[0.95]">
                YASH DESHPANDE
              </h1>

              {/* Layered Paper Labels for Domains */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="paper-sheet paper-kraft font-display font-black text-xs sm:text-sm tracking-wider uppercase px-3 py-1.5 rounded-xs rotate-1 inline-block shadow-sm">
                  AI / ML
                </span>
                <span className="paper-sheet paper-yellow font-display font-black text-xs sm:text-sm tracking-wider uppercase px-3 py-1.5 rounded-xs -rotate-2 inline-block shadow-sm border border-amber-300">
                  DATA SCIENCE
                </span>
                <span className="paper-sheet bg-stone-900 text-stone-100 font-mono-code font-bold text-xs sm:text-sm tracking-wider uppercase px-3 py-1.5 rounded-xs rotate-1 inline-block shadow-sm">
                  SOFTWARE DEV
                </span>
              </div>
            </div>

            {/* Core Headline */}
            <p className="font-display font-medium text-lg sm:text-xl text-stone-800 tracking-tight leading-snug mt-3">
              "{profile.headline}"
            </p>

            <p className="font-hand text-stone-600 text-xl font-bold mt-1">
              — {profile.subHeadline}
            </p>

            {/* Primary Action Buttons as Taped Paper Labels */}
            <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-dashed border-stone-300">
              <button
                onClick={onExploreWork}
                className="paper-sheet bg-[#244a33] hover:bg-[#1a3826] text-[#f7fae8] font-mono-code font-bold text-xs uppercase px-5 py-3 rounded-xs shadow-md flex items-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>

              <button
                id="hero-resume-btn"
                data-testid="hero-resume-btn"
                onClick={onOpenResume}
                className="paper-sheet paper-kraft hover:brightness-110 text-white font-mono-code font-bold text-xs uppercase px-5 py-3 rounded-xs shadow-md transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-[#b07f4f]"
              >
                VIEW RESUME
              </button>

              <button
                onClick={onContact}
                className="paper-sheet paper-yellow hover:brightness-105 text-stone-950 font-mono-code font-bold text-xs uppercase px-5 py-3 rounded-xs shadow-md transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-amber-400"
              >
                CONTACT ME
              </button>
            </div>
          </div>

          {/* About Me Pinned Note (Canary Yellow sticky note with handwriting accent) */}
          <div className="relative paper-sheet paper-yellow p-5 sm:p-6 rounded-xs border border-amber-300 rotate-1 shadow-md">
            <PushPin color="cyan" className="-top-3 left-8" />
            <div className="flex items-center gap-2 mb-2 font-mono-code text-xs uppercase font-bold text-amber-950">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <span>ABOUT ME // NOTE</span>
            </div>
            <p className="text-stone-900 text-sm sm:text-base leading-relaxed font-sans font-medium">
              {profile.bioNote}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-mono-code text-stone-800 pt-2 border-t border-amber-400/60">
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-stone-700" />
                <span>B.Tech IT (Batch 2024–2028)</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-stone-700" />
                <span>Pune, India</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Polaroid Portrait, Terminal Snippet & Hackathon Winner Badge (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center sm:items-start lg:items-center gap-6">
          {/* Polaroid Instant Photo with Real Portrait */}
          <div className="relative group">
            <Tape position="top" angle="-1deg" width="w-24" />
            <PushPin color="gold" className="-top-2 right-4" />
            <PolaroidPhoto
              src={profile.avatar}
              alt="Yash Deshpande portrait"
              caption="Yash Deshpande"
              date="MITAOE IT 28"
              rotation="rotate-2 group-hover:rotate-0 transition-transform duration-300"
            />
          </div>

          {/* Miniature Terminal / Active Sensor Telemetry Scrap Note */}
          <div className="relative paper-sheet paper-dark text-emerald-400 p-4 rounded-xs border border-stone-700 w-full max-w-sm -rotate-1 font-mono-code text-xs shadow-lg">
            <PushPin color="silver" className="-top-3 left-4" />
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800 text-[10px] text-stone-400">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-emerald-400" />
                <span>sensor_impulse_telemetry.py</span>
              </div>
              <span className="text-emerald-500 font-bold">LIVE</span>
            </div>
            <div className="space-y-1 text-[11px] leading-relaxed text-emerald-300">
              <p className="text-stone-400">$ python -m model.evaluate --task=choking_detection</p>
              <p className="text-stone-300">&gt; Ingesting differential pressure feed (500Hz)...</p>
              <p className="text-amber-300">&gt; Feature extract: Variance=0.082 | Spectral Drift=14.2%</p>
              <p className="text-emerald-400 font-bold">&gt; Status: Inferred Early Choking Alert in Line #4</p>
            </div>
          </div>


          {/* Social Quick Paper Pins */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="paper-sheet paper-white p-2.5 rounded-xs border border-stone-300 text-stone-900 hover:text-black hover:scale-110 transition-transform shadow-sm"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="paper-sheet paper-white p-2.5 rounded-xs border border-stone-300 text-blue-700 hover:text-blue-900 hover:scale-110 transition-transform shadow-sm"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                profile.email
              )}&su=${encodeURIComponent('Portfolio Inquiry - Yash Deshpande')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                if (isMobile) {
                  e.preventDefault();
                  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
                    'Portfolio Inquiry - Yash Deshpande'
                  )}`;
                }
              }}
              className="paper-sheet paper-white p-2.5 rounded-xs border border-stone-300 text-red-600 hover:text-red-800 hover:scale-110 transition-transform shadow-sm"
              aria-label="Email Yash"
              title={`Email: ${profile.email}`}
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
