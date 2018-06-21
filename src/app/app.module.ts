import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';


import { UserComponent } from './user/user.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';

//Routes
import { AppRoutingModule } from './app.routing';

//Modules
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { AdminModule } from './admin/admin.module';

//Services
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { MaterialModule } from './shared/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


//Services
import { TokenServiceService } from './shared/services/token-service.service';
import { SearchService } from './shared/services/search.service';
import { ButtonHoverDirective } from './shared/directives/button-hover.directive';
import { HoverUnderlineDirective } from './shared/directives/hover-underline.directive';
import { ErrorService } from './shared/services/error.service';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    ButtonHoverDirective,
    HoverUnderlineDirective,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HomeModule,
    AuthModule,
    BlogModule,
    AdminModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    
  ],
  providers: [AuthGuardGuard,
              TokenServiceService, 
              SearchService,
              ErrorService

               ],
  bootstrap: [AppComponent]
})
export class AppModule { }
