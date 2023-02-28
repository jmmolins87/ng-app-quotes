import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { ListQuoteComponent } from './components/list-quote/list-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuoteComponent,
    ListQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
