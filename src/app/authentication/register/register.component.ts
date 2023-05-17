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
  registerStudent() 
   {


      this.registerService.addRegisterUser(this.register)
    .subscribe();
    
      
    

  }

}
