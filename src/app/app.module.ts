import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextlistComponent } from './textlist/textlist.component';
import {DataService} from "./data-service.service";
import {Routes, RouterModule } from '@angular/router';
import { TextSubmitComponent } from './text-submit/text-submit.component';
import { TextEditComponent } from './text-edit/text-edit.component';

const appRoutes: Routes = [
    {
      path: 'submit-text',
      component: TextSubmitComponent
    },
];

@NgModule({
  declarations: [
    AppComponent,
    TextlistComponent,
    TextSubmitComponent,
    TextEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
