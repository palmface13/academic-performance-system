import React, { useState } from 'react';
import type { Grade } from '../../types';

interface GradeFormProps {
  onSubmit: (grade: Omit<Grade, 'id'>) => void;
  studentId: string;
  disciplineId: string;
}

export function GradeForm({ onSubmit, studentId, disciplineId }: GradeFormProps) {
  const [value, setValue] = useState<number>(0);
  const [type, setType] = useState<Grade['type']>('assignment');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      studentId,
      disciplineId,
      value,
      type,
      comment,
      date: new Date(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Grade</label>
        <input
          type="number"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as Grade['type'])}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="assignment">Assignment</option>
          <option value="exam">Exam</option>
          <option value="project">Project</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit Grade
      </button>
    </form>
  );
}