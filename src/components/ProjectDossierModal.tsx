import React, { useEffect } from 'react';
import { ExternalLink, X, CheckCircle, AlertCircle, Cpu } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PushPin, Tape, RubberStamp } from './PinboardDecorations';
import { GithubIcon } from './SocialIcons';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDossierModal: React.FC<Props> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto paper-cream border-2 border-[#d5caa8] rounded-md p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Tapes and Pins */}
        <Tape position="top-left" angle="-4deg" width="w-28" />
        <Tape position="top-right" angle="3deg" width="w-28" />
        <PushPin color="red" className="top-4 right-16" />

        {/* Close Button Styled as a Cut Paper Tag */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-40 bg-stone-900 text-stone-100 hover:bg-stone-800 p-2 rounded-xs border border-stone-700 shadow-md transition-transform hover:scale-105 active:scale-95 flex items-center gap-1 font-mono-code text-xs uppercase cursor-pointer"
          aria-label="Close project dossier"
        >
          <X className="w-4 h-4" />
          <span>ESC</span>
        </button>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="bg-[#244a33] text-[#f0f5cd] font-mono-code text-xs font-semibold px-2.5 py-1 rounded-xs uppercase tracking-wider">
            {project.category}
          </span>
          {project.teamOrContext && (
            <span className="bg-[#8f653e] text-white font-mono-code text-xs px-2.5 py-1 rounded-xs">
              {project.teamOrContext}
            </span>
          )}
          {project.inProgress && (
            <RubberStamp text="WORK IN PROGRESS" color="amber" rotation="rotate-0" />
          )}
          {project.featured && !project.inProgress && (
            <RubberStamp text="DOCUMENTED WORK" color="green" rotation="rotate-0" />
          )}
        </div>

        {/* Title & Subtitle */}
        <h2 id="dossier-title" className="font-display font-bold text-2xl sm:text-3xl text-stone-900 tracking-tight mb-2">
          {project.title}
        </h2>
        <p className="font-hand text-xl text-stone-700 mb-6 font-semibold">
          {project.subtitle}
        </p>

        <div className="border-t border-b border-dashed border-stone-300 py-6 my-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem Statement */}
          <div className="bg-white/80 p-5 rounded-xs border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2 text-rose-800 font-mono-code text-xs font-bold uppercase mb-2">
              <AlertCircle className="w-4 h-4" />
              <span>Problem Being Solved</span>
            </div>
            <p className="text-stone-800 text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution & Implementation */}
          <div className="bg-white/80 p-5 rounded-xs border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-800 font-mono-code text-xs font-bold uppercase mb-2">
              <CheckCircle className="w-4 h-4" />
              <span>Approach & Implementation</span>
            </div>
            <p className="text-stone-800 text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Results Note if Verified */}
        {project.results && (
          <div className="mb-6 p-4 bg-[#ffea55]/30 border-l-4 border-[#ffb703] rounded-r-xs">
            <span className="font-mono-code text-xs uppercase font-bold text-amber-950 block mb-1">
              Verified Performance / Deployment Note:
            </span>
            <p className="text-stone-900 text-sm font-medium">
              {project.results}
            </p>
          </div>
        )}

        {/* Technologies Used */}
        <div className="mb-8">
          <div className="flex items-center gap-2 font-mono-code text-xs uppercase font-bold text-stone-600 mb-3">
            <Cpu className="w-4 h-4" />
            <span>Technologies & Frameworks</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="bg-white border border-stone-300 text-stone-800 font-mono-code text-xs px-3 py-1.5 rounded-xs shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons: Live Demo & GitHub */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-stone-200">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#224933] hover:bg-[#183625] text-[#f7fae8] font-mono-code font-bold text-xs uppercase px-5 py-3 rounded-xs shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live App</span>
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl.startsWith('http') ? project.demoUrl : `https://${project.demoUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8f653e] hover:bg-[#785331] text-[#faf5ed] font-mono-code font-bold text-xs uppercase px-5 py-3 rounded-xs shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 border border-[#b4885c]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{project.demoLabel || 'Launch Demo Website'}</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-black text-white font-mono-code font-bold text-xs uppercase px-5 py-3 rounded-xs shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Code Repository</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto text-stone-600 hover:text-stone-900 font-mono-code text-xs underline cursor-pointer"
          >
            Back to Pinboard
          </button>
        </div>
      </div>
    </div>
  );
};
