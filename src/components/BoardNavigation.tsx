import React from 'react';
import { FileText, Send } from 'lucide-react';
import { PushPin } from './PinboardDecorations';

interface Props {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const BoardNavigation: React.FC<Props> = ({
  activeSection,
  onNavigate,
  onOpenResume,
}) => {
  const navItems = [
    { id: 'hero', label: 'ABOUT ME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'achievements', label: 'ACHIEVEMENTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#193826]/85 border-b border-[#2d5f44] py-3 px-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Yash Brand Pinned Note */}
        <div
          onClick={() => onNavigate('hero')}
          className="cursor-pointer group flex items-center gap-2 relative bg-[#faf8f5] px-3.5 py-1.5 rounded-xs border border-stone-300 shadow-md transform -rotate-1 hover:rotate-0 transition-all active:scale-95"
        >
          <PushPin color="red" className="-top-3 left-2" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="font-display font-bold text-sm tracking-tight text-stone-900">
            YASH.PINBOARD
          </span>
          <span className="font-mono-code text-[10px] text-stone-500 hidden sm:inline">
            // PUNE, IN
          </span>
        </div>

        {/* Center: Paper Nav Tabs */}
        <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
            const rot = rotations[index % rotations.length];

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-1 text-xs font-mono-code font-bold uppercase tracking-wider rounded-xs transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#ffea55] text-stone-950 shadow-md scale-105 border border-[#e6c900] ' + rot
                    : 'bg-[#faf8f5]/90 text-stone-800 hover:bg-white hover:text-black border border-stone-300/80 hover:shadow-xs'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Quick Physical Action Paper Labels */}
        <div className="flex items-center gap-2">
          <button
            id="nav-resume-btn"
            data-testid="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 bg-[#8f653e] hover:bg-[#7b5330] text-amber-50 font-mono-code text-xs font-bold px-3 py-1.5 rounded-xs border border-[#a4774b] shadow-md transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="flex items-center gap-1.5 bg-[#e63946] hover:bg-[#d62839] text-white font-mono-code text-xs font-bold px-3 py-1.5 rounded-xs border border-red-700 shadow-md transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </button>
        </div>
      </div>
    </header>
  );
};
