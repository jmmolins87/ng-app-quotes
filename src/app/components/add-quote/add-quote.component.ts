import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent implements OnInit {

  public name: string = '';
  public date: string = '';
  public time: string = '';
  public symptoms: string = '';
  public formIsEmpty: boolean = false;

  @Output() newQuote = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getAddQuote() {
    if ( this.name == '' || this.date == '' || this.time == '' || this.symptoms == ''  ) {
      this.formIsEmpty = true;
      return;
    }
    const QUOTE = {
      name: this.name,
      date: this.date,
      time: this.time,
      symptoms: this.symptoms
    }
    this.newQuote.emit( QUOTE );
    this.formIsEmpty = false;
    this.resetQuote();
  }

  resetQuote() {
    this.name = '';
    this.date = '';
    this.time = '';
    this.symptoms = '';
  }

}
