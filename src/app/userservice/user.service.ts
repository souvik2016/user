import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRegistration } from '../usermodels/UserRegistration';
import { Observable } from 'rxjs';
import { UserLogin } from '../usermodels/User';

@Injectable()
export class UserService {

    constructor(private http:HttpClient){}

    registerUser(userRegistration:UserRegistration):Observable<any>{
        return this.http.post("http://localhost:8080/user/register",userRegistration);
    }

    getUser(emailId:string):Observable<any>{
       return this.http.get("http://localhost:8080/user/"+emailId);
    }

    userLogin(user:UserLogin):Observable<any>{
        return this.http.post("http://localhost:8080/user/login",user);
    }

    getCurrentLocation(lat,lng): Observable<any> {
        return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&sensor=true");
      }
}