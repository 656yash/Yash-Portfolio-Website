import React from 'react';

// Pushpin component with realistic 3D specular highlight and drop shadow
export const PushPin: React.FC<{
  color?: 'red' | 'cyan' | 'gold' | 'silver';
  className?: string;
}> = ({ color = 'red', className = '' }) => {
  const colorMap = {
    red: { head: '#ef4444', ring: '#dc2626', shadow: '#7f1d1d' },
    cyan: { head: '#06b6d4', ring: '#0891b2', shadow: '#164e63' },
    gold: { head: '#f59e0b', ring: '#d97706', shadow: '#78350f' },
    silver: { head: '#94a3b8', ring: '#64748b', shadow: '#334155' },
  };

  const c = colorMap[color];

  return (
    <div className={`absolute z-30 pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg width="24" height="28" viewBox="0 0 24 28" fill="none" className="drop-shadow-md">
        {/* Needle shadow */}
        <path d="M12 18L10 27L14 27Z" fill="rgba(0,0,0,0.3)" />
        {/* Needle metal */}
        <path d="M12 15L12 25" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
        {/* Pin base ring */}
        <ellipse cx="12" cy="14" rx="6" ry="3" fill={c.ring} />
        {/* Pin cone body */}
        <path d="M8 8L6 14H18L16 8Z" fill={c.ring} />
        {/* Pin round top head */}
        <circle cx="12" cy="8" r="6" fill={c.head} />
        {/* Specular highlight */}
        <ellipse cx="10" cy="6" rx="2.5" ry="1.5" fill="white" fillOpacity="0.75" />
      </svg>
    </div>
  );
};

// Masking / Scotch Tape Strip
export const Tape: React.FC<{
  position?: 'top' | 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left' | 'center';
  angle?: string;
  width?: string;
  className?: string;
}> = ({ position = 'top', angle = '-2deg', width = 'w-24', className = '' }) => {
  const positionClasses = {
    'top': '-top-3 left-1/2 -translate-x-1/2',
    'top-left': '-top-3 -left-4',
    'top-right': '-top-3 -right-4',
    'bottom-right': '-bottom-3 -right-4',
    'bottom-left': '-bottom-3 -left-4',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  }[position];

  return (
    <div
      className={`absolute z-20 h-6 ${width} masking-tape ${positionClasses} ${className}`}
      style={{ transform: `rotate(${angle})` }}
      aria-hidden="true"
    />
  );
};

// Realistic Foldback Binder Clip (Black metal with chrome wire handles)
export const BinderClip: React.FC<{ className?: string; rotation?: string }> = ({
  className = '',
  rotation = 'rotate-0',
}) => (
  <div className={`absolute z-30 select-none pointer-events-none ${rotation} ${className}`} aria-hidden="true">
    <svg width="46" height="42" viewBox="0 0 46 42" fill="none" className="drop-shadow-lg">
      {/* Chrome wire top handle */}
      <path
        d="M17 12V4C17 2.34315 18.3431 1 20 1H26C27.6569 1 29 2.34315 29 4V12"
        stroke="#cbd5e1"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Chrome wire bottom handle */}
      <path
        d="M15 12V7C15 5.89543 15.8954 5 17 5H29C30.1046 5 31 5.89543 31 7V12"
        stroke="#94a3b8"
        strokeWidth="2"
      />
      {/* Black triangular metal body */}
      <polygon points="6,12 40,12 44,38 2,38" fill="#1e293b" />
      {/* Chrome clamping jaw */}
      <rect x="5" y="36" width="36" height="4" rx="1" fill="#cbd5e1" />
      {/* Specular highlight on metal */}
      <line x1="8" y1="14" x2="38" y2="14" stroke="#475569" strokeWidth="1.5" />
    </svg>
  </div>
);

// Paper Star Cutout (with stitch marks, like in reference)
export const StarCutout: React.FC<{
  size?: number;
  rotation?: string;
  className?: string;
}> = ({ size = 32, rotation = 'rotate-6', className = '' }) => (
  <div className={`select-none pointer-events-none inline-block drop-shadow-md ${rotation} ${className}`} aria-hidden="true">
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L14.8 8.6L22 9.3L16.6 14.1L18.2 21.2L12 17.5L5.8 21.2L7.4 14.1L2 9.3L9.2 8.6L12 2Z"
        fill="#faf6e9"
        stroke="#d6cbab"
        strokeWidth="0.8"
        strokeDasharray="1.2 1"
      />
    </svg>
  </div>
);

// Chiclet Keyboard Cutout (tactile Apple-style angled keyboard)
export const ChicletKeyboard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`paper-sheet bg-[#e7eaed] p-2.5 rounded-xl border border-[#cbd5e1] drop-shadow-2xl select-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex flex-col gap-1 w-44">
        {/* Function row */}
        <div className="flex gap-1 justify-between">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-2 w-3.5 bg-white rounded-xs shadow-xs" />
          ))}
        </div>
        {/* Number row */}
        <div className="flex gap-1 justify-between">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-3 w-4 bg-white rounded-xs shadow-xs" />
          ))}
        </div>
        {/* QWERTY row */}
        <div className="flex gap-1 justify-between">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-3 w-4 bg-white rounded-xs shadow-xs" />
          ))}
        </div>
        {/* ASDF row */}
        <div className="flex gap-1 justify-between">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="h-3 w-4.5 bg-white rounded-xs shadow-xs" />
          ))}
        </div>
        {/* Spacebar row */}
        <div className="flex gap-1 items-center justify-between">
          <div className="h-3 w-4 bg-white rounded-xs shadow-xs" />
          <div className="h-3 w-20 bg-white rounded-xs shadow-xs" />
          <div className="h-3 w-4 bg-white rounded-xs shadow-xs" />
          <div className="h-3 w-4 bg-white rounded-xs shadow-xs" />
        </div>
      </div>
    </div>
  );
};

