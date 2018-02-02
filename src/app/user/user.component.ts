import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../shared/services/token-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   userVar;
  constructor(private tokenService: TokenServiceService) { }

  ngOnInit() {
    this.userVar = this.tokenService.testVar
  }

}
