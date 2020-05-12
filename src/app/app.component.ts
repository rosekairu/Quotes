import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
  ];
}
