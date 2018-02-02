import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PrivateComponent } from '../home/private/private.component';


//Router gurad





const routes: Routes = [
    {
        path: 'blog',
        component: PrivateComponent,
        children:[
          

          {path: 'blogdetail', component: BlogDetailComponent}

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
  export class BlogRoutingModule { }