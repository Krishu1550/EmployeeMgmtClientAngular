import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeachersService } from './services/teachers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'EmployeeClientManagement';

  constructor(private teacherService: TeachersService,
    private router : Router){

  }
  ngOnInit(): void {

    
  }

  goToLogin() {
    this.router.navigate(['authentication/login']);
  }
  

  }



