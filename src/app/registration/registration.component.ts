import { Component, OnInit } from '@angular/core';
// import {NgForm} from '@angular/forms';
import { CommonService } from 'src/assets/data/common.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
// import {MatButtonModule} from '@angular/material/button';
// import {MatFormFieldModule} from '@angular/material/form-field';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

// email material validator
export class RegistrationComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  model: any = {};
  formsub: any;
  allUser: any;
  commonService: any;
  admin: {
    fname: string;
    lname: string;
    email: string;
    password: string;
    type: string;
  }[] = [];

  // tslint:disable-next-line: variable-name
  constructor(private service: CommonService, private _router: Router ) { }
  // tslint:disable-next-line: typedef
  ngOnInit() {}
  // tslint:disable-next-line: typedef
  register(data: NgForm)
  {
    // tslint:disable-next-line: deprecation
    console.log(data.value);
    this.service.createUser(data.value).subscribe((Response: any) => {
      console.log('data', Response, data.value);
      localStorage.setItem('token',Response.token)
      if (Response.status == 400)
      {
        alert(Response.message);
      }
      else if (data){
        this._router.navigate(['/login']);
        // console.log(data.errors)
      }
    });

  }

}



