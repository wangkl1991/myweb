import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface Element {
   position: number;
   name: string;
   role:string;
   symbol: string
}



const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', role: 'admin', symbol: 'H'},
  {position: 2, name: 'Helium', role: 'owner', symbol: 'He'},
  {position: 3, name: 'Lithium', role: 'normal', symbol: 'Li'},
  {position: 4, name: 'Beryllium', role: 'student', symbol: 'Be'},
  {position: 5, name: 'Boron', role: 'teacher', symbol: 'B'},

];
@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  displayedColumns = ['position', 'name', 'role', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
