import React, { useState } from 'react';
import { RISK_DATA } from '../constants';
import { ShieldAlert, Zap, Filter, MoreHorizontal } from 'lucide-react';

export const RiskSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(RISK_DATA[0].id);
  const selectedRisk = RISK_DATA.find(r => r.id === selectedId) || RISK_DATA[0];

  return (
    <section className="grid grid-cols-1 gap-6 lg:grid-cols-3 min-h-[350px]">
      {/* Risk List */}
      <div className="flex flex-col rounded-3xl border border-border-subtle bg-surface lg:col-span-2 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-subtle">
          <div>
            <h2 className="text-base font-medium text-white">Risk Intelligence</h2>
            <p className="text-xs text-text-secondary mt-0.5">Real-time threat monitoring</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 rounded-full border border-border-subtle bg-surface-highlight px-4 py-2 text-xs font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-all">
              <Filter size={14} /> Filter
            </button>
            <button className="flex items-center justify-center h-8 w-8 rounded-full border border-border-subtle bg-surface-highlight text-text-secondary hover:text-white">
              <MoreHorizontal size={14} />
            </button>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto p-2">
          <table className="w-full text-left text-sm border-separate border-spacing-y-1">
            <thead>
              <tr className="text-xs text-text-secondary/60">
                <th className="px-4 py-2 font-medium">App Name</th>
                <th className="px-4 py-2 font-medium">Stage</th>
                <th className="px-4 py-2 font-medium">Reason</th>
                <th className="px-4 py-2 font-medium">Priority</th>
                <th className="px-4 py-2 font-medium text-right">Blocked</th>
              </tr>
            </thead>
            <tbody>
              {RISK_DATA.map((item) => (
                <tr 
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`group cursor-pointer transition-all ${selectedId === item.id ? 'bg-[#1a1a1a]' : 'hover:bg-[#161616]'}`}
                >
                  <td className="px-4 py-3 rounded-l-xl">
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-[10px] font-bold text-white border border-white/5">
                          {item.name.substring(0,2)}
                       </div>
                       <span className={`font-medium ${selectedId === item.id ? 'text-white' : 'text-gray-300'}`}>{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-text-secondary text-xs">{item.stage}</td>
                  <td className="px-4 py-3 text-text-secondary text-xs">{item.reason}</td>
                  <td className="px-4 py-3">
                     <span className={`inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold ${item.priority === 'Critical' ? 'bg-red-500/10 text-red-500' : item.priority === 'High' ? 'bg-orange-500/10 text-orange-500' : 'bg-blue-500/10 text-blue-500'}`}>
                       {item.priority}
                     </span>
                  </td>
                  <td className="px-4 py-3 text-right rounded-r-xl font-mono text-xs text-white">
                    {item.blockedTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail View */}
      <div className="flex flex-col rounded-3xl border border-border-subtle bg-surface p-6 relative overflow-hidden">
        {/* Background gradient for detail card */}
        <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-[#1f1f1f] to-transparent pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shadow-lg shadow-red-900/20">
               <ShieldAlert className="text-white" size={24} />
            </div>
            <div className="px-2 py-1 bg-red-500/10 border border-red-500/20 rounded text-[10px] font-bold text-red-400 uppercase tracking-wider">
               Action Required
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-white mb-1">{selectedRisk.name}</h2>
          <p className="text-sm text-text-secondary mb-6">{selectedRisk.vendor}</p>

          <div className="space-y-4">
            <div className="group rounded-xl bg-[#161616] p-4 border border-white/5 hover:border-white/10 transition-colors">
              <p className="text-xs text-text-secondary mb-1">Block Reason</p>
              <p className="text-sm font-medium text-white flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                {selectedRisk.reason}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
               <div className="rounded-xl bg-[#161616] p-4 border border-white/5">
                 <p className="text-xs text-text-secondary mb-1">Stage</p>
                 <p className="text-sm font-medium text-white">{selectedRisk.stage}</p>
               </div>
               <div className="rounded-xl bg-[#161616] p-4 border border-white/5">
                 <p className="text-xs text-text-secondary mb-1">Version</p>
                 <p className="text-sm font-medium text-white">2.1.0</p>
               </div>
            </div>

            <button className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold text-black hover:bg-gray-200 transition-colors">
               <Zap size={16} fill="currentColor" />
               Resolve Issue
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};