import { Component, OnInit } from '@angular/core';

declare interface statsCards {
  category: string;
  title: string;
  materialIcon: string;
  stats: string;
  text: string;
  color:string;
}

const statsCards: statsCards[] = [
 {category:'Used Space', title:'49/50GB', materialIcon:'content_copy',stats:"warning", text:"Get More Space...", color:"orange" },
 {category:'Revenue', title:'$34,245', materialIcon:'store',stats:"date_range", text:"Last 24 Hours", color:"red" },
 {category:'Fixed Issues', title:'75', materialIcon:'info_outline',stats:"local_offer", text:"Tracked from Github", color:"green" },
 {category:'Followers', title:'+245', materialIcon:'book',stats:"update", text:"Just Updated", color:"blue" },  
];


@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.css']
})


export class AnalyticComponent implements OnInit {
  statsCards = statsCards;
  constructor() { }
 
  ngOnInit() {
  }

}
