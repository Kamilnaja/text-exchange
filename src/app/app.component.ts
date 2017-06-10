import { Component, OnInit } from '@angular/core';
import { DataServiceService} from "./data-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  texts: any = [];
 constructor(private _textService: DataServiceService){}
  ngOnInit() {
    this._textService.getTexts()
      .subscribe(resHerbsData => this.texts = resHerbsData);
  }
}
