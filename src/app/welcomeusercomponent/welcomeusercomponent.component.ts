import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcomeusercomponent',
  templateUrl: './welcomeusercomponent.component.html',
  styleUrls: ['./welcomeusercomponent.component.css']
})
export class WelcomeusercomponentComponent implements OnInit {
  firstName:string;
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.firstName= this.route.snapshot.paramMap.get('firstName');
    console.log(this.firstName);
  }

}
