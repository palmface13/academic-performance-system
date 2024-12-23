import React from 'react';
import { BarChart, Users, BookOpen, GraduationCap } from 'lucide-react';

const stats = [
  { label: 'Total Students', value: '1,234', icon: <Users className="w-8 h-8" />, color: 'bg-blue-500' },
  { label: 'Active Courses', value: '42', icon: <BookOpen className="w-8 h-8" />, color: 'bg-green-500' },
  { label: 'Average Grade', value: '85%', icon: <BarChart className="w-8 h-8" />, color: 'bg-yellow-500' },
  { label: 'Graduation Rate', value: '94%', icon: <GraduationCap className="w-8 h-8" />, color: 'bg-purple-500' },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className={`inline-flex p-3 rounded-lg ${stat.color} text-white mb-4`}>
            {stat.icon}
          </div>
          <h3 className="text-2xl font-bold">{stat.value}</h3>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}