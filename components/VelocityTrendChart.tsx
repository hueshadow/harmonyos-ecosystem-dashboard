import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { VELOCITY_DATA } from '../constants';
import { MoreHorizontal } from 'lucide-react';

export const VelocityTrendChart: React.FC = () => {
  return (
    <div className="rounded-3xl border border-border-subtle bg-surface p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
           <h2 className="text-base font-medium text-white">Market Velocity</h2>
           <div className="flex items-center gap-2 mt-1">
             <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">2,845</span>
             <span className="text-xs font-medium text-green-400">+12.5%</span>
           </div>
        </div>
        <button className="text-text-secondary hover:text-white">
          <MoreHorizontal size={18} />
        </button>
      </div>
      
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={VELOCITY_DATA} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorNative" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E2E8F0" stopOpacity={0.5}/>
                <stop offset="50%" stopColor="#94A3B8" stopOpacity={0.2}/>
                <stop offset="100%" stopColor="#0F172A" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="color3rd" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#525252', fontSize: 11 }} 
                dy={10}
            />
            <Tooltip 
                contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', color: '#fff', borderRadius: '12px' }}
                itemStyle={{ fontSize: 12, fontWeight: 600 }}
                labelStyle={{ color: '#94a3b8', marginBottom: 5 }}
                cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }}
            />
            <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#E2E8F0" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorNative)" 
            />
            <Area 
                type="monotone" 
                dataKey="value2" 
                stroke="#8b5cf6" 
                strokeWidth={2} 
                strokeDasharray="4 4"
                fillOpacity={1} 
                fill="url(#color3rd)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};