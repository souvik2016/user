import { Component, OnInit } from '@angular/core';
import {UserRegistration} from '../usermodels/UserRegistration'
import { UserService } from '../userservice/user.service';

@Component({
  selector: 'app-userregistrationcompenent',
  templateUrl: './userregistrationcompenent.component.html',
  styleUrls: ['./userregistrationcompenent.component.css']
})
export class UserregistrationcompenentComponent implements OnInit {

  userReg:UserRegistration = new UserRegistration();
  firstNameVal:boolean = true;

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  registerUser(){
    // this.userService.getUser(this.userReg.emailId).subscribe(result =>{
    //   console.log(result.firstName);
    // });
    this.userService.registerUser(this.userReg).subscribe();
  }

  firstNameValidation(event:any){
    if(event.target.value.length>0){
      this.firstNameVal=true;
    }else {
      this.firstNameVal=false;
    }
  }

}
