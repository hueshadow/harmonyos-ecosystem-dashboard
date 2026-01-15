import React from 'react';
import { 
  LayoutDashboard, 
  PieChart, 
  Wallet, 
  List, 
  Activity, 
  ArrowRightLeft, 
  Settings, 
  HelpCircle,
  Bell,
  Search,
  ChevronDown,
  Grid,
  Zap,
  CheckCircle,
  Archive,
  AlertTriangle
} from 'lucide-react';
import { MetricCard } from './components/MetricCard';
import { LifecycleChart } from './components/LifecycleChart';
import { VelocityTrendChart } from './components/VelocityTrendChart';
import { StageEfficiency } from './components/StageEfficiency';
import { RiskSection } from './components/RiskSection';
import { CategoryDistribution } from './components/CategoryDistribution';
import { CityPerformance } from './components/CityPerformance';
import { BlockedApps } from './components/BlockedApps';
import { DeviceBreakdown } from './components/DeviceBreakdown';
import { RetentionChart } from './components/RetentionChart';
import { ApiPerformance } from './components/ApiPerformance';

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-main text-white font-sans selection:bg-primary/30">
       {/* Ambient Glow - Top Left */}
       <div 
         className="pointer-events-none fixed -left-32 -top-32 z-0 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]" 
         style={{ background: 'radial-gradient(circle, rgba(120, 90, 240, 0.5) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)' }}
       ></div>

      {/* Sidebar */}
      <aside className="sidebar-glass relative z-20 hidden w-[280px] flex-col px-6 py-8 lg:flex">
        {/* Logo Area */}
        <div className="mb-10 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
            <Activity size={18} />
          </div>
          <span className="text-lg font-semibold tracking-wide text-white">HarmonyOS</span>
        </div>

        {/* User Profile */}
        <div className="mb-8">
           <h2 className="text-2xl font-medium text-white">Welcome<br/>Back, Admin</h2>
           <p className="mt-2 text-xs text-text-secondary">Last login: 15 Jun 2025</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-6">
          <div>
            <p className="mb-4 px-2 text-xs font-medium uppercase tracking-wider text-text-secondary/60">Overview</p>
            <div className="space-y-1">
              <a href="#" className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-white/10 to-transparent px-4 py-3 text-sm font-medium text-white shadow-inner shadow-white/5 ring-1 ring-white/5">
                <LayoutDashboard size={18} />
                Dashboard
              </a>
              <a href="#" className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-white">
                <PieChart size={18} />
                Analytics
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 px-2 text-xs font-medium uppercase tracking-wider text-text-secondary/60">Management</p>
            <div className="space-y-1">
              <a href="#" className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-white">
                <List size={18} />
                Applications
              </a>
              <a href="#" className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-white">
                <Wallet size={18} />
                Resources
              </a>
              <a href="#" className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-white">
                <AlertTriangle size={18} />
                Risks
              </a>
            </div>
          </div>

           <div>
            <p className="mb-4 px-2 text-xs font-medium uppercase tracking-wider text-text-secondary/60">Others</p>
            <div className="space-y-1">
              <a href="#" className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-white">
                <Settings size={18} />
                Settings
              </a>
               <a href="#" className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-white/5 hover:text-white">
                <HelpCircle size={18} />
                Support
              </a>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden p-4 lg:p-8">
        
        {/* Top Bar */}
        <header className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
           <div className="flex items-center gap-2 text-sm text-text-secondary">
             <span>Overview</span>
             <span className="text-white/20">/</span>
             <span className="text-white">Dashboard</span>
           </div>

           <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="h-10 w-64 rounded-full bg-surface-highlight border border-border-subtle pl-10 pr-4 text-sm text-white placeholder-text-secondary/50 focus:border-white/20 focus:outline-none focus:ring-0"
                />
              </div>
              <button className="relative rounded-full bg-surface-highlight border border-border-subtle p-2.5 text-text-secondary hover:text-white transition-colors">
                <Bell size={18} />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-danger"></span>
              </button>
              <div className="flex items-center gap-3 rounded-full bg-surface-highlight border border-border-subtle p-1.5 pr-4 pl-1.5 cursor-pointer hover:bg-white/5 transition-colors">
                 <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
                 <span className="text-sm font-medium">Admin</span>
                 <ChevronDown size={14} className="text-text-secondary" />
              </div>
           </div>
        </header>

        {/* Content Grid */}
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 pb-10">
          
          {/* Header Stats Title */}
          <div className="flex items-end justify-between">
             <div>
               <div className="flex items-center gap-2 mb-1">
                 <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">Live Updates</span>
               </div>
               <h1 className="text-3xl font-medium text-white">Ecosystem Overview</h1>
             </div>
             <div className="flex gap-2">
                {['24H', '7D', '30D', 'ALL'].map((period, i) => (
                  <button key={period} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${i === 1 ? 'bg-white text-black' : 'bg-surface text-text-secondary hover:text-white'}`}>
                    {period}
                  </button>
                ))}
             </div>
          </div>

          {/* Top Metrics Row - Carousel Style */}
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            <MetricCard 
              data={{
                title: 'Total Apps',
                value: '12,450',
                icon: <Grid size={20} className="text-orange-400" />,
                colorClass: 'bg-orange-500/10',
                trend: { value: '+5.2%', isPositive: true, label: 'vs last week' }
              }}
            />
             <MetricCard 
              data={{
                title: 'Native Share',
                value: '40.2%',
                icon: <PieChart size={20} className="text-blue-400" />,
                colorClass: 'bg-blue-500/10',
                subValue: 'Target: 50%'
              }}
            />
             <MetricCard 
              data={{
                title: 'New Additions',
                value: '+125',
                icon: <Zap size={20} className="text-yellow-400" />,
                colorClass: 'bg-yellow-500/10',
                trend: { value: '+12%', isPositive: true, label: 'velocity' }
              }}
            />
             <MetricCard 
              data={{
                title: 'Listed Apps',
                value: '8,900',
                icon: <CheckCircle size={20} className="text-emerald-400" />,
                colorClass: 'bg-emerald-500/10',
                trend: { value: '+8.5%', isPositive: true, label: '' }
              }}
            />
             <MetricCard 
              data={{
                title: 'Delisted',
                value: '42',
                icon: <Archive size={20} className="text-red-400" />,
                colorClass: 'bg-red-500/10',
                trend: { value: '-1.2%', isPositive: false, label: 'churn' }
              }}
            />
             <MetricCard 
              data={{
                title: 'Risks',
                value: '12',
                icon: <AlertTriangle size={20} className="text-purple-400" />,
                colorClass: 'bg-purple-500/10',
                highlight: true
              }}
            />
          </section>

          {/* Row 2: Lifecycle & Funnel */}
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <LifecycleChart />
            
            {/* Funnel Widget - Custom Redesign */}
            <div className="rounded-3xl border border-border-subtle bg-surface p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-medium text-white">Conversion Funnel</h2>
                <button className="rounded-lg bg-surface-highlight p-1.5 text-text-secondary hover:text-white">
                  <ArrowRightLeft size={14} />
                </button>
              </div>
              
              <div className="relative my-4 flex-1 flex flex-col justify-center gap-4">
                 {/* Step 1 */}
                 <div className="group relative overflow-hidden rounded-2xl bg-[#161616] p-4 transition-all hover:bg-[#1a1a1a]">
                    <div className="flex justify-between items-center relative z-10">
                      <div>
                        <p className="text-xs text-text-secondary uppercase tracking-wider">Development</p>
                        <p className="text-xl font-bold text-white mt-1">4,200</p>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold text-xs">1</div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 bg-blue-500 transition-all group-hover:w-full w-0"></div>
                 </div>

                 {/* Step 2 */}
                 <div className="group relative overflow-hidden rounded-2xl bg-[#161616] p-4 transition-all hover:bg-[#1a1a1a]">
                    <div className="flex justify-between items-center relative z-10">
                      <div>
                        <p className="text-xs text-text-secondary uppercase tracking-wider">Review</p>
                        <p className="text-xl font-bold text-white mt-1">3,570</p>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold text-xs">2</div>
                    </div>
                     <div className="absolute bottom-0 left-0 h-1 bg-purple-500 transition-all group-hover:w-full w-0"></div>
                 </div>

                 {/* Step 3 */}
                 <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-500/5 to-transparent p-4 border border-green-500/20">
                    <div className="flex justify-between items-center relative z-10">
                      <div>
                        <p className="text-xs text-green-400 uppercase tracking-wider font-bold">Listed</p>
                        <p className="text-xl font-bold text-white mt-1">3,284</p>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-xs">3</div>
                    </div>
                 </div>
              </div>

              <div className="flex items-center justify-between border-t border-border-subtle pt-4">
                 <span className="text-xs text-text-secondary">Overall Rate</span>
                 <span className="text-lg font-bold text-white">78.2%</span>
              </div>
            </div>
          </section>

          {/* Row 3: Velocity & Efficiency */}
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <VelocityTrendChart />
            <StageEfficiency />
          </section>

          {/* Row 4: Risk Analysis */}
          <RiskSection />

          {/* Row 5: Bottom Details */}
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
             <CategoryDistribution />
             <CityPerformance />
             <BlockedApps />
          </section>

           {/* Row 6: Advanced Metrics */}
           <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
             <DeviceBreakdown />
             <RetentionChart />
             <ApiPerformance />
           </section>

        </div>
      </main>
    </div>
  );
};

export default App;