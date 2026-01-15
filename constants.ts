
import { RiskItem, ChartDataPoint } from './types';

export const RISK_DATA: RiskItem[] = [
  {
    id: '1',
    name: 'SuperPay App',
    stage: 'Security Review',
    blockedTime: '48h 12m',
    reason: 'API Policy Violation',
    priority: 'Critical',
    priorityColor: 'text-red-500 bg-red-500/20',
    vendor: 'FinTech Corp'
  },
  {
    id: '2',
    name: 'TravelGo',
    stage: 'Joint Debug',
    blockedTime: '24h 30m',
    reason: 'SDK Version Mismatch',
    priority: 'High',
    priorityColor: 'text-orange-500 bg-orange-500/20',
    vendor: 'Global Travel'
  },
  {
    id: '3',
    name: 'EduSmart',
    stage: 'Development',
    blockedTime: '12h 05m',
    reason: 'Certificate Expired',
    priority: 'Med',
    priorityColor: 'text-yellow-500 bg-yellow-500/20',
    vendor: 'EduTech Inc'
  },
  {
    id: '4',
    name: 'StreamVideo',
    stage: 'Testing',
    blockedTime: '6h 10m',
    reason: 'Performance Low',
    priority: 'Low',
    priorityColor: 'text-slate-300 bg-slate-700',
    vendor: 'StreamLine'
  },
];

export const VELOCITY_DATA: ChartDataPoint[] = [
  { name: 'Mon', value: 20, value2: 10 },
  { name: 'Tue', value: 35, value2: 15 },
  { name: 'Wed', value: 45, value2: 25 },
  { name: 'Thu', value: 60, value2: 35 },
  { name: 'Fri', value: 75, value2: 45 },
  { name: 'Sat', value: 85, value2: 55 },
  { name: 'Sun', value: 95, value2: 65 },
];

export const CATEGORY_DATA = [
  { name: 'Social', value: 25, color: '#E2E8F0' },
  { name: 'Finance', value: 20, color: '#a855f7' },
  { name: 'Game', value: 15, color: '#ec4899' },
  { name: 'Tools', value: 10, color: '#f59e0b' },
  { name: 'Edu', value: 10, color: '#10b981' },
  { name: 'Others', value: 20, color: '#64748b' },
];

export const BLOCKED_APPS_DATA = [
  { name: 'SpeedBooster Pro', vendor: 'TechWave Ltd.', reason: 'Performance', days: '14d', color: 'red' },
  { name: 'FitLife Tracker', vendor: 'HealthForce', reason: 'UX Issues', days: '5d', color: 'orange' },
  { name: 'CryptoWallet X', vendor: 'SecureBlock Inc.', reason: 'API Usage', days: '28d', color: 'red' },
  { name: 'Daily News', vendor: 'MediaGroup', reason: 'Content', days: '2d', color: 'yellow' },
];

export const DEVICE_DATA = [
  { name: 'Phone', count: 45, fill: '#3b82f6' },
  { name: 'Tablet', count: 25, fill: '#8b5cf6' },
  { name: 'Wearable', count: 15, fill: '#10b981' },
  { name: 'Auto', count: 10, fill: '#f59e0b' },
  { name: 'Vision', count: 5, fill: '#ef4444' },
];

export const RETENTION_DATA = [
  { week: 'W1', rate: 100 },
  { week: 'W2', rate: 78 },
  { week: 'W3', rate: 65 },
  { week: 'W4', rate: 58 },
  { week: 'W5', rate: 55 },
  { week: 'W6', rate: 53 },
  { week: 'W7', rate: 52 },
  { week: 'W8', rate: 51 },
];

export const API_PERFORMANCE_DATA = [
  { time: '00:00', latency: 45, requests: 2400 },
  { time: '04:00', latency: 40, requests: 1800 },
  { time: '08:00', latency: 120, requests: 8500 },
  { time: '12:00', latency: 180, requests: 12400 },
  { time: '16:00', latency: 160, requests: 10200 },
  { time: '20:00', latency: 140, requests: 9600 },
  { time: '23:59', latency: 85, requests: 5400 },
];
