import {Component, OnInit} from '@angular/core';
import {DataService} from "../data-service.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-textlist',
    templateUrl: './textlist.component.html',
})

export class TextlistComponent implements OnInit {
    selectedTextId = "";
    selectedTextTitle = "";
    texts: any = [];
    selectedText = "";
    showWholeText = false;
    ngOnInit() {
        this._DataService.getTexts()
            .subscribe(resTextsData => this.texts = resTextsData);

    }
    constructor(private _DataService: DataService) {
        console.log(this.texts);
    }
//    https://www.metaltoad.com/blog/angular-2-using-http-service-write-data-api

    setTitle(text) {
        this.selectedText = text
        console.log(this.selectedText);        // przekaż zmienną jako globalną
    }
    showMore(){
        this.showWholeText = true;
    }
    showLess(){
        this.showWholeText = false;
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
