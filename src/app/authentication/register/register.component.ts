import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModelVM } from 'src/app/interfaces/registerModelVM';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  title = 'EmployeeClientManagement';
  showForm: boolean = false;
  register: RegisterModelVM = {
    fullName:'',
    email: '',
    password: '',
    confirmPassword: ''
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
          confirmPassword: ''
        }
      }
    );
    if (this.register.password !== this.register.confirmPassword) {
       'Passwords do not match.';
    } else {
     
      this.router.navigate(['/login']);
    }
  }
}

}
