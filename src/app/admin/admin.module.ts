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

//Service
import { ExcelService } from '../shared/services/excel.service';

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
  providers: [
    ExcelService
  ]

  
})
export class AdminModule { }
