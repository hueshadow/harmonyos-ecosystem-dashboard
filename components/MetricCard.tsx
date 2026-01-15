import React from 'react';
import { MetricData } from '../types';
import { TrendingUp, TrendingDown, MoreHorizontal } from 'lucide-react';

interface MetricCardProps {
  data: MetricData;
}

export const MetricCard: React.FC<MetricCardProps> = ({ data }) => {
  const { title, value, subValue, icon, trend, highlight, colorClass } = data;

  return (
    <div className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-5 transition-all duration-300 ${highlight ? 'bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] ring-1 ring-purple-500/30' : 'bg-surface hover:bg-[#161616] border border-border-subtle hover:border-white/10'}`}>
      
      {/* Header */}
      <div className="relative z-10 flex items-start justify-between">
        <div className={`rounded-xl p-2.5 ${highlight ? 'bg-purple-500/20 text-purple-400' : 'bg-[#1a1a1a] text-white'}`}>
            {icon}
        </div>
        <button className="text-text-secondary hover:text-white">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="mt-6">
        <p className="text-xs font-medium text-text-secondary">{title}</p>
        <h3 className="mt-1 text-2xl font-semibold text-white tracking-tight">{value}</h3>
        
        {highlight && (
           <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-gray-800">
             <div className="h-full w-2/3 bg-gradient-to-r from-purple-500 to-blue-500"></div>
           </div>
        )}
      </div>

      {/* Footer / Trend */}
      <div className="mt-4 flex items-center justify-between">
        {trend ? (
          <div className={`flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-bold ${trend.isPositive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
            {trend.isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            <span>{trend.value}</span>
          </div>
        ) : (
          <div className="h-5"></div> 
        )}
        
        {/* Sparkline decoration logic could go here, replacing with text for now */}
        {trend && <span className="text-[10px] text-text-secondary/60">{trend.label}</span>}
      </div>

      {/* Background Glow for Highlight Card */}
      {highlight && (
        <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-all"></div>
      )}
    </div>
  );
};