// Ergonomic Mouse Cutout
export const ErgonomicMouse: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative select-none pointer-events-none drop-shadow-xl ${className}`} aria-hidden="true">
    <div className="w-14 h-24 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] rounded-full border border-slate-300 shadow-inner flex flex-col items-center pt-3 relative">
      {/* Scroll wheel */}
      <div className="w-2.5 h-6 bg-slate-400 rounded-full shadow-inner border border-slate-500/30" />
      {/* Center seam */}
      <div className="w-[1px] h-9 bg-slate-300 absolute top-0" />
      {/* Mouse cable running upward */}
      <svg className="absolute -top-16 left-1/2 -translate-x-1/2 overflow-visible w-16 h-18" fill="none">
        <path d="M8 64 C8 30, 24 35, 12 0" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  </div>
);

// Tangled White Earphone Wire Decor
export const EarphonesCable: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="drop-shadow-sm">
      <path
        d="M20 10C35 40, 10 70, 45 80C80 90, 110 50, 75 30C40 10, 30 75, 70 105C90 120, 110 95, 105 85"
        stroke="#f1f5f9"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Earbud 1 */}
      <circle cx="20" cy="10" r="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
      {/* Earbud 2 */}
      <circle cx="105" cy="85" r="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
    </svg>
  </div>
);

// Polaroid Frame for Yash's profile photo
export const PolaroidPhoto: React.FC<{
  src: string;
  alt: string;
  caption: string;
  date?: string;
  className?: string;
  rotation?: string;
}> = ({ src, alt, caption, date = 'OCT 2026', className = '', rotation = 'rotate-3' }) => {
  return (
    <div
      className={`paper-sheet bg-white p-3 pb-5 rounded-xs border border-stone-200/80 drop-shadow-xl inline-block ${rotation} ${className}`}
    >
      <div className="relative overflow-hidden w-48 h-48 sm:w-56 sm:h-56 bg-stone-100 border border-stone-200">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover filter contrast-[1.05] brightness-[1.02]"
          loading="lazy"
        />
        {/* Subtle camera flash reflection overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
      </div>
      <div className="mt-3 px-1 flex flex-col justify-between items-start">
        <span className="font-hand text-xl font-bold text-stone-800 leading-tight">{caption}</span>
        <span className="font-mono-code text-[10px] tracking-wider text-stone-400 mt-1 uppercase">{date}</span>
      </div>
    </div>
  );
};

// Rubber Stamp Accent (like "VERIFIED", "WINNER", "CONFIDENTIAL")
export const RubberStamp: React.FC<{
  text: string;
  color?: 'red' | 'green' | 'amber';
  rotation?: string;
  className?: string;
}> = ({ text, color = 'red', rotation = '-rotate-12', className = '' }) => {
  const colorStyles = {
    red: 'border-red-600/80 text-red-600/85',
    green: 'border-emerald-600/80 text-emerald-600/85',
    amber: 'border-amber-600/80 text-amber-700/85',
  }[color];

  return (
    <div
      className={`inline-block border-2 border-dashed px-3 py-1 font-mono-code uppercase font-bold text-xs tracking-widest select-none pointer-events-none ${colorStyles} ${rotation} ${className}`}
      aria-hidden="true"
    >
      {text}
    </div>
  );
};
