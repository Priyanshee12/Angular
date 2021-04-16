import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/assets/data/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // admin:{
  //   fname: string;
  //   lname: string;
  //   email: string;
  //   password: string;
  //   type: string;
  // }[]=[];
  // allUser: any;

  constructor(private service: CommonService) { }
  displayedColumns: string[]  = ['fname', 'lname', 'email'];
  dataSource: any;

  // dataSource! :MatTableDataSource<userDetail>;
  // dataSource!: MatTableDataSource<any>;
  // tslint:disable-next-line: typedef
  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.service.getAllUser().subscribe((res: any) => {
      console.log(res);
      
      this.dataSource = new MatTableDataSource<any>(res);
      this.dataSource.filter ='user';

    });
  }
}

