import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";

@Injectable()
export class DataService {
    private _url = '/api/texts';

    constructor(private http: Http) {
    }

    getTexts() {
        return this.http.get(this._url)
            .map((response: Response) => response.json());
    }

    //https://www.metaltoad.com/blog/angular-2-using-http-service-write-data-api
    addText(textToSubmit) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(textToSubmit);
        return this.http.post('/api/texts/', body, options)
            .map((res: Response) => res.json());
    }

    deleteText(id) {
        return this.http.delete('/api/texts/' + id);
    }

    updateText(text, id) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(text);
        return this.http.put('/api/texts/' + id, body, options)
            .map((res: Response) => res.json());
    }
}
