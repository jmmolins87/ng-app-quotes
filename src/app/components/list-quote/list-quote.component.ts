import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-quote',
  templateUrl: './list-quote.component.html',
  styleUrls: ['./list-quote.component.scss']
})
export class ListQuoteComponent implements OnInit {

  @Input() listQuotes: any;
  @Output() removeQuote = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteQuote( i: number ) {
    this.removeQuote.emit( i );
  }

}
