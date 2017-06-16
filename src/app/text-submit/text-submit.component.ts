import {Component, OnInit} from '@angular/core';
import {DataService} from "../data-service.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Component({
    selector: 'app-text-submit',
    templateUrl: './text-submit.component.html'
})

export class TextSubmitComponent implements OnInit {
    addedTextTitle = "";
    addedTextContent = "";

    constructor(private _DataService: DataService) {
    }
    texts: any = [];
    //todo - posible redundancy of code with textlist-component
    ngOnInit() {
        this._DataService.getTexts()
            .subscribe(resTextsData => this.texts = resTextsData);
    }
//połącz się z api
    submitText(text) {
        // let textToSubmit = this.addedTextTitle + ',' + this.addedTextContent;

        this._DataService.addText(textToSubmit).subscribe(
            data => {
                this._DataService.getTexts();
                //todo -przeładować stronę
                return true;
            },
            error => {
                console.error("error while submitting");
                return Observable.throw(error);
            }
        )
    }
}
