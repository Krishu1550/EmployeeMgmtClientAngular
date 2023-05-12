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
<<<<<<< HEAD
  teachers: Teacher[] = [];
=======
  showForm : boolean = false;
 
  teachers : Teacher[] = [];
>>>>>>> a575978d32f3c22527a4f38e560ceb7cced76eaa
  teacher: Teacher = {
    teacherId: 0,
    teacherName: '',
    courses: undefined,
  };

<<<<<<< HEAD
  constructor(private teacherService: TeachersService) {}
  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers() {
    this.teacherService.getAllTeachers().subscribe((response: Teacher[]) => {
      this.teachers = response;
    });
  }

  onSubmit() {
    console.log(this.teacher);
=======
  constructor(private teacherService: TeachersService,
    private router : Router){

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
>>>>>>> a575978d32f3c22527a4f38e560ceb7cced76eaa
  }
}
