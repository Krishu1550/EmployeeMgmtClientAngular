import { StudentCourse } from "./studentCourse";
import { Teacher } from "./teacher";

export interface Course {
    courseId: number;
    courseName: string;
    numOfSlot: number;
    numOfClassPerWeek: number;
    teacherId: number;
    teacher?: Teacher;
    assignmentFile?: string;
    studentCourses?: StudentCourse[] | undefined;
  }