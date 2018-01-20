import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Module
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
