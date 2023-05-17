import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Course } from '../interfaces/course';
import { CoursesService } from '../services/courses.service';
import { Router } from '@angular/router';
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

  constructor(private service: CoursesService,private studentservice:StudentService, private router : Router) {
    this.getCourseDetails();
   
  }
  ngOnInit(): void {}

  getCourseDetails() {
   this.course= this.service.getcourseDetails();
  }

  unenrollCourse(courseId:number|undefined)
  {

    if(courseId==null)
    {
      
    }
    else
    {
      this.studentservice.unEnrollCourse(courseId)
      this.router.navigate(['student-enrollcourse']);
    }


  }
}
