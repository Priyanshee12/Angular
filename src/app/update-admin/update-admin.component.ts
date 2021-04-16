import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {ActivatedRoute} from '@angular/router';
import { CommonService } from 'src/assets/data/common.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  model: any = {};

  constructor(private router:ActivatedRoute,private service:CommonService) { }
  
  ngOnInit() {
    // console.log("hh");
    console.log(this.router.snapshot.params.id)
    this.service.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result);
    })
  }

}
