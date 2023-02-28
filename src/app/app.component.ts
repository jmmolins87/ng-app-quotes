import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
  public listQuotes: any[] = [];

  addQuote( quote: any ) {
    this.listQuotes.push( quote );
  }

  deleteQuote( i: number ) {
    this.listQuotes.splice( i, 1 );
  }

}
