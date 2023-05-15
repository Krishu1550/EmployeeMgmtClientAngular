import { StudentCourse } from './studentCourse';
import { Teacher } from './teacher';

export class Course {
  courseId: number | undefined;
  courseName: string | undefined;
  numOfSlot: number | undefined;
  numOfClassPerWeek: number | undefined;
  teacherId: number | undefined;
  teacher?: Teacher | undefined;
  assignmentFile?: string | undefined;
  studentCourses?: StudentCourse[] | undefined;
}
