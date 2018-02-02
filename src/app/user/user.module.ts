import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/modules/material/material.module';


//routing
import { UserRoutingModule } from './user.routing';

import { EducationComponent } from './education/education.component';
import { EduTableComponent } from './education/edu-table/edu-table.component';



@NgModule({
    imports: [
      CommonModule,
      UserRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule
    ],
    providers: [
      
    ],
    declarations: [
    EducationComponent,
    EduTableComponent
    
    ]
  })
  export class UserModule { }