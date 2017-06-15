import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";

@Injectable()
export class DataService {
  private _url= '/api/texts';
  constructor( private http: Http ) {}

  getTexts () {
    return this.http.get(this._url)
         .map((response:Response) => response.json());
  }
  //https://www.metaltoad.com/blog/angular-2-using-http-service-write-data-api
  createText(text) {
    let headers = new Headers({ 'Content-Type' : 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(text);
    return this.http.post('/api/texts/', body, options ).map((res: Response) => res.json());
  }

  deleteText(id) {
      return this.http.delete('/api/texts/' + id);
  }

  updateText(text_id) {
    let headers = new Headers ({ 'Content-TYpe' : 'application/json'});
    let options = new RequestOptions({headers: headers });
    let body = JSON.stringify(text_id);
      return this.http.put('/api/text/' + text_id, body, options).map((res: Response) => res.json());
  }
}
