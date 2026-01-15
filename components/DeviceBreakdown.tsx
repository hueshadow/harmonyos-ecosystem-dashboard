import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { DEVICE_DATA } from '../constants';
import { Smartphone } from 'lucide-react';

export const DeviceBreakdown: React.FC = () => {
  return (
    <div className="rounded-3xl border border-border-subtle bg-surface p-6 flex flex-col min-h-[320px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-medium text-white">Device Ecosystem</h2>
        <div className="rounded-full bg-blue-500/10 p-1.5 text-blue-400">
          <Smartphone size={16} />
        </div>
      </div>

      <div className="flex-1 relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            innerRadius="20%" 
            outerRadius="100%" 
            barSize={10} 
            data={DEVICE_DATA}
            startAngle={180} 
            endAngle={0}
          >
            <RadialBar
              label={{ position: 'insideStart', fill: '#fff', fontSize: 10, fontWeight: 'bold' }}
              background={{ fill: '#1a1a1a' }}
              dataKey="count"
              cornerRadius={10}
            />
            <Tooltip 
               contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', color: '#fff', borderRadius: '8px' }}
               itemStyle={{ color: '#fff' }}
            />
            <Legend 
              iconSize={8} 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              wrapperStyle={{ fontSize: '11px', color: '#9ca3af' }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        
        <div className="absolute bottom-0 left-0 w-full text-center">
            <p className="text-2xl font-bold text-white">5 Types</p>
            <p className="text-xs text-text-secondary">Active Terminals</p>
        </div>
      </div>
    </div>
  );
};
