import {Component, OnInit} from '@angular/core';
import {DataService} from "../data-service.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Component({
    selector: 'app-text-edit',
    templateUrl: './text-edit.component.html',
})
export class TextEditComponent implements OnInit {

    constructor(private _DataService: DataService) {
    }

    texts = [];
    updatedTextTitle;
    updatedTextContent;
    updatedTextId;

    ngOnInit() {
        this._DataService.getTexts()
            .subscribe(resTextsData => this.texts = resTextsData);
    }

    updateText(name) {
        let text = {title: this.updatedTextTitle, content: this.updatedTextContent , id: this.updatedTextId};
        let id = this.updatedTextId;
        this._DataService.updateText(text, id).subscribe(
            data => {
                this._DataService.getTexts()
                    .subscribe(resTextsData => this.texts = resTextsData);
                return true;
            },
            error => {
                return Observable.throw(error);
            }
        )
    }

}
