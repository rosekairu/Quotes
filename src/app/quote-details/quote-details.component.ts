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

  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
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
