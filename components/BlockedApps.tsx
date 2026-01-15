import React from 'react';
import { Ban, MoreHorizontal } from 'lucide-react';
import { BLOCKED_APPS_DATA } from '../constants';

export const BlockedApps: React.FC = () => {
  return (
    <div className="rounded-3xl border border-border-subtle bg-surface p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-medium text-white">Blocked</h2>
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/10 text-[10px] font-bold text-red-500">4</span>
        </div>
        <button className="text-text-secondary hover:text-white">
           <MoreHorizontal size={14} />
        </button>
      </div>
      <div className="flex-1 overflow-auto -mx-2 px-2">
        <div className="space-y-1">
            {BLOCKED_APPS_DATA.map((app) => (
                <div key={app.name} className="flex items-center justify-between rounded-xl p-3 hover:bg-[#1a1a1a] transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-[#1a1a1a] group-hover:bg-[#222] border border-white/5 flex items-center justify-center">
                            <Ban size={14} className="text-red-400" />
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-200 group-hover:text-white">{app.name}</div>
                            <div className="text-[10px] text-gray-500">{app.reason}</div>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="block text-xs font-bold text-white">{app.days}</span>
                        <span className="block text-[10px] text-gray-600">Delayed</span>
                    </div>
                </div>
            ))}
        </div>
        <button className="mt-4 w-full rounded-xl border border-border-subtle py-2 text-xs font-medium text-text-secondary hover:bg-[#1a1a1a] hover:text-white transition-colors">
            View All Issues
        </button>
      </div>
    </div>
  );
};