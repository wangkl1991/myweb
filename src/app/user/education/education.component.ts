import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  isColleage = false;
  
  

  constructor(
   
  ) { }


  ngOnInit() {
  }
  

  selectEdu(n) {
      if(n == 0){
        this.isColleage = false; 
      }else {
        this.isColleage = true;
      }


  }
}
