import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../usermodels/User';
import { UserService } from '../userservice/user.service';
import { Router } from '@angular/router';
import { UserData } from '../usermodels/userdata.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlogincomponent',
  templateUrl: './userlogincomponent.component.html',
  styleUrls: ['./userlogincomponent.component.css']
})
export class UserlogincomponentComponent implements OnInit {

  invalidUser:boolean;
  user:UserLogin = new UserLogin();
  userForm:FormGroup;
  emailRequired:boolean;
  passwordRequired:boolean;
  constructor(private userService:UserService,public router: Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      email : new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{3,}')
      ]),
      password : new FormControl('',[Validators.required])
    });
  }

  userLogin(){
      this.userService.userLogin(this.user).subscribe(result=>{
        if(result){
          var firstName = result.firstName;
          this.router.navigate(['/welcome'],firstName);
        }else {
          this.invalidUser = true;
        }
      });
  }

  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }

}
