import React from 'react';

export function DisciplineFilters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search disciplines..."
          className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          <option value="">All Teachers</option>
          <option value="smith">Dr. Smith</option>
          <option value="johnson">Dr. Johnson</option>
        </select>
        <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="credits">Credits</option>
          <option value="students">Students</option>
        </select>
      </div>
    </div>
  );
}