import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailComponent {
  @Input() book: Book | null;

  constructor() {
    this.book = null;
  }
}
