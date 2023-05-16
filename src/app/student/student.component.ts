import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../interfaces/student';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentProfile?: Student;
  studentform!: FormGroup;
 

  constructor(private studentservice: StudentService, private fb: FormBuilder, private router: Router) {
    this.inittializeForm();
  }
  
  ngOnInit(): void {
    this.studentservice.getProfile()?.subscribe({
      next: (data) => {
        console.log(data.studentId);
        console.log(data);
        this.inittializeForm(data);
      },
    });
  }

  inittializeForm(student?: Student) {
    this.studentform = this.fb.group({
      studentId: [student?.studentId || ''],
      studentName: [student?.studentName || ''],
      email: [student?.email || ''],
      dateOfBirth: [student?.dateOfBirth || ''],
      studentCourses: [student?.studentCourses || ''],
    });
  }

  UpdateStudent() {
    this.studentservice.UpdateProfile(this.studentform);
    this.router.navigate(['/student']);
  }

}
