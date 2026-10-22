import React, { useState } from 'react';
import { Briefcase, Award, CheckCircle2, X, ShieldCheck, ExternalLink } from 'lucide-react';
import type { Achievement } from '../data/portfolioData';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PushPin, Tape, BinderClip, RubberStamp } from './PinboardDecorations';

export const ExperienceAndAchievements: React.FC = () => {
  const { experience, achievements } = PORTFOLIO_DATA;
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-8 border-t border-[#2d5f44] overflow-hidden">
      <div className="max-w-6xl mx-auto w-full space-y-20">
        {/* --- PART 1: RELIANCE DATA SCIENCE INTERNSHIP --- */}
        <div>
          <div className="relative paper-sheet paper-white p-6 sm:p-8 rounded-sm border border-stone-200/90 max-w-xl mb-8 shadow-md -rotate-1">
            <PushPin color="red" className="-top-3 left-6" />
            <div className="flex items-center gap-2 font-mono-code text-xs uppercase font-bold text-stone-500 mb-1">
              <Briefcase className="w-4 h-4 text-emerald-700" />
              <span>INDUSTRY EXPERIENCE // SECTION 03</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
              RELIANCE INTERNSHIP
            </h2>
            <p className="font-hand text-xl font-bold text-stone-600 mt-1">
              Data science & analytics workflows in industrial enterprise environments.
            </p>
          </div>

          {/* Reliance Document / Internship Certificate Paper */}
          <div className="relative paper-sheet paper-cream border-2 border-[#d5caa8] p-6 sm:p-10 rounded-sm shadow-xl max-w-4xl rotate-1">
            <Tape position="top-left" angle="-3deg" width="w-28" />
            <Tape position="top-right" angle="2deg" width="w-28" />
            <BinderClip className="-top-5 left-1/2 -translate-x-1/2" rotation="-rotate-3" />

            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-dashed border-stone-300">
              <div>
                <span className="font-mono-code text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-xs inline-block mb-1">
                  {experience.statusBadge}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-stone-900">
                  {experience.role}
                </h3>
                <p className="font-hand text-xl font-bold text-stone-700">
                  {experience.organization} · {experience.year}
                </p>
              </div>

              <RubberStamp text="SCHEDULED 2026" color="green" rotation="rotate-3" />
            </div>

            <p className="text-stone-800 text-sm sm:text-base leading-relaxed mt-4 font-medium">
              {experience.overview}
            </p>

            {/* Key Workflows */}
            <div className="mt-6 pt-4 border-t border-stone-300/80">
              <span className="font-mono-code text-xs uppercase font-bold text-stone-600 block mb-3">
                Core Analytical & Engineering Responsibilities:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {experience.keyWorkflows.map((workflow, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 bg-white/70 p-3 rounded-xs border border-stone-200 text-xs sm:text-sm text-stone-800 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{workflow}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech chips & Detail Trigger */}
            <div className="mt-6 pt-4 border-t border-stone-300/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {experience.technologies.map((t) => (
                  <span
                    key={t}
                    className="bg-white text-stone-800 font-mono-code text-xs px-2.5 py-1 rounded-xs border border-stone-300 shadow-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={experience.exploreUrl || "https://drive.google.com/drive/folders/1_tjS0fuToJl0Og2Bb3zhYprCEZs6eCyE?usp=drive_link"}
                target="_blank"
                rel="noopener noreferrer"
                className="paper-sheet bg-[#244a33] hover:bg-[#1a3826] text-[#f7fae8] font-mono-code text-xs font-bold uppercase px-4 py-2.5 rounded-xs shadow-md transition-transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2 cursor-pointer"
                title="Explore Reliance Internship Artifacts & Telemetry on Google Drive"
              >
                <span>EXPLORE EXPERIENCE</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-300" />
              </a>
            </div>

          </div>
        </div>

        {/* --- PART 2: ACHIEVEMENTS & HACKATHONS --- */}
        <div id="achievements">
          <div className="relative paper-sheet paper-white p-6 sm:p-8 rounded-sm border border-stone-200/90 max-w-xl mb-8 shadow-md rotate-1">
            <PushPin color="gold" className="-top-3 right-6" />
            <div className="flex items-center gap-2 font-mono-code text-xs uppercase font-bold text-stone-500 mb-1">
              <Award className="w-4 h-4 text-amber-700" />
              <span>COMPETITIVE MERIT // SECTION 04</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
              ACHIEVEMENTS & HACKATHONS
            </h2>
            <p className="font-hand text-xl font-bold text-stone-600 mt-1">
              Badges, event passes, and verified awards earned under hackathon pressure.
            </p>
          </div>

          {/* Grid of Badges & Event Passes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item) => {
              const isWinner = item.highlight;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedAchievement(item)}
                  className={`relative paper-sheet ${
                    isWinner
                      ? 'paper-yellow border-2 border-amber-400 -rotate-2 scale-[1.02]'
                      : 'paper-white border border-stone-200/90 ' + item.rotation
                  } p-6 rounded-sm shadow-md hover:rotate-0 hover:scale-105 transition-all cursor-pointer flex flex-col justify-between`}
                >
                  {isWinner ? (
                    <PushPin color="red" className="-top-3 left-6" />
                  ) : (
                    <Tape position="top-right" angle="-2deg" width="w-20" />
                  )}

                  <div>
                    {/* Badge Pill */}
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`font-mono-code text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-xs tracking-wider ${
                          isWinner
                            ? 'bg-[#e63946] text-white shadow-xs'
                            : 'bg-stone-900 text-stone-100'
                        }`}
                      >
                        {item.badgeLabel}
                      </span>
                      {isWinner && (
                        <div className="flex items-center gap-1 font-mono-code text-xs text-rose-800 font-bold">
                          <ShieldCheck className="w-4 h-4" />
                          <span>1ST PLACE</span>
                        </div>
                      )}
                    </div>

                    {/* Title & Organization */}
                    <h3 className="font-display font-bold text-xl text-stone-950 mb-1">
                      {item.title}
                    </h3>
                    <p className="font-hand text-lg font-bold text-stone-700 mb-3">
                      {item.organization}
                    </p>

                    <p className="text-stone-700 text-xs leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-dashed border-stone-300 flex items-center justify-between text-xs font-mono-code">
                    <span className="font-bold underline text-stone-800 hover:text-black">
                      View Event Pass &rarr;
                    </span>
                    {item.team && (
                      <span className="text-[11px] bg-white/80 px-2 py-0.5 rounded-xs border border-stone-300">
                        {item.team}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
          onClick={() => setSelectedAchievement(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg paper-white border-2 border-stone-300 rounded-sm p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <Tape position="top-left" angle="-3deg" width="w-24" />
            <PushPin color="gold" className="-top-3 right-6" />

            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 bg-stone-900 text-white p-1.5 rounded-xs hover:bg-stone-800 font-mono-code text-xs cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="font-mono-code text-xs font-bold uppercase tracking-wider bg-emerald-800 text-emerald-100 px-2.5 py-1 rounded-xs inline-block mb-3">
              {selectedAchievement.badgeLabel}
            </span>

            <h3 className="font-display font-extrabold text-2xl text-stone-900 mb-1">
              {selectedAchievement.title}
            </h3>
            <p className="font-hand text-xl font-bold text-stone-700 mb-4">
              {selectedAchievement.organization}
            </p>

            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xs mb-4 text-sm text-stone-800 leading-relaxed">
              {selectedAchievement.description}
            </div>

            {selectedAchievement.projectAssociated && (
              <div className="mb-4 font-mono-code text-xs text-stone-700 bg-amber-50 p-3 rounded-xs border border-amber-200">
                <span className="font-bold">Associated Project: </span>
                <span>{selectedAchievement.projectAssociated}</span>
              </div>
            )}

            <button
              onClick={() => setSelectedAchievement(null)}
              className="w-full bg-[#244a33] text-[#f7fae8] font-mono-code text-xs font-bold py-2.5 rounded-xs shadow-md uppercase tracking-wider hover:bg-[#1a3826] cursor-pointer"
            >
              Close Event Record
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
