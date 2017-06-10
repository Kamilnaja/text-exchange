import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {
  private _url= '/texts';
  constructor( private http: Http ) {}

  getTexts () {
    return this.http.get(this._url)
         .map((response:Response) => response.json());
  }
}
