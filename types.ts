import React from 'react';

export interface MetricData {
  title: string;
  value: string;
  subValue?: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
    label: string;
  };
  highlight?: boolean;
  colorClass?: string;
}

export interface RiskItem {
  id: string;
  name: string;
  stage: string;
  blockedTime: string;
  reason: string;
  priority: 'Critical' | 'High' | 'Med' | 'Low';
  priorityColor: string;
  vendor?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  value2?: number;
}