import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './education/education.component';

//routing
import { UserRoutingModule } from './user.routing';


@NgModule({
    imports: [
      CommonModule,
      UserRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      
    ],
    providers: [
      
    ],
    declarations: [
    EducationComponent
    
    ]
  })
  export class UserModule { }