import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/modules/material/material.module';



import { BlogComponent } from './blog.component';

//routing
import { BlogRoutingModule } from './blog.rougting';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CardComponent } from '../shared/componenes/card/card.component';

//Service
import { BlogService } from '../shared/services/blog.service';



@NgModule({
    imports: [
      CommonModule,
      BlogRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      MaterialModule
    ],
    providers: [
      BlogService
    ],
    declarations: [
    BlogComponent,
    BlogDetailComponent,
    BlogListComponent,
    CardComponent
    ],
    
  })
  export class BlogModule { }