import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { HomeComponent } from './home.component';


// ROUTES
import { HomeRoutingModule } from './home.routing'


@NgModule({
    imports: [
      CommonModule,
      HomeRoutingModule,
    ],
    declarations: [
      HomeComponent,
     
      PublicComponent,
      PrivateComponent
    ],
  })
  export class HomeModule { }