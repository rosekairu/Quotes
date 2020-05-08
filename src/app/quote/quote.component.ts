import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(
      'MLK jr',
      'Martin Luther King jr',
      'The time is always right to do what is right.'
    ),
    new Quotes(
      'Winston',
      'Winston Churchill',
      'Success is not final, failure is not fatal: it is the courage to continue that counts.'
    ),
    new Quotes(
      'Maya',
      'Maya Angelou',
      "Try to be a rainbow in someone else's cloud."
    ),
  ];
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.entryDate = new Date(quote.entryDate);
    this.quotes.push(quote);
  }
  upvote(i) {
    this.quotes[i].upvotes++;
  }

  downvote(i) {
    this.quotes[i].downvotes++;
  }

  delQuote(i) {
    this.quotes.splice(i, 1);
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
