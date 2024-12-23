import React, { useState } from 'react';
import { GradeForm } from '../components/grades/GradeForm';
import { GradeList } from '../components/grades/GradeList';
import type { Grade } from '../types';

export function GradesPage() {
  const [grades, setGrades] = useState<Grade[]>([]);

  const handleSubmitGrade = (newGrade: Omit<Grade, 'id'>) => {
    const grade: Grade = {
      ...newGrade,
      id: Math.random().toString(36).substr(2, 9),
    };
    setGrades([...grades, grade]);
  };

  const handleDeleteGrade = (gradeId: string) => {
    setGrades(grades.filter((grade) => grade.id !== gradeId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Grade Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Add New Grade</h2>
          <GradeForm
            onSubmit={handleSubmitGrade}
            studentId="1"
            disciplineId="1"
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Grade History</h2>
          <GradeList grades={grades} onDelete={handleDeleteGrade} />
        </div>
      </div>
    </div>
  );
}