import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css'],
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: Quotes;

  upvotes = 0;
  downvotes = 0;

  @Output() delQuote = new EventEmitter<boolean>();

  quoteDelete(toDelete: boolean) {
    this.delQuote.emit(toDelete);
  }

  upVote() {
    this.quote.upvotes++;
  }

  downVotes() {
    this.quote.downvotes++;
  }

  constructor() {}

  ngOnInit(): void {}
}
