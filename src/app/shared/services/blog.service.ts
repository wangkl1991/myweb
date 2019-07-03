import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//import { HttpService } from './http.service';
import { environment } from '../../../environments/environment';




@Injectable()
export class BlogService {
  private URL_FIND_BLOGS = environment.SERVER_URL + '/blog/test';



  constructor(
    private http: Http
  ) { }

  


  /**
   * Get Blogs
   * @param filterParams
   */
  getBlogs(filterParams) {
    const body = JSON.stringify(filterParams);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.URL_FIND_BLOGS, body, { headers: headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }


}
