import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/assets/data/common.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: {
    fname: string,
    lname: string,
    email: string,
    pwd:string,
    type: string,
  }[] = [];
  // tt="gfhmdjx";
  fname:string="";
  lname:string="";
  email:string="";

  constructor(public service:CommonService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('fname'),localStorage.getItem('email'),localStorage.getItem('lname'));
    //  this.user =JSON.parse(localStorage.getItem('user') || '{}');
    // this.fname=localStorage.getItem('fname')?.toString();
     console.log("profile user",)
  }
  
}
