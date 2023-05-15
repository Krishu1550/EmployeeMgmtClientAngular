import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Course } from '../interfaces/course';
import { CoursesService } from '../services/courses.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-studentunenrollcourse',
  templateUrl: './student-unenroll.component.html',
})
export class StudentUnEnrollCourse implements OnInit {
  course: Course = {
    courseId: 0,
    courseName: '',
    numOfSlot: 0,
    numOfClassPerWeek: 0,
    teacherId: 0,
    assignmentFile: '',
    studentCourses: undefined,
  };

  constructor(private service: CoursesService) {
    this.getCourseDetails();
    this.service.courseEmiter.subscribe({
      next: (data) => (this.course = data),
    });
  }
  ngOnInit(): void {}

  getCourseDetails() {
    this.service.courseEmiter.subscribe({
      next: (data) => {
        console.log(data);
        this.course = data;
        this.course.courseId = data.courseId;
        this.course.courseName = data.courseName;
      },
    });
  }
}
