import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  newQuote = new Quotes('', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(newQuote: NgForm) {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quotes('', '', '', new Date());
  }

  constructor() {}

  ngOnInit(): void {}
}
