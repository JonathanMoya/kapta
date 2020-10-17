import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DetailComponent} from './views/detail/detail.component';
import {AllComponent} from './views/all/all.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { QueryComponent } from './views/query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    AllComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
