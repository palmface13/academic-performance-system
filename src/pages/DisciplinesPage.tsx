import React from 'react';
import { DisciplineList } from '../components/disciplines/DisciplineList';
import { DisciplineFilters } from '../components/disciplines/DisciplineFilters';

export function DisciplinesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Disciplines</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Discipline
        </button>
      </div>
      <DisciplineFilters />
      <DisciplineList />
    </div>
  );
}