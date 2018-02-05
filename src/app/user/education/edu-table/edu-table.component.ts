import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edu-table',
  templateUrl: './edu-table.component.html',
  styleUrls: ['./edu-table.component.css']
})
export class EduTableComponent implements OnInit {
  @Input() type;
  
  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
