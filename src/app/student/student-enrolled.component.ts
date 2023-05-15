import { Component } from '@angular/core';
import { Course } from '../interfaces/course';
import { StudentCourse } from '../interfaces/studentCourse';
import { StudentService } from '../services/student.service';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-studentcourse',
  templateUrl: './student-enrolled.component.html',
})
export class StudentEnrolledCourse {
  enrolledCourses: Course[] = [];
  constructor(
    private studentservice: StudentService,
    private courseService: CoursesService
  ) {
    studentservice.getEnrolledCourse()?.subscribe({
      next: (data) => {
        console.log(data);
        this.enrolledCourses = data;
      },
    });
  }

  unEnrolledCourse(Course: Course) {
    console.log('Let ' + Course);
    this.courseService.courseDetails(Course);
  }
}
