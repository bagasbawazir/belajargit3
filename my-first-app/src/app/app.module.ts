import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import {ServerComponent} from './server/server.component';


@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
