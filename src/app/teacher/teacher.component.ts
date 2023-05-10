import { Component, OnInit } from '@angular/core';
import { Teacher } from '../interfaces/teacher';
import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {
  title = 'EmployeeClientManagement';
  teachers: Teacher[] = [];
  teacher: Teacher = {
    teacherId: 0,
    teacherName: '',
    courses: undefined,
  };

  constructor(private teacherService: TeachersService) {}
  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers() {
    this.teacherService.getAllTeachers().subscribe((response) => {
      this.teachers = response;
    });
  }

  onSubmit() {
    console.log(this.teacher);
  }
}
