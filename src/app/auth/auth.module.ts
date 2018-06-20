import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/modules/material/material.module';

import { HttpModule } from '@angular/http';
import { HttpService } from '../shared/services/http.service';

//Components
import { AuthComponent } from './auth.component';
import { DyGridComponent } from '../shared/componenes/dy-grid/dy-grid.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { AuthService } from './auth.service';
// import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';




@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthComponent,
    UserloginComponent,
    UsersignupComponent,
    DyGridComponent,
    ForgetpasswordComponent
  ],
  providers: [
    // { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
    AuthService,
    HttpService
  ],
  exports: [
    
  ]

  
})
export class AuthModule { }
