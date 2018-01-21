import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

//Compoinets
import { PrivateComponent } from './private/private.component';
import { HomeComponent } from './home.component';

//Services
import { AuthGuardGuard } from '../shared/guards/auth-guard.guard';



const routes: Routes = [
    {
        path: '',
        component: PrivateComponent,
        canActivate: [AuthGuardGuard],
        children:[
            {path: 'home', component: HomeComponent, },
        ]
    },
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class HomeRoutingModule { }