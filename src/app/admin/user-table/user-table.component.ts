import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, PageEvent } from '@angular/material';

export interface Element {
   position: number;
   name: string;
   role:string;
   symbol: string
}



const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'wkl', role: 'admin', symbol: 'W'},
  {position: 2, name: 'skc', role: 'owner', symbol: 'S'},
  {position: 3, name: 'cys', role: 'normal', symbol: 'C'},
  {position: 4, name: 'cs', role: 'student', symbol: 'CS'},
  {position: 5, name: 'joo', role: 'teacher', symbol: 'J'},

];
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  displayedColumns = ['position', 'name', 'role', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  

 // MatPaginator Inputs
 length = 100;
 pageSize = 10;
 pageSizeOptions = [5, 10, 25, 100];

 // MatPaginator Output
 pageEvent: PageEvent;

 setPageSizeOptions(setPageSizeOptionsInput: string) {
   this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
 }

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
