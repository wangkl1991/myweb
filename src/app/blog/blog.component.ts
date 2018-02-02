import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../shared/services/token-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog: string = "blogvar";
  constructor(
    private tokenService : TokenServiceService, 
  ) { }
   
  ngOnInit() {
    this.tokenService.testVar = this.blog;
  }

}
