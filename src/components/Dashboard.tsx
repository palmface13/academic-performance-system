import React from 'react';
import { BarChart, Users, BookOpen, GraduationCap } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Students', value: '1,234', icon: <Users className="w-8 h-8" />, color: 'bg-blue-500' },
    { label: 'Active Courses', value: '42', icon: <BookOpen className="w-8 h-8" />, color: 'bg-green-500' },
    { label: 'Average Grade', value: '85%', icon: <BarChart className="w-8 h-8" />, color: 'bg-yellow-500' },
    { label: 'Graduation Rate', value: '94%', icon: <GraduationCap className="w-8 h-8" />, color: 'bg-purple-500' },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {/* Stats Grid */}
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

      {/* Performance Chart */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">
          Chart placeholder - Will be implemented with a charting library
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex items-center p-4 border-b last:border-b-0">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="font-medium">New grade entered for Mathematics</p>
                <p className="text-sm text-gray-600">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;