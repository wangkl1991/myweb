import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/modules/material/material.module';
import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin.component';
import { UserTableComponent } from './user-table/user-table.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AnalyticComponent } from './analytic/analytic.component';

// import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AdminRoutingModule
    
  ],
  declarations: [
    AdminComponent,
    UserTableComponent,
    SideBarComponent,
    AnalyticComponent
   
  ],
  // providers: [
  //   { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  // ]

  
})
export class AdminModule { }
