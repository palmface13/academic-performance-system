import React from 'react';
import { Users } from 'lucide-react';

const activities = [
  { title: 'New grade entered for Mathematics', time: '2 hours ago' },
  { title: 'Student attendance updated', time: '3 hours ago' },
  { title: 'New assignment created', time: '5 hours ago' },
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center p-4 border-b last:border-b-0">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <Users className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-medium">{activity.title}</p>
              <p className="text-sm text-gray-600">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}