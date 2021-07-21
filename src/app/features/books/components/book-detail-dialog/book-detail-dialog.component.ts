import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../store/app.reducer';
import { Book } from '../../shared/book';
import { wishlistActions } from '../../../wishlist/store/wishlist.actions';

@Component({
  selector: 'app-book-detail-dialog',
  templateUrl: './book-detail-dialog.component.html',
  styleUrls: ['./book-detail-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { book: Book },
    private store: Store<AppState>
  ) {}

  addToWishlist(): void {
    this.store.dispatch(wishlistActions.addBook({ book: this.data.book }));
  }
}
