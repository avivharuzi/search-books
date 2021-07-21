import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Book } from '../../../shared/book';
import { BookDetailDialogComponent } from '../../book-detail-dialog/book-detail-dialog.component';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookItemComponent {
  @Input() book: Book | null;

  constructor(private dialog: MatDialog) {
    this.book = null;
  }

  openDialog(): void {
    this.dialog.open(BookDetailDialogComponent, {
      data: {
        book: this.book,
      },
    });
  }
}
