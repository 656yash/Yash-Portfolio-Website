import React from 'react';
import { Cpu, GraduationCap, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PushPin, Tape, StarCutout, RubberStamp } from './PinboardDecorations';

export const SkillsAndEducation: React.FC = () => {
  const { skills, education } = PORTFOLIO_DATA;

  const skillGroups = [
    { title: 'PROGRAMMING LANGUAGES', data: skills.programming, paper: 'paper-white', rot: '-rotate-1', pin: 'red' as const },
    { title: 'DATA SCIENCE & ANALYTICS', data: skills.dataScience, paper: 'paper-cream', rot: 'rotate-1', pin: 'gold' as const },
    { title: 'MACHINE LEARNING & MODELING', data: skills.machineLearning, paper: 'paper-yellow', rot: '-rotate-2', pin: 'cyan' as const },
    { title: 'DATABASES & STORAGE', data: skills.databases, paper: 'paper-white', rot: 'rotate-2', pin: 'silver' as const },
    { title: 'TOOLS & ENVIRONMENTS', data: skills.tools, paper: 'paper-kraft', rot: 'rotate-1', pin: 'gold' as const },
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-8 border-t border-[#2d5f44] overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 right-10 hidden md:block">
        <StarCutout size={30} rotation="rotate-6" />
      </div>

      <div className="max-w-6xl mx-auto w-full space-y-20">
        {/* --- PART 1: SKILLS PINBOARD --- */}
        <div>
          {/* Section Heading Card */}
          <div className="relative paper-sheet paper-white p-6 sm:p-8 rounded-sm border border-stone-200/90 max-w-xl mb-10 shadow-md -rotate-1">
            <PushPin color="red" className="-top-3 left-6" />
            <div className="flex items-center gap-2 font-mono-code text-xs uppercase font-bold text-stone-500 mb-1">
              <Cpu className="w-4 h-4 text-emerald-700" />
              <span>TECHNICAL ARSENAL // SECTION 05</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
              SKILLS & TOOLING BOARD
            </h2>
            <p className="font-hand text-xl font-bold text-stone-600 mt-1">
              No generic percentage bars. Real capabilities backed by hands-on engineering.
            </p>
          </div>

          {/* Grid of Skill Index Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className={`relative paper-sheet ${group.paper} p-6 rounded-sm border ${
                  group.paper === 'paper-kraft' ? 'border-[#a4774b] text-white' : 'border-stone-300 text-stone-900'
                } ${group.rot} hover:rotate-0 hover:scale-[1.02] transition-all duration-300 shadow-md flex flex-col justify-between`}
              >
                <PushPin color={group.pin} className="-top-3 right-6" />

                <div>
                  <h3
                    className={`font-mono-code text-xs font-black uppercase tracking-wider mb-4 pb-2 border-b ${
                      group.paper === 'paper-kraft' ? 'border-white/20 text-amber-200' : 'border-stone-300 text-stone-800'
                    }`}
                  >
                    {group.title}
                  </h3>

                  <div className="space-y-3">
                    {group.data.map((item) => (
                      <div key={item.name} className="flex flex-col">
                        <div className="flex items-center justify-between">
                          <span
                            className={`font-display font-bold text-sm ${
                              group.paper === 'paper-kraft' ? 'text-white' : 'text-stone-900'
                            }`}
                          >
                            {item.name}
                          </span>
                          <span
                            className={`font-mono-code text-[10px] px-1.5 py-0.5 rounded-xs ${
                              item.level === 'Core'
                                ? group.paper === 'paper-kraft'
                                  ? 'bg-white/20 text-white'
                                  : 'bg-[#244a33] text-[#f7fae8]'
                                : 'bg-amber-400/40 text-amber-950 font-bold'
                            }`}
                          >
                            {item.level}
                          </span>
                        </div>
                        <span
                          className={`text-xs ${
                            group.paper === 'paper-kraft' ? 'text-stone-300' : 'text-stone-600'
                          }`}
                        >
                          {item.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-stone-400/30 flex items-center justify-between font-mono-code text-[11px] opacity-75">
                  <span>MITAOE Curriculum & Labs</span>
                  <span>Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART 2: EDUCATION & CERTIFICATIONS --- */}
        <div id="education">
          <div className="relative paper-sheet paper-white p-6 sm:p-8 rounded-sm border border-stone-200/90 max-w-xl mb-10 shadow-md rotate-1">
            <PushPin color="gold" className="-top-3 right-6" />
            <div className="flex items-center gap-2 font-mono-code text-xs uppercase font-bold text-stone-500 mb-1">
              <GraduationCap className="w-4 h-4 text-emerald-700" />
              <span>ACADEMIC FOUNDATION & VISION // SECTION 06</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
              EDUCATION & ASPIRATIONS
            </h2>
            <p className="font-hand text-xl font-bold text-stone-600 mt-1">
              Formal engineering foundation and personal philosophy on building impactful technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Education Notebook Page (7 cols) */}
            <div className="lg:col-span-7 relative paper-sheet paper-cream border-2 border-[#d5caa8] p-6 sm:p-8 rounded-sm shadow-xl -rotate-1">
              <Tape position="top-left" angle="-3deg" width="w-28" />
              <PushPin color="red" className="-top-3 right-8" />

              <div className="flex items-center justify-between pb-3 mb-4 border-b border-dashed border-stone-300">
                <span className="font-mono-code text-xs uppercase font-bold text-stone-600">
                  DEGREE & SCHOOL RECORDS
                </span>
                <RubberStamp text="AUTHENTIC" color="green" rotation="rotate-1" />
              </div>

              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white/80 border border-stone-200 rounded-xs shadow-xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h3 className="font-display font-extrabold text-lg text-stone-900">
                        {edu.degree}
                      </h3>
                      {edu.score && (
                        <span className="font-mono-code text-xs font-bold bg-[#ffea55] text-stone-950 px-2 py-0.5 rounded-xs border border-amber-300">
                          SCORE: {edu.score}
                        </span>
                      )}
                    </div>
                    <p className="font-hand text-lg font-bold text-stone-700">
                      {edu.institution}
                    </p>
                    <div className="flex items-center justify-between text-xs font-mono-code text-stone-500 mt-2 pt-2 border-t border-stone-200">
                      <span>{edu.timeline}</span>
                      {edu.focus && <span>{edu.focus}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visionary Note: Where I Want to Go (5 cols) */}
            <div className="lg:col-span-5 relative paper-sheet paper-kraft border-2 border-[#9e6f42] p-6 sm:p-8 rounded-sm shadow-2xl rotate-1 text-[#faf5ed]">
              <Tape position="top-right" angle="2deg" width="w-24" />
              <PushPin color="gold" className="-top-3 left-6" />

              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#9e6f42]/70">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span className="font-mono-code text-xs uppercase font-bold text-amber-200 tracking-wider">
                    PERSONAL MANIFESTO // VISION
                  </span>
                </div>
                <RubberStamp text="ASPIRATION" color="amber" rotation="-rotate-3" />
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-4">
                Where I Want to Go
              </h3>

              <div className="space-y-4 text-stone-100 font-medium text-sm sm:text-base leading-relaxed">
                <p className="border-l-3 border-amber-300 pl-3.5 py-1.5 italic text-amber-100 font-semibold bg-black/25 rounded-r-xs shadow-inner">
                  "I want to build things that go beyond code using data, and technology to solve problems that actually matter."
                </p>
                <p className="leading-relaxed text-stone-200">
                  I want to keep exploring, turn curious ideas into real products, and create things that make a difference.
                </p>
                <p className="leading-relaxed text-stone-200">
                  I don’t have every step figured out yet, but I know I want to keep building, learning, and pushing what’s possible.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-[#a4774b]/80 flex items-center justify-between">
                <span className="font-hand text-2xl font-bold text-amber-200">
                  — Yash Deshpande
                </span>
                <span className="font-mono-code text-[11px] font-bold text-amber-100 uppercase tracking-widest bg-black/35 px-2.5 py-1 rounded-xs border border-amber-300/40 shadow-xs">
                  BUILDER // MITAOE '28
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
