import React from 'react';
import { StudentList } from '../components/students/StudentList';
import { StudentFilters } from '../components/students/StudentFilters';

export function StudentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Students</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Student
        </button>
      </div>
      <StudentFilters />
      <StudentList />
    </div>
  );
}