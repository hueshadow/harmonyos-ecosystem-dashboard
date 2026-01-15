import React from 'react';
import { ComposedChart, Bar, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { API_PERFORMANCE_DATA } from '../constants';
import { Activity } from 'lucide-react';

export const ApiPerformance: React.FC = () => {
  return (
    <div className="rounded-3xl border border-border-subtle bg-surface p-6">
       <div className="flex items-center justify-between mb-6">
        <div>
           <h2 className="text-base font-medium text-white">API Health</h2>
           <div className="flex items-center gap-2 mt-1">
             <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-xs font-medium text-green-400">Systems Operational</span>
           </div>
        </div>
        <button className="text-text-secondary hover:text-white transition-colors">
           <Activity size={18} />
        </button>
      </div>

      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={API_PERFORMANCE_DATA} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
             <defs>
               <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.2} />
               </linearGradient>
             </defs>
             <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
             <XAxis 
                dataKey="time" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#525252', fontSize: 10 }}
             />
             <Tooltip 
                contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', color: '#fff', borderRadius: '12px' }}
                labelStyle={{ color: '#9ca3af' }}
             />
             <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
             
             {/* Requests Bar */}
             <Bar dataKey="requests" name="Requests/min" fill="url(#barGradient)" barSize={20} radius={[4, 4, 0, 0]} />
             
             {/* Latency Line (Right Axis simulated visually by value scale) */}
             <Line 
               type="monotone" 
               dataKey="latency" 
               name="Latency (ms)" 
               stroke="#f59e0b" 
               strokeWidth={2} 
               dot={{ r: 3, fill: '#1a1a1a', stroke: '#f59e0b', strokeWidth: 2 }}
             />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
