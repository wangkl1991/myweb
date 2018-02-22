import { Component, OnInit } from '@angular/core';

import { ImageService } from '../image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  isImageLoading: boolean;
  imageToShow: any;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.imageToShow = reader.result;
    }, false);

    if (image) {
       reader.readAsDataURL(image);
    }
}

  getImageFromService() {
    this.isImageLoading = true;
    this.imageService.getImage().subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
}

}
