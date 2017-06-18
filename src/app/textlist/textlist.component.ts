import {Component, OnInit} from '@angular/core';
import {DataService} from "../data-service.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-textlist',
    templateUrl: './textlist.component.html',
})

export class TextlistComponent implements OnInit {

    texts: any = [];

    constructor(private _DataService: DataService) {
    }

    ngOnInit() {
        this._DataService.getTexts()
            .subscribe(resTextsData => this.texts = resTextsData);
    }

//    todo - dodać funkcje do obsługi akcji delete i edit
//    https://www.metaltoad.com/blog/angular-2-using-http-service-write-data-api

    selectedText;
    onSelect(text) {
        this.selectedText = text;
        var changedTitle = prompt('wpisz prawidłowy tytuł');
        //dane zatwierdzone
        console.log(changedTitle);
        //zamień tytuł tekstu w bazie na changed
        //todo - naprawić
            this._DataService.updateText(text.id).subscribe(
                data => {
                    this._DataService.getTexts();
                    //todo -przeładować stronę
                    return true;
                },
                error => {
                    console.error("error while updating");
                    return Observable.throw(error);
                }
            )

    }

    deleteText(text) {
        if (confirm("are your sure you wanna delete " + text.id)) {
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
