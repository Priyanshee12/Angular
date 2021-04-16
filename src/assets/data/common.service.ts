import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url: any;
  
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }
  isUserLoggedIn = false;
  isAdmin=false;


  // tslint:disable-next-line: typedef
  createUser(user: any){
    console.log('service', user);
    return this._http.post('http://localhost:8000/user/add', user);
  }
  // tslint:disable-next-line: typedef
  getAllUser(){
    return this._http.get('http://localhost:8000/user');
  }
  // tslint:disable-next-line: typedef
  userLogin(user: any){
    return this._http.post('http://localhost:8000/auth/login', user);
  }

  deleteUser(id:any)
  {
    return this._http.delete("http://localhost:8000/user/"+id);
  }

  getToken()
  {
    return localStorage.getItem('token')
  }

  getCurrentData(user: any){
    return this._http.put("http://localhost:8000/user/edit", user);
  }
  getfname()
  {
    return localStorage.getItem('fname') 
  }
  getlname()
  {
    return localStorage.getItem('lname')
  }
  getemail()
  {
    return localStorage.getItem('email')
  }
}


