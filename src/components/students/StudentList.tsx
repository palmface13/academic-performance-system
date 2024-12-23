import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

const mockStudents = [
  { id: '1', name: 'John Doe', email: 'john@example.com', group: '12A', enrollmentDate: '2023-09-01' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', group: '12B', enrollmentDate: '2023-09-01' },
];

export function StudentList() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Group</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enrollment Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mockStudents.map((student) => (
            <tr key={student.id}>
              <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.group}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.enrollmentDate}</td>
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