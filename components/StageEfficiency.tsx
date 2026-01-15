import React from 'react';

const StageBar = ({ 
  label, 
  val, 
  percent, 
  color,
  isWarning = false 
}: { 
  label: string; 
  val: string; 
  percent: number; 
  color: string;
  isWarning?: boolean;
}) => (
  <div className="grid grid-cols-[60px_1fr_50px] items-center gap-4 group">
    <span className="text-xs font-medium text-text-secondary">{label}</span>
    <div className="h-1.5 w-full rounded-full bg-[#1a1a1a] overflow-hidden">
      <div 
        className={`h-full rounded-full ${color} transition-all duration-1000 ease-out`} 
        style={{ width: `${percent}%` }}
      ></div>
    </div>
    <span className={`text-xs font-mono text-right ${isWarning ? 'text-red-400 font-bold' : 'text-white'}`}>{val}</span>
  </div>
);

export const StageEfficiency: React.FC = () => {
  return (
    <div className="rounded-3xl border border-border-subtle bg-surface p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-base font-medium text-white">Efficiency</h2>
        <span className="rounded-full bg-surface-highlight px-3 py-1 text-[10px] font-medium text-text-secondary">Avg. Days</span>
      </div>
      <div className="flex flex-col gap-6">
        <StageBar label="Req" val="1.2d" percent={15} color="bg-gray-500" />
        {/* Cold Metallic Bar: White start -> Slate mid -> White end for reflection */}
        <StageBar label="Dev" val="8.4d" percent={65} color="bg-gradient-to-r from-white via-slate-400 to-white shadow-[0_0_12px_rgba(255,255,255,0.2)]" />
        <StageBar label="Review" val="3.1d" percent={35} color="bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]" />
        <StageBar label="Debug" val="12.0d" percent={85} color="bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]" isWarning />
      </div>
    </div>
  );
};