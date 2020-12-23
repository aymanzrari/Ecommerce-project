import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8081/';
  constructor(private _http: HttpClient) { }

  getUserDetails(username: string, password: string):Observable<any> {

   /* const headers = new HttpHeaders({
      Authorization: 'Bearer' + btoa(username + ":" + password)
    })*/

    return this._http.post(this.url, {username,password})


    // console.log(`auth service 1 : username :${username} password : ${password}`)

    //const myUser : User=new User(username,password);

    //console.log(`auth service 2 : username :${myUser.username} password : ${myUser.password}`)

    // console.log(this._http.post<any>(this.url,myUser));
    // return (this._http.post<any>(this.url,myUser))
  }

}
