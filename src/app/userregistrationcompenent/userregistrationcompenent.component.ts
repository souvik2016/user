import { Component, OnInit } from '@angular/core';
import {UserRegistration} from '../usermodels/UserRegistration'

@Component({
  selector: 'app-userregistrationcompenent',
  templateUrl: './userregistrationcompenent.component.html',
  styleUrls: ['./userregistrationcompenent.component.css']
})
export class UserregistrationcompenentComponent implements OnInit {

  userReg:UserRegistration = new UserRegistration();
  firstNameVal:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  registerUser(){
    console.log('first name',this.userReg.firstName);
  }

  firstNameValidation(event:any){
    console.log(event.target.value.length);
    if(event.target.value.length>0){
      this.firstNameVal=true;
    }else {
      this.firstNameVal=false;
    }
    console.log(this.firstNameVal);
  }

}
