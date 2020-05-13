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
      0,
      'Martin Luther King jr',
      'The time is always right to do what is right.',
      'MLK jr',
      new Date(1989, 3, 8)
    ),
    new Quotes(
      0,
      'Winston Churchill',
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
      'Winston',
      new Date(1999, 5, 10)
    ),
  ];
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
  timePass = 0;

  timepass() {
    this.timePass = 0;
  }

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

  upVotes(i) {
    this.quotes[i].upvotes += 1;
  }

  downVotes(i) {
    this.quotes[i].downvotes += 1;
  }

  prevNum: number;
  lastNum: number;
  counter: number;

  addNewQuote(quote) {
    this.quotes.unshift(quote);
  }

  constructor() {}

  ngOnInit(): void {}
}
