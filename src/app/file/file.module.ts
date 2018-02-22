import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Service
import { ImageService } from './image.service';
//Components
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ImageComponent],
  exports:[ImageComponent],
  providers:[ImageService]
})
export class FileModule { }
