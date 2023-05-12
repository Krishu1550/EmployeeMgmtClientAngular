import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../interfaces/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'EmployeeClientManagement';
  showForm : boolean = false;
 
  courses : Course[] = [];
  course: Course = {
    courseId: 0,
    courseName: '',
    numOfSlot: 0,
    numOfClassPerWeek: 0,
    teacherId: 0,
    assignmentFile:'',
    studentCourses: undefined
  }

  constructor(private courseService: CoursesService,
    private router : Router){

  }
  ngOnInit(): void {
    
   this.getAllCourses();
  }

  toggleCreateForm() {
    this.showForm = !this.showForm;
    
  }
  

  getAllCourses(){
    this.courseService.getAllCourses()
    .subscribe(
      response => {
        this.courses = response;
        this.course = {
          courseId: 0,
          courseName: '',
          numOfSlot: 0,
          numOfClassPerWeek: 0,
          teacherId: 0,
          assignmentFile:'',
          studentCourses: undefined
        }
      }
    );
  }

  onSubmit(){
    if (this.course.courseId === 0){
      this.courseService.addCourse(this.course)
    .subscribe(
      response => {
        this.getAllCourses();
        this.course = {
          courseId: 0,
          courseName: '',
          numOfSlot: 0,
          numOfClassPerWeek: 0,
          teacherId: 0,
          assignmentFile:'',
          studentCourses: undefined
        }
      }
    );

    }else{
      this.updateCourse(this.course);
    }
    
    this.showForm = false;
    this.router.navigateByUrl('/course')
   
  }

  deleteCourse(id: number){
    this.courseService.deleteCourse(id)
    .subscribe(
      response => {
        this.getAllCourses();
      }
    );
  }

  populateData(course: Course){
    this.course = course;
  }

  updateCourse(course: Course){
    this.showForm = true;
    this.populateData(course);
    this.courseService.updateCourse(this.course)
    .subscribe(
      response => {
        // this.getAllTeachers();
      }

    );
  }
  
}


