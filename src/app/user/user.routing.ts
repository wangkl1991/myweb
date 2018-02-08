import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { PrivateComponent } from '../home/private/private.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { AlbumComponent } from './album/album.component';


//Router gurad



const routes: Routes = [
    {
        path: 'user',
        component: PrivateComponent,
        children:[
            {path: 'education', component: EducationComponent},
            {path: 'experience', component: ExperienceComponent},
            {path: 'album', component: AlbumComponent}
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