import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RETENTION_DATA } from '../constants';
import { Users } from 'lucide-react';

export const RetentionChart: React.FC = () => {
  return (
    <div className="rounded-3xl border border-border-subtle bg-surface p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
           <h2 className="text-base font-medium text-white">User Retention</h2>
           <p className="text-xs text-text-secondary">8-Week Cohort Analysis</p>
        </div>
        <div className="text-right">
           <p className="text-xl font-bold text-white">51.2%</p>
           <p className="text-[10px] text-green-400 font-medium">Top 5% Industry</p>
        </div>
      </div>
      
      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={RETENTION_DATA} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRetention" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis 
               dataKey="week" 
               axisLine={false} 
               tickLine={false} 
               tick={{ fill: '#525252', fontSize: 10 }} 
            />
            <YAxis 
               axisLine={false} 
               tickLine={false} 
               tick={{ fill: '#525252', fontSize: 10 }}
               unit="%"
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', color: '#fff', borderRadius: '12px' }}
              cursor={{ stroke: 'rgba(255,255,255,0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="rate" 
              stroke="#10b981" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorRetention)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
