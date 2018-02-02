import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu-table',
  templateUrl: './edu-table.component.html',
  styleUrls: ['./edu-table.component.css']
})
export class EduTableComponent implements OnInit {
  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
