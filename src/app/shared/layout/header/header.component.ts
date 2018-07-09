import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isLogin;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  @Output() onBackClicked = new EventEmitter<boolean>();
  BackClick = true;
 
  constructor() { }

  ngOnInit() {
    
  }
  backClick() {
    this.onBackClicked.emit(this.BackClick);
  }
}
