import { Component } from '@angular/core';
import { CommonService } from 'src/assets/data/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  constructor(public service: CommonService){}
}
