import {Component, OnInit} from '@angular/core';
import {DataServiceService} from "../data-service.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-textlist',
    templateUrl: './textlist.component.html',
})

export class TextlistComponent implements OnInit {
    texts: any = [];

    constructor(private _DataService: DataServiceService) {
    }

    ngOnInit() {
        this._DataService.getTexts()
            .subscribe(resTextsData => this.texts = resTextsData);
    }
//    todo - dodać funkcje do obsługi akcji delete i edit
//    https://www.metaltoad.com/blog/angular-2-using-http-service-write-data-api
//    this piece of shit dont wanna to work

    deleteText(text) {
        if (confirm("are your sure you wanna delete " + text.id)){
        console.log(text.id);
            this._DataService.deleteText(text.id).subscribe(
                data => {
                    this._DataService.getTexts();
                    //todo -przeładować stronę
                    return true;
                },
                error => {
                    console.error("error while deleting");
                    return Observable.throw(error);
                }
            )
        }
    }
}
