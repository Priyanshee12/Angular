import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/assets/data/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service: CommonService) { }

  adminflag=false;
  ngOnInit(): void {
 }
 logout(){
   localStorage.clear();
 }

}
