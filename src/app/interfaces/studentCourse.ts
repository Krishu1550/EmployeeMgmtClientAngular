import { Course } from './course';
import { Student } from './student';

export interface StudentCourse {
  studentCourseId: number;
  studentId: number;
  student?: Student;
  courseId: number;
  course?: Course;
}
