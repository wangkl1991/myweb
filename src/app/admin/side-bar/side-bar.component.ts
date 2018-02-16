import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

const ROUTES: RouteInfo[] = [
  { path: 'analytic', title: 'Analytic',  icon: 'analytic', class: 'fa fa-user' },
  { path: 'user-table', title: 'User Table', icon: 'table', class:'fa fa-table'},
  
];

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menuItems: any[];
  

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    
  }
  

}
