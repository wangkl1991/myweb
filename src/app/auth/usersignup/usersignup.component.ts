import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

//Services
import { AuthService } from '../auth.service';

// import User class
import { User } from '../../models/user';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.css']
})
export class UsersignupComponent implements OnInit {
  registerForm: FormGroup;
  public user = new User();

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  // register a new user
  register() {

    this.user.firstName = this.registerForm.value.firstName;
    this.user.lastName = this.registerForm.value.lastName;
    this.user.password = this.registerForm.value.password;
    this.user.email = this.registerForm.value.email;
    this.authService.signup(this.user)
      .subscribe(
      data => {
        alert(data.message);
      },
      error => {
        alert(error.message);
      }
    );
  }


}
