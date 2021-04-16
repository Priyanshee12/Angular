import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { CommonService } from 'src/assets/data/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  type: any;
  user: any;
  // tslint:disable-next-line: variable-name
  constructor(private _service: CommonService, private _router: Router ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  login(formlogin: NgForm){
    console.log(formlogin.value);
    // this.usertype=Response;
    // tslint:disable-next-line: deprecation
    this._service.userLogin(formlogin.value).subscribe(
      (Response: any) => {
       console.log("res",Response);
       localStorage.setItem('token',Response.token)
       console.log("email",Response.user.email)
       console.log("type",Response.user.type);
      //  localStorage.setItem("type",Response.user.type);
      //  localStorage.setItem('user',JSON.stringify(formlogin.value));
    // console.log(this.user);
        if (Response.status === 401)
        {
          alert(Response.message);
        }
        else {
          
       localStorage.setItem('fname',(Response.user.fname)); 
       localStorage.setItem('lname',(Response.user.lname)); 
       localStorage.setItem('email',(Response.user.email)); 
      //  localStorage.setItem("item",Response.user);
          console.log("rfyidhsjk",Response.user);

        this._service.isUserLoggedIn = true;
        
        (Response.user.type=='admin'?this._service.isAdmin=true:this._service.isAdmin=false);
        // console.log("type",Response.formlogin.value.type)
        // this.type=formlogin.type;
        // this._router.navigate(['/profile']);
        this._router.navigate([`${Response.user.type}`]);
        // this._router.navigate(['/admin']);
        // console.log(data.errors)
      }
      });
    }
    register(){
      this._router.navigate(['registration']);
    }
  }
