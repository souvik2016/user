import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserlogincomponentComponent } from './userlogincomponent/userlogincomponent.component';
import { UserregistrationcompenentComponent } from './userregistrationcompenent/userregistrationcompenent.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmailValidatorDirective } from './userdirectives/email-validator.directive';

const appRoutes: Routes = [
  {path:'login',component:UserlogincomponentComponent},
  {path:'registration',component:UserregistrationcompenentComponent},
  {path:'',redirectTo: '/login',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserlogincomponentComponent,
    UserregistrationcompenentComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
