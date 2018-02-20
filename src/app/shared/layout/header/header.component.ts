import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLogin;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
 
  constructor() { }

  ngOnInit() {
    
  }

}
