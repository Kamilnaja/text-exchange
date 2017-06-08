import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataServiceService {

  constructor(
      private http: Http
  ) {}

  getTexts () {
    return this.http.get('http://localhost:8080/texts')
        .map((response : Response) => response.json());
  }
}
