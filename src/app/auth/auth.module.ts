import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserloginComponent, UsersignupComponent]
})
export class AuthModule { }
