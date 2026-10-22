import React, { useState } from 'react';
import { ExternalLink, FolderOpen, Filter } from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PushPin, Tape, StarCutout } from './PinboardDecorations';
import { GithubIcon } from './SocialIcons';

interface Props {
  onSelectProject: (project: Project) => void;
}

export const ProjectsPinboard: React.FC<Props> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { projects } = PORTFOLIO_DATA;

  const categories = [
    'All',
    'AI & ML',
    'Data Science & Analytics',
    'Full Stack',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-8 border-t border-[#2d5f44] overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-12 left-8 hidden md:block">
        <StarCutout size={32} rotation="rotate-12" />
      </div>
      <div className="absolute bottom-16 right-12 hidden md:block">
        <StarCutout size={28} rotation="-rotate-12" />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header: Kraft paper placard pinned to the board */}
        <div className="relative paper-sheet paper-white p-6 sm:p-8 rounded-sm border border-stone-200/90 max-w-2xl mb-12 shadow-lg -rotate-1">
          <Tape position="top-left" angle="-5deg" width="w-24" />
          <PushPin color="gold" className="-top-3 right-6" />

          <div className="flex items-center gap-2 font-mono-code text-xs uppercase font-bold text-stone-600 mb-1">
            <FolderOpen className="w-4 h-4 text-[#8f653e]" />
            <span className="bg-[#8f653e] text-[#f7fae8] px-2 py-0.5 rounded-xs border border-[#a4774b]">
              PINBOARD ARCHIVE // SECTION 02
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
            PROJECT DOSSIERS & ARTIFACTS
          </h2>
          <p className="font-hand text-xl font-bold text-stone-600 mt-2">
            Every artifact represents real code, tested models, and verified systems.
          </p>

          {/* Filter Category Paper Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 pt-4 border-t border-dashed border-stone-300">
            <div className="flex items-center gap-1 font-mono-code text-[11px] uppercase font-bold text-stone-500 mr-2">
              <Filter className="w-3.5 h-3.5 text-[#8f653e]" />
              <span>Filter:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono-code text-xs px-3 py-1 rounded-xs transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#7a4f2c] hover:bg-[#683f20] text-[#faf5ed] font-bold shadow-sm scale-105 border border-[#a4774b]'
                    : 'bg-[#f4eee6] hover:bg-[#e8decb] text-[#543b23] border border-[#d6c4ad]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Pinned Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredProjects.map((project, idx) => {
            const paperClasses = {
              kraft: 'paper-kraft text-white border-[#9e6f42]',
              yellow: 'paper-yellow text-stone-950 border-amber-300',
              white: 'paper-white text-stone-900 border-stone-200',
              cream: 'paper-cream text-stone-900 border-[#d8cca8]',
            }[project.paperType];

            const pinColors: ('red' | 'cyan' | 'gold' | 'silver')[] = [
              'red',
              'gold',
              'cyan',
              'silver',
            ];
            const pinColor = pinColors[idx % pinColors.length];

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group relative paper-sheet ${paperClasses} p-6 rounded-sm border cursor-pointer ${project.rotation} hover:rotate-0 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between min-h-[340px]`}
              >
                {/* Randomly alternate Tape or PushPin */}
                {idx % 2 === 0 ? (
                  <PushPin color={pinColor} className="-top-3 left-6" />
                ) : (
                  <Tape position="top-right" angle="2deg" width="w-20" />
                )}

                {/* Top Metadata */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span
                      className={`font-mono-code text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-xs ${
                        project.paperType === 'kraft'
                          ? 'bg-black/40 text-amber-200 border border-amber-500/30'
                          : 'bg-[#244a33] text-[#f0f5cd]'
                      }`}
                    >
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className={`font-hand text-sm font-bold ${
                        project.paperType === 'kraft' ? 'text-amber-300' : 'text-amber-800'
                      }`}>
                        Featured
                      </span>
                    )}

                    {project.inProgress && (
                      <span className={`font-mono-code text-[10px] px-1.5 py-0.5 rounded-xs font-bold ${
                        project.paperType === 'kraft'
                          ? 'bg-amber-500/30 text-amber-200'
                          : 'bg-amber-100 text-amber-900 border border-amber-300'
                      }`}>
                        WIP
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3
                    className={`font-display font-bold text-xl sm:text-2xl tracking-tight mb-2 group-hover:underline ${
                      project.paperType === 'kraft' ? 'text-[#fffdf9]' : 'text-stone-950'
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Problem Snippet */}
                  <p
                    className={`text-xs leading-relaxed line-clamp-3 mb-4 ${
                      project.paperType === 'kraft'
                        ? 'text-stone-200'
                        : 'text-stone-700'
                    }`}
                  >
                    {project.problem}
                  </p>
                </div>

                {/* Bottom Section: Tech Stack & Actions */}
                <div className={`pt-4 border-t border-dashed mt-auto ${
                  project.paperType === 'kraft' ? 'border-[#9e6f42]/70' : 'border-stone-400/40'
                }`}>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`font-mono-code text-[10px] px-2 py-0.5 rounded-xs ${
                          project.paperType === 'kraft'
                            ? 'bg-black/30 text-amber-100 border border-[#9e6f42]/60'
                            : project.paperType === 'yellow'
                            ? 'bg-amber-200/90 text-amber-950 border border-amber-300'
                            : 'bg-white/90 text-stone-800 border border-stone-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="font-mono-code text-[10px] opacity-70">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Interactive Buttons */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className={`font-mono-code text-xs font-bold underline cursor-pointer hover:opacity-80 ${
                        project.paperType === 'kraft' ? 'text-amber-200' : 'text-stone-900'
                      }`}
                    >
                      Inspect Dossier &rarr;
                    </button>

                    <div className="flex items-center gap-1.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 bg-black/80 hover:bg-black text-white rounded-xs transition-transform hover:scale-110"
                          title="View Repository"
                          aria-label="GitHub Repository"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 bg-[#244a33] hover:bg-[#193826] text-white rounded-xs transition-transform hover:scale-110"
                          title="Open Live App"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
