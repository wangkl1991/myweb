import { Component } from '@angular/core';
import 'hammerjs';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';


//Service
import { SearchService } from './shared/services/search.service';
import { Navigation } from 'selenium-webdriver';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  searchStr: string;

  results: Object;
  searchTerm$ = new Subject<string>();
  constructor(
    private searchService: SearchService,
    private router: Router
  ) {

    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }


  ngOnInit() {
  }
 

  /* ATTRIBUTES */
  isLogin = false;
  isSystem = false;

  frontPageClick() {
    this.isSystem = true;

  }

  clickMe() {
    //this.router.navigateByUrl("http://www.google.com.hk/search?q="+ this.searchStr)
    window.location.href = "http://www.google.com.hk/search?q=" + this.searchStr;

  }

  setBcg() {
    let picStorage = ['url(../assets/img/WechatIMG13-min.png) no-repeat center center fixed', 'url(../assets/img/WechatIMG15.png) no-repeat center center fixed', 'url(../assets/img/WechatIMG17.png) no-repeat center center fixed'];
    let index = Math.floor((Math.random()*picStorage.length))
    let style = {
      "background": picStorage[index],
      "background-repeat": 'no-repeat',
      "background-size": 'cover',
      "background-position": 'center',
      "overflow": 'auto',
      "position": 'relative',
      "height": '100vh',
    }
    return style;

  }
  

    
}


