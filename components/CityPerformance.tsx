import React from 'react';
import { MoreHorizontal, TrendingUp } from 'lucide-react';

export const CityPerformance: React.FC = () => {
  return (
    <div className="rounded-3xl border border-border-subtle bg-surface p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-medium text-white">Top Cities</h2>
        <button className="text-text-secondary hover:text-white">
           <MoreHorizontal size={14} />
        </button>
      </div>
      <div className="flex flex-col gap-1 flex-1">
        {[
            { rank: 1, name: 'Shenzhen', val: '2,840', width: '85%', color: 'bg-white', text: 'text-white' },
            { rank: 2, name: 'Beijing', val: '2,105', width: '72%', color: 'bg-white/60', text: 'text-gray-300' },
            { rank: 3, name: 'Shanghai', val: '1,950', width: '65%', color: 'bg-white/40', text: 'text-gray-400' },
            { rank: 4, name: 'Hangzhou', val: '1,240', width: '45%', color: 'bg-white/20', text: 'text-gray-500' }
        ].map((city) => (
            <div key={city.name} className="flex items-center gap-4 rounded-xl p-2 hover:bg-[#1a1a1a] transition-colors cursor-pointer group">
                <span className="w-4 text-xs font-bold text-gray-600 group-hover:text-white transition-colors">{city.rank}</span>
                <div className="flex-1">
                    <div className="flex justify-between mb-1.5">
                        <span className={`text-sm font-medium ${city.text}`}>{city.name}</span>
                        <span className={`text-xs font-bold ${city.text}`}>{city.val}</span>
                    </div>
                    <div className="h-1 rounded-full bg-[#1a1a1a] group-hover:bg-black">
                        <div className={`h-full rounded-full ${city.color}`} style={{ width: city.width }}></div>
                    </div>
                </div>
            </div>
        ))}
        
        <div className="mt-auto pt-4 flex items-center justify-between">
           <div className="flex items-center gap-2">
              <div className="rounded-full bg-green-500/10 p-1.5 text-green-500">
                <TrendingUp size={12} />
              </div>
              <span className="text-xs font-medium text-green-500">+18.5% Growth</span>
           </div>
           <span className="text-xs text-text-secondary">14 Regions</span>
        </div>
      </div>
    </div>
  );
};