import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

// Service
import { SearchService } from './shared/services/search.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
  searchStr: string;

  results: Object;
  searchTerm$ = new Subject<string>();
  backgroundStyle: object;
  constructor(
    private searchService: SearchService,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
      this.title.setTitle('Kailun');
      this.meta.addTags([
        { name: 'description', content: 'Kailun\' s website'}
      ]);
  }


  ngOnInit() {
    this.backgroundStyle = this.setBcg();
  }
 

  /* ATTRIBUTES */
  isLogin = false;
  isSystem = false;

  frontPageClick() {
    this.isSystem = true;

  }

  clickMe() {
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

  onBackClicked(BackClick: boolean) {
    if (BackClick === true){
      this.isSystem = false;

    }
  }
  

    
}


