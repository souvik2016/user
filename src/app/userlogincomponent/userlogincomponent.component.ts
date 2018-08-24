import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../usermodels/User';

@Component({
  selector: 'app-userlogincomponent',
  templateUrl: './userlogincomponent.component.html',
  styleUrls: ['./userlogincomponent.component.css']
})
export class UserlogincomponentComponent implements OnInit {

  user:UserLogin = new UserLogin();
  constructor() { }

  ngOnInit() {
  }

}
