import React from 'react';
import { StatsGrid } from '../components/dashboard/StatsGrid';
import { PerformanceChart } from '../components/dashboard/PerformanceChart';
import { RecentActivity } from '../components/dashboard/RecentActivity';

export function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <StatsGrid />
      <PerformanceChart />
      <RecentActivity />
    </div>
  );
}