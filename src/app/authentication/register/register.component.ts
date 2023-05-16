import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/interfaces/registerModel';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  title = 'EmployeeClientManagement';
  showForm: boolean = false;
  register: RegisterModel = {
    fullName:'',
    email: '',
    password: '',
    role: ''
  };

  constructor(private registerService: RegisterService, private router: Router) {}
  registerStudent() {
    if (this.register.email === ''){
      this.registerService.addRegisterUser(this.register)
    .subscribe(
      response => {
        this.register = {
          fullName:'',
          email: '',
          password: '',
          role: ''
        }
      }
    );
  }
}

}
