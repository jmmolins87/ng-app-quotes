import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
  listQuotes: any[] = [];

  addQuote( quote: any ) {
    this.listQuotes.push( quote );
  }

}
