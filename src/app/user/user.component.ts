import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from '../shared/services/token-service.service';


declare interface CardInfos {
  path: string;
  name: string;
  
}

const  cardInfos: CardInfos[] = [{
  name: 'Education',
  path: "/user/education",
},
{
  name: 'Experience',
  path: "/user/experience",
},
{
  name: 'Your life',
  path: '/blog/bloglist',
},
{
  name: 'Album',
  path: '/user/album',
}

];


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   userVar;
   cardInfos = cardInfos;
  

  constructor(private tokenService: TokenServiceService) { }

  ngOnInit() {
    this.userVar = this.tokenService.testVar    
  }

}
