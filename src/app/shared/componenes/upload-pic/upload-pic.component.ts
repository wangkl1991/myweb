import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-upload-pic',
  templateUrl: './upload-pic.component.html',
  styleUrls: ['./upload-pic.component.css']
})
export class UploadPicComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  form: FormGroup
  isSelectedPic: boolean = false;
  userPic: any
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,



  ) {
    this.createForm();

  }


  createForm() {
    this.form = this.fb.group({
      avatar: null
    });
  }

  ngOnInit() {
  }


  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      this.form.get('avatar').setValue(file);
      let reader = new FileReader();
      reader.onload = (e) => {
        this.userPic = reader.result;
        this.isSelectedPic = true;
      }
      reader.readAsDataURL(file);

    }
  }

  private prepareSave(): any {
    let input = new FormData();
    //input.append('name', this.form.get('name').value);
    input.append('avatar', this.form.get('avatar').value);
    return input;
  }

  onSubmit() {
    const formModel = this.prepareSave();
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    // setTimeout(() => {
    //   // FormData cannot be inspected (see "Key difference"), hence no need to log it here
    //   alert('done!');
    //   this.loading = false;
    // }, 1000);
    // this.fileService.updateImage(formModel).subscribe(
    //   data => {
    //       this.loading = false;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
    this.isSelectedPic = false;
  }

}
