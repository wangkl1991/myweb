import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';


import { UserComponent } from './user/user.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';

//Routes
import { AppRoutingModule } from './app.routing';

//Modules
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';

//Services
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';






@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HomeModule,
    AuthModule
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
