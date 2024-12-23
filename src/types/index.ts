export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  createdAt: Date;
}

export interface Student extends User {
  groupId: string;
  parentId?: string;
  enrollmentDate: Date;
}

export interface Group {
  id: string;
  name: string;
  academicYear: string;
  disciplines: string[];
}

export interface Grade {
  id: string;
  studentId: string;
  disciplineId: string;
  value: number;
  date: Date;
  type: 'exam' | 'assignment' | 'project';
  comment?: string;
}

export interface Discipline {
  id: string;
  name: string;
  teacherId: string;
  description: string;
  credits: number;
}