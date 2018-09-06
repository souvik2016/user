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
        Validators.required
      ]),
      password : new FormControl('',[Validators.required])
    });
  }

  userLogin(){
    if(Number(this.user.userName)){
      this.user.mobileNo = this.user.userName;
    }else {
      this.user.emailId = this.user.userName;
    }
    this.userService.userLogin(this.user).subscribe(result=>{
      if(result){
        this.router.navigate(['/welcome',{firstName:result.firstName}]);
      }else {
        this.invalidUser = true;
        this.userForm.reset();
      }
    });
  }

  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }

}
