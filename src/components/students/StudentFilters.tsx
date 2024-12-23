import React from 'react';

export function StudentFilters() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search students..."
          className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          <option value="">All Groups</option>
          <option value="12A">12A</option>
          <option value="12B">12B</option>
        </select>
        <select className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="group">Group</option>
          <option value="date">Enrollment Date</option>
        </select>
      </div>
    </div>
  );
}