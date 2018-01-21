import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { PrivateComponent } from '../home/private/private.component';


//Router gurad






const routes: Routes = [
    {
        path: 'user',
        component: PrivateComponent,
        children:[
            
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
  export class UserRoutingModule { }