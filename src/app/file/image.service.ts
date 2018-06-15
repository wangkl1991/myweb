import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { HttpService } from '../shared/services/http.service';
import { Observable } from 'rxjs/Observable';
import { ResponseContentType, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ImageService {

  private imageUrl = environment.SERVER_URL + '/file/userImage'

  constructor(private http:HttpService) { }

  getImage(): Observable<Blob> {
    return this.http
        .get(this.imageUrl, { responseType: ResponseContentType.Blob })
        .map((res: Response) => res.blob());
}

}
