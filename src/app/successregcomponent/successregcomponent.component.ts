import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-successregcomponent',
  templateUrl: './successregcomponent.component.html',
  styleUrls: ['./successregcomponent.component.css']
})
export class SuccessregcomponentComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['login']);
  }, 5000);  //5s
  }

}
