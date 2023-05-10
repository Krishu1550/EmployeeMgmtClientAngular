import { Course } from "./course";

export interface Teacher {
    teacherId: number;
    teacherName: string;
    courses: Course[] | undefined;
  }