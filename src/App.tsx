import { useState, useEffect } from 'react';
import { BoardNavigation } from './components/BoardNavigation';
import { HeroPinboard } from './components/HeroPinboard';
import { ProjectsPinboard } from './components/ProjectsPinboard';
import { ExperienceAndAchievements } from './components/ExperienceAndAchievements';
import { SkillsAndEducation } from './components/SkillsAndEducation';
import { ContactPostcard } from './components/ContactPostcard';
import { ProjectDossierModal } from './components/ProjectDossierModal';
import { ResumeOverviewModal } from './components/ResumeOverviewModal';
import type { Project } from './data/portfolioData';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'experience', 'achievements', 'skills', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-[100dvh] pinboard-surface flex flex-col relative text-[#222] overflow-x-hidden">
      {/* Cutting Mat Metric Ruler Top Edge */}
      <div className="w-full h-4 bg-[#193826] border-b border-[#2d5f44] flex items-center justify-between px-2 overflow-hidden select-none pointer-events-none opacity-60">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="flex items-end gap-1 h-full">
            <span className="font-mono-code text-[8px] text-[#e2eeb2]">{i * 5}</span>
            <div className="w-[1px] h-2 bg-[#e2eeb2]" />
            <div className="w-[1px] h-1 bg-[#e2eeb2]/40" />
            <div className="w-[1px] h-1 bg-[#e2eeb2]/40" />
            <div className="w-[1px] h-1 bg-[#e2eeb2]/40" />
          </div>
        ))}
      </div>

      {/* Sticky Paper Navigation Bar */}
      <BoardNavigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Board Content */}
      <main className="flex-1">
        <HeroPinboard
          onExploreWork={() => scrollToSection('projects')}
          onOpenResume={() => setIsResumeOpen(true)}
          onContact={() => scrollToSection('contact')}
        />

        <ProjectsPinboard
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <ExperienceAndAchievements />

        <SkillsAndEducation />

        <ContactPostcard />
      </main>

      {/* Interactive Modals */}
      <ProjectDossierModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeOverviewModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Cutting Mat Metric Ruler Bottom Edge */}
      <div className="w-full h-4 bg-[#193826] border-t border-[#2d5f44] flex items-center justify-between px-2 overflow-hidden select-none pointer-events-none opacity-60">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="flex items-start gap-1 h-full">
            <span className="font-mono-code text-[8px] text-[#e2eeb2]">{i * 5}</span>
            <div className="w-[1px] h-2 bg-[#e2eeb2]" />
            <div className="w-[1px] h-1 bg-[#e2eeb2]/40" />
            <div className="w-[1px] h-1 bg-[#e2eeb2]/40" />
            <div className="w-[1px] h-1 bg-[#e2eeb2]/40" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
