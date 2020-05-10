import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  quotes = [
    new Quotes(
      'Martin Luther King jr',
      'The time is always right to do what is right.',
      'MLK jr',
      new Date(1989, 3, 8)
    ),
    new Quotes(
      'Winston Churchill',
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
      'Winston',
      new Date(1989, 5, 10)
    ),
    new Quotes(
      'Maya Angelou',
      'Try to be a rainbow in someone elses cloud.',
      'Maya',
      new Date(2004, 5, 23)
    ),
  ];
  addNewQuote(quotes) {
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength + 1;
    quotes.entryDate = new Date(quotes.entryDate);
    this.quotes.unshift(quotes);
  }
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  delQuote(isComplete, i) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[i].quote}?`
      );
      if (toDelete) {
        this.quotes.splice(i, 1);
      }
    }
  }

  upvotes = 0;
  downvotes = 0;

  upVotes(i) {
    this.quotes[i].upvotes += 1;
  }

  downVotes(i) {
    this.quotes[i].downvotes += 1;
  }

  prevNum: number;
  lastNum: number;
  counter: number;

  highestUpvote() {
    this.prevNum = 0;
    this.lastNum = 0;

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if (this.lastNum > this.prevNum) {
        this.prevNum = this.lastNum;
      }
    }
    return this.prevNum;
  }

  constructor() {}

  ngOnInit(): void {}
}
