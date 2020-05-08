import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newEntry = new Quotes('', '', '');
  @Output() emitQuote = new EventEmitter();
  quoteWords: string;
  quoteEditor: string;
  quoteAuthor: string;
  quoteDate: number;
  theWords: any;

  submitQuote() {
    this.theWords = new Quotes(
      this.quoteWords,
      this.quoteEditor,
      this.quoteAuthor
    );
    this.quoteWords = '';
    this.quoteEditor = '';
    this.quoteAuthor = '';
    this.emitQuote.emit(this.theWords);
  }

  constructor() {}

  ngOnInit(): void {}
}
