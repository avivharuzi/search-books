import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent {
  @Input() books: Book[];

  constructor() {
    this.books = [];
  }
}
