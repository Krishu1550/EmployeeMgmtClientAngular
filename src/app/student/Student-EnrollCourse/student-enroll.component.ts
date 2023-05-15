import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../interfaces/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentnewcourse',
  templateUrl: './student-enroll.component.html',
})
export class StudentEnrollCourse {
  enrollCourses?: Course[];
  constructor(
    private courseService: CoursesService,
    private studentService: StudentService,
    private router: Router
  ) {
    courseService.getAllCourses().subscribe({
      next: (data) => {
        this.enrollCourses = data;
      },
    });
  }
  enrollCourse(courseId: number | undefined) {
    this.studentService.enrollCourse(courseId);
    this.router.navigate(['student-enrolledcourse']);
  }
}
