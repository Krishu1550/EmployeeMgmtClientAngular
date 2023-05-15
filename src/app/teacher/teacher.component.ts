import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Teacher } from '../interfaces/teacher';
import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  title = 'EmployeeClientManagement';
  showForm : boolean = false;

  teachers: Teacher[] = [];
  teacher: Teacher = {
    teacherId: 0,
    teacherName: '',
    courses: undefined,
  };


  constructor(private teacherService: TeachersService , private router : Router) {

  }
  ngOnInit(): void {
    this.getAllTeachers();
    
  }

  toggleCreateForm() {
    this.showForm = !this.showForm;
    
  }
  

  getAllTeachers(){
    this.teacherService.getAllTeachers()
    .subscribe(
      response => {
        this.teachers = response;
        this.teacher = {
          teacherId: 0,
          teacherName: '',
          courses: undefined
        }
      }
    );
  }

  onSubmit(){
    if (this.teacher.teacherId === 0){
      this.teacherService.addTeacher(this.teacher)
    .subscribe(
      response => {
        this.getAllTeachers();
        this.teacher = {
          teacherId: 0,
          teacherName: '',
          courses: undefined
        }
      }
    );

    }else{
      this.updateTeacher(this.teacher);
    }
    
    this.showForm = false;
    this.router.navigateByUrl('/teacher')
   
  }

  deleteTeacher(id: number){
    this.teacherService.deleteTeacher(id)
    .subscribe(
      response => {
        this.getAllTeachers();
      }
    );
  }

  populateData(teacher: Teacher){
    this.teacher = teacher;
  }

  updateTeacher(teacher: Teacher){
    this.showForm = true;
    this.populateData(teacher);
    this.teacherService.updateTeacher(this.teacher)
    .subscribe(
      response => {
        // this.getAllTeachers();
      }

    );

  }
}

