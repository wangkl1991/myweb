import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  displayTab = 'signin';
  
  constructor() { }

  ngOnInit() {
  }

 
  ChangeTab(event){
    if(event.index == 0){
      this.displayTab = "signin";
    }else {
      this.displayTab = "signup";
    }
    }
}
