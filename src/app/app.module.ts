import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Module
import { AuthModule } from './auth/auth.module';


import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

//Routes
import { AppRoutingModule } from './app.routing';
import { EducationComponent } from './education/education.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    EducationComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
