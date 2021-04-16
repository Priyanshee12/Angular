import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/assets/data/common.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
  email: any;
  id: any;

  constructor(private service: CommonService) { }

  displayedColumns: string[] = ['fname', 'lname', 'email', 'delete','edit'];
  // dataSource! :MatTableDataSource<userDetail>;
  dataSource:any;
  // tslint:disable-next-line: typedef
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.service.getAllUser().subscribe((res: any) => {
      console.log(res);
      this.dataSource = res;
    });
  }
  async deleteData(id: any) {
    console.log("int dle", id);
     this.service.deleteUser(id).subscribe((res: any) => {
      console.log(res);
    })
    this.service.getAllUser().subscribe((res: any) => {
      console.log("45",res);
      this.dataSource = res;
      console.log(this.dataSource)
    });
    setTimeout(()=>{this.ngOnInit();},1000);
  }
}


