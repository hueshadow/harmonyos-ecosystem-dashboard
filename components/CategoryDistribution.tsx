import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CATEGORY_DATA } from '../constants';
import { RefreshCw } from 'lucide-react';

export const CategoryDistribution: React.FC = () => {
  return (
    <div className="rounded-3xl border border-border-subtle bg-surface p-6 flex flex-col min-h-[320px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-medium text-white">Categories</h2>
        <button className="text-text-secondary hover:text-white transition-colors">
           <RefreshCw size={14} />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        <div className="relative h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <defs>
                {/* Cold Metallic Gradient for the first slice */}
                <linearGradient id="metallicPie" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#CBD5E1" />
                  <stop offset="100%" stopColor="#F1F5F9" />
                </linearGradient>
              </defs>
              <Pie
                data={CATEGORY_DATA}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={4}
                dataKey="value"
                stroke="none"
                cornerRadius={4}
              >
                {CATEGORY_DATA.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={index === 0 ? 'url(#metallicPie)' : entry.color} 
                    stroke={index === 0 ? 'rgba(255,255,255,0.5)' : 'none'}
                    strokeWidth={index === 0 ? 1 : 0}
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                itemStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-[10px] text-text-secondary uppercase tracking-widest">Total</span>
            <span className="text-xl font-bold text-white">100%</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-xs w-full px-2">
          {CATEGORY_DATA.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <span 
                className="h-2 w-2 flex-shrink-0 rounded-full ring-2 ring-black" 
                style={{ background: item.name === 'Social' ? 'linear-gradient(135deg, #fff, #94a3b8)' : item.color }}
              ></span>
              <span className="text-gray-400 truncate">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};