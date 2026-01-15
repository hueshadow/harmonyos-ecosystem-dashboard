import React from 'react';

const LifecycleBar = ({ 
  label, 
  value, 
  heightPercent, 
  isListed = false,
  nativeFlex = 40,
  thirdPartyFlex = 60
}: { 
  label: string; 
  value: string; 
  heightPercent: number; 
  isListed?: boolean;
  nativeFlex?: number;
  thirdPartyFlex?: number;
}) => (
  <div className="group flex h-full flex-1 flex-col items-center justify-end gap-2">
    <span className={`mb-1 text-[10px] font-bold transition-all group-hover:-translate-y-1 ${isListed ? 'text-green-400' : 'text-gray-500 group-hover:text-white'}`}>
      {value}
    </span>
    <div 
      className={`flex w-full max-w-[48px] flex-col-reverse overflow-hidden rounded-lg transition-all duration-300 ${isListed ? 'ring-1 ring-green-500/30 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'hover:ring-1 hover:ring-white/10'}`} 
      style={{ height: `${heightPercent}%` }}
    >
      {/* High-fidelity Cold Metallic Gradient: White Highlight -> Slate Body -> Darker Base */}
      <div className="relative w-full bg-gradient-to-b from-white via-slate-300 to-slate-500" style={{ flex: nativeFlex }}>
        {/* Shine effect */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/50"></div>
      </div>
      <div className="relative w-full bg-[#2a2a2a] border-b border-black/20" style={{ flex: thirdPartyFlex }}></div>
    </div>
    <span className={`text-[10px] font-medium uppercase tracking-wide transition-colors ${isListed ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
      {label}
    </span>
  </div>
);

export const LifecycleChart: React.FC = () => {
  return (
    <div className="rounded-3xl border border-border-subtle bg-surface p-6 lg:col-span-2">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-base font-medium text-white">Progression</h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-slate-400 to-white"></span>
            <span className="text-xs font-medium text-text-secondary">Native</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#2a2a2a]"></span>
            <span className="text-xs font-medium text-text-secondary">3rd Party</span>
          </div>
        </div>
      </div>
      <div className="flex h-[240px] items-end justify-between gap-2 px-2 pb-2 sm:gap-4">
        <LifecycleBar label="Req" value="1.2k" heightPercent={15} />
        <LifecycleBar label="Dev" value="2.8k" heightPercent={36} />
        <LifecycleBar label="Debug" value="950" heightPercent={12} />
        <LifecycleBar label="Test" value="1.4k" heightPercent={18} />
        <LifecycleBar label="Review" value="600" heightPercent={8} />
        <LifecycleBar label="Listed" value="5.5k" heightPercent={70} isListed />
      </div>
    </div>
  );
};