import React, { useState, useEffect } from 'react';
import { X, Printer, Download, ExternalLink, FileText, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { PushPin, Tape, RubberStamp } from './PinboardDecorations';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeOverviewModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const { profile, experience, education } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'pdf' | 'dossier'>('pdf');
  const resumeUrl = '/Yash_Deshpande_Resume.pdf';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-black/80 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] flex flex-col paper-white border-2 border-stone-300 rounded-sm shadow-2xl animate-in zoom-in-95 duration-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Tape position="top-left" angle="-3deg" width="w-24" />
        <Tape position="top-right" angle="2deg" width="w-24" />
        <PushPin color="red" className="top-4 right-16" />

        {/* Modal Header Bar */}
        <div className="p-4 sm:p-6 pb-3 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 bg-stone-50/90 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono-code text-xs font-bold uppercase tracking-wider bg-stone-900 text-stone-100 px-2.5 py-1 rounded-xs">
              OFFICIAL RESUME
            </span>
            <RubberStamp text="VERIFIED" color="green" rotation="rotate-0" />
          </div>

          {/* Quick Actions (Download, Open, Print, Close) */}
          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              download="Yash_Deshpande_Resume.pdf"
              className="flex items-center gap-1.5 text-xs font-mono-code font-bold bg-[#1f432e] hover:bg-[#163322] text-white px-3 py-1.5 rounded-xs shadow-xs active:scale-95 transition-all cursor-pointer"
              title="Download Official PDF Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs font-mono-code bg-stone-100 hover:bg-stone-200 text-stone-800 px-2.5 py-1.5 rounded-xs border border-stone-300 cursor-pointer"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>OPEN TAB</span>
            </a>

            <button
              onClick={() => window.print()}
              className="hidden md:flex items-center gap-1 text-xs font-mono-code bg-stone-100 hover:bg-stone-200 text-stone-800 px-2.5 py-1.5 rounded-xs border border-stone-300 cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT</span>
            </button>

            <button
              onClick={onClose}
              className="bg-stone-900 text-white p-1.5 sm:px-2.5 sm:py-1 rounded-xs hover:bg-stone-800 font-mono-code text-xs flex items-center gap-1 cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">ESC</span>
            </button>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="px-4 sm:px-6 pt-2 pb-2 bg-stone-100/80 border-b border-stone-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('pdf')}
              className={`flex items-center gap-1.5 font-mono-code text-xs px-3 py-1 rounded-xs cursor-pointer transition-all ${
                activeTab === 'pdf'
                  ? 'bg-stone-900 text-white font-bold shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-300'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>PDF Document Viewer</span>
            </button>

            <button
              onClick={() => setActiveTab('dossier')}
              className={`flex items-center gap-1.5 font-mono-code text-xs px-3 py-1 rounded-xs cursor-pointer transition-all ${
                activeTab === 'dossier'
                  ? 'bg-stone-900 text-white font-bold shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Printable Dossier View</span>
            </button>
          </div>

          <span className="text-[11px] font-mono-code text-stone-500 hidden sm:inline">
            Yash Deshpande Resume (PDF · 70 KB)
          </span>
        </div>

        {/* Modal Body Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#faf8f5]">
          {activeTab === 'pdf' ? (
            /* Embedded PDF Viewer Frame */
            <div className="w-full flex flex-col items-center">
              <div className="w-full h-[66vh] min-h-[460px] bg-stone-200 rounded-xs overflow-hidden border border-stone-300 shadow-inner relative">
                <iframe
                  src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                  title="Yash Deshpande Resume PDF"
                  className="w-full h-full border-none"
                />
              </div>

              {/* Mobile / Fallback Helper Notice */}
              <div className="mt-3 w-full flex flex-wrap items-center justify-between gap-2 p-3 bg-white/90 border border-stone-200 rounded-xs text-xs">
                <span className="text-stone-600 font-medium">
                  Can't view the PDF in your mobile browser?
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={resumeUrl}
                    download="Yash_Deshpande_Resume.pdf"
                    className="font-mono-code font-bold text-emerald-800 underline hover:text-emerald-950 flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download File
                  </a>
                  <span>·</span>
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-code font-bold text-stone-800 underline hover:text-black flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open in New Window
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Dossier Printable View */
            <div className="space-y-6 text-stone-900 max-w-3xl mx-auto paper-sheet paper-white p-6 sm:p-10 border border-stone-200 rounded-xs shadow-sm">
              {/* Header */}
              <div className="border-b-2 border-stone-800 pb-4">
                <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-stone-950">
                  {profile.name}
                </h1>
                <p className="font-mono-code text-xs sm:text-sm font-bold text-emerald-800 mt-1 uppercase tracking-wider">
                  {profile.roleTagline}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono-code text-stone-600 mt-3">
                  <span>{profile.location}</span>
                  <span>·</span>
                  <span>Phone: +91 9022763347</span>
                  <span>·</span>
                  <a href={`mailto:${profile.email}`} className="underline text-stone-800 font-bold">
                    {profile.email}
                  </a>
                  <span>·</span>
                  <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="underline text-stone-800 font-bold">
                    github.com/656yash
                  </a>
                  <span>·</span>
                  <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="underline text-stone-800 font-bold">
                    linkedin.com/in/yash-deshpande
                  </a>
                </div>
              </div>

              {/* About Me Statement */}
              <div>
                <h2 className="font-display font-extrabold text-sm uppercase tracking-wider border-b border-stone-300 pb-1 mb-2 text-stone-800">
                  Profile Summary
                </h2>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Motivated BTech IT student from MIT Academy of Engineering (MITAOE), Pune, with strong interest in Data Science and Python development. Skilled in Python, SQL, DBMS, and Data Analytics fundamentals. Passionate about solving real-world problems through practical software engineering and competitive hackathons.
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="font-display font-extrabold text-sm uppercase tracking-wider border-b border-stone-300 pb-1 mb-2 text-stone-800">
                  Education
                </h2>
                <div className="space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                    <span className="font-bold text-sm text-stone-900">{education[0].institution}</span>
                    <span className="font-mono-code text-xs text-stone-500">{education[0].timeline}</span>
                  </div>
                  <p className="text-xs text-stone-700">
                    {education[0].degree} — <strong className="text-emerald-800">{education[0].score}</strong> (Specializing in {education[0].focus})
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 pt-1 border-t border-dashed border-stone-200">
                    <div>
                      <strong>Golden Kids Junior College:</strong> Class XII (HSC) — 78.9%
                    </div>
                    <div>
                      <strong>Golden Kids High School:</strong> Class X (SSC) — 90.2%
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="font-display font-extrabold text-sm uppercase tracking-wider border-b border-stone-300 pb-1 mb-2 text-stone-800">
                  Experience & Internship
                </h2>
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline font-bold text-sm">
                    <span>{experience.role} — {experience.organization}</span>
                    <span className="font-mono-code text-xs text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
                      {experience.year}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-stone-800 mt-1">
                    Project: ROGC Anomaly Detection (Industrial Sensor Telemetry)
                  </p>
                  <p className="text-xs text-stone-700 mt-1 leading-relaxed">{experience.overview}</p>
                  <ul className="list-disc list-inside text-xs text-stone-700 mt-1.5 space-y-0.5">
                    {experience.keyWorkflows.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hackathons & Featured Projects */}
              <div>
                <h2 className="font-display font-extrabold text-sm uppercase tracking-wider border-b border-stone-300 pb-1 mb-2 text-stone-800">
                  Hackathons & Featured Projects
                </h2>
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="flex justify-between items-baseline font-bold text-sm">
                      <span className="text-stone-900">CodeMongUs | Real-Time Multiplayer Coding Game</span>
                      <span className="font-mono-code text-[11px] font-bold text-rose-800 bg-rose-50 px-2 py-0.5 rounded-xs border border-rose-200">
                        Winner — Offgrid 1.0 Hackathon, DYPIU
                      </span>
                    </div>
                    <p className="text-stone-700 mt-0.5">
                      Developed a collaborative coding game where players debug DSA problems while an impostor secretly sabotages the code. Built using React.js, Node.js, and Socket.IO to support real-time multiplayer interactions. Deployed on Vercel with Antigravity IDE and GitHub.
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-bold text-sm">
                      <span className="text-stone-900">AdWise | E-commerce Application & Analytics Dashboard</span>
                      <span className="font-mono-code text-[11px] text-stone-500">Live on Vercel</span>
                    </div>
                    <p className="text-stone-700 mt-0.5">
                      Developed an e-commerce platform and dedicated analytics dashboard exploring business performance via real-time KPIs (sales, customer, product, and order metrics).
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-bold text-sm">
                      <span className="text-stone-900">ROGC Impulse-Line Choking Detection</span>
                      <span className="font-mono-code text-[11px] text-stone-500">ML Industrial Telemetry</span>
                    </div>
                    <p className="text-stone-700 mt-0.5">
                      Predictive fault classifier evaluating differential pressure time-series and frequency drift to pinpoint incipient sensor choking. (Python, Scikit-Learn, PCA, Dense Autoencoder)
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="font-display font-extrabold text-sm uppercase tracking-wider border-b border-stone-300 pb-1 mb-2 text-stone-800">
                  Technical Arsenal
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                  <div>
                    <strong>Programming Languages:</strong> Python (Basics, OOPs, DSA), C++ (Basics, OOPs), SQL
                  </div>
                  <div>
                    <strong>Databases & Storage:</strong> MySQL, Relational DBMS, MongoDB
                  </div>
                  <div>
                    <strong>Data Science & Analytics:</strong> EDA, Preprocessing, PCA, Feature Engineering
                  </div>
                  <div>
                    <strong>Machine Learning:</strong> Scikit-Learn, Decision Trees, SVM, Random Forest, Autoencoders
                  </div>
                  <div>
                    <strong>Tools & Environments:</strong> Antigravity IDE, Git/GitHub, Power BI, n8n-architecture, Jupyter
                  </div>
                  <div>
                    <strong>Core Philosophy:</strong> Building tools that go beyond code using data to solve real-world problems.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="text-stone-600 hover:text-stone-900 font-mono-code text-xs underline cursor-pointer"
          >
            Close Document
          </button>

          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono-code text-stone-700 hover:text-black underline"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            <a
              href={resumeUrl}
              download="Yash_Deshpande_Resume.pdf"
              className="inline-flex items-center gap-1.5 bg-[#244a33] hover:bg-[#1a3826] text-white font-mono-code text-xs font-bold px-4 py-2 rounded-xs shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
