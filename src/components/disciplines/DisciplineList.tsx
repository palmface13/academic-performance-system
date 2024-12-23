import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const mockDisciplines = [
  { id: '1', name: 'Mathematics', teacher: 'Dr. Smith', credits: 5, students: 120 },
  { id: '2', name: 'Physics', teacher: 'Dr. Johnson', credits: 4, students: 85 },
];

export function DisciplineList() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Students</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mockDisciplines.map((discipline) => (
            <tr key={discipline.id}>
              <td className="px-6 py-4 whitespace-nowrap">{discipline.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{discipline.teacher}</td>
              <td className="px-6 py-4 whitespace-nowrap">{discipline.credits}</td>
              <td className="px-6 py-4 whitespace-nowrap">{discipline.students}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}