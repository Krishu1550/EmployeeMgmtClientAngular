import { StudentCourse } from "./studentCourse";

export interface Student {
    studentId: number;
    studentName: string;
    email: string;
    dateOfBirth?: Date;
    studentCourses?: StudentCourse[];
  }