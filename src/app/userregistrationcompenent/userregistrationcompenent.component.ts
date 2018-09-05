import { Component, OnInit } from '@angular/core';
import {UserRegistration} from '../usermodels/UserRegistration'
import { UserService } from '../userservice/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregistrationcompenent',
  templateUrl: './userregistrationcompenent.component.html',
  styleUrls: ['./userregistrationcompenent.component.css']
})
export class UserregistrationcompenentComponent implements OnInit {

  userRegForm:FormGroup;
  userReg:UserRegistration = new UserRegistration();
  firstNameVal:boolean = true;

  constructor(private userService:UserService,public router: Router) { }

  ngOnInit() {
    this.userRegForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      email : new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{3,}')
      ]),
      city: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required]),
      password : new FormControl('',[
        Validators.required,
        Validators.pattern("^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$")
      ])
    });
  }

  registerUser(){
    // this.userService.getUser(this.userReg.emailId).subscribe(result =>{
    //   console.log(result.firstName);
    // });
    this.userService.registerUser(this.userReg).subscribe();
    this.userRegForm.reset();
    this.router.navigate(['/success']);
  }

  get firstName() { return this.userRegForm.get('firstName'); }
  get lastName() { return this.userRegForm.get('lastName'); }
  get email() { return this.userRegForm.get('email'); }
  get city() { return this.userRegForm.get('city'); }
  get country() { return this.userRegForm.get('country'); }
  get password() { return this.userRegForm.get('password'); }

}
