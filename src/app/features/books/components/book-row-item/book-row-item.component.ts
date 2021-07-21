import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Book } from '../../shared/book';

@Component({
  selector: 'app-book-row-item',
  templateUrl: './book-row-item.component.html',
  styleUrls: ['./book-row-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookRowItemComponent {
  @Input() book: Book | null;

  constructor() {
    this.book = null;
  }
}
