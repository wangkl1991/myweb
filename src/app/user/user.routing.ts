import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { PrivateComponent } from '../home/private/private.component';
import { EducationComponent } from './education/education.component';


//Router gurad



const routes: Routes = [
    {
        path: 'user',
        component: PrivateComponent,
        children:[
            {path: 'education', component: EducationComponent}
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