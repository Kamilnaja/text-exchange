import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "../data-service.service";

@Component({
  selector: 'app-textlist',
  templateUrl: './textlist.component.html',
})
export class TextlistComponent implements OnInit {
  texts: any = [];
  constructor(private _DataService: DataServiceService) { }

  ngOnInit() {
       this._DataService.getTexts()
      .subscribe(resTextsData => this.texts = resTextsData);
  }

}
