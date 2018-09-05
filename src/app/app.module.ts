import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserlogincomponentComponent } from './userlogincomponent/userlogincomponent.component';
import { UserregistrationcompenentComponent } from './userregistrationcompenent/userregistrationcompenent.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmailValidatorDirective } from './userdirectives/email-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './userservice/user.service';
import { WelcomeusercomponentComponent } from './welcomeusercomponent/welcomeusercomponent.component';
import { SuccessregcomponentComponent } from './successregcomponent/successregcomponent.component';

const appRoutes: Routes = [
  {path:'login',component:UserlogincomponentComponent},
  {path:'registration',component:UserregistrationcompenentComponent},
  {path:'welcome',component:WelcomeusercomponentComponent},
  {path:'success',component:SuccessregcomponentComponent},
  {path:'',redirectTo: '/login',pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserlogincomponentComponent,
    UserregistrationcompenentComponent,
    EmailValidatorDirective,
    WelcomeusercomponentComponent,
    SuccessregcomponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
