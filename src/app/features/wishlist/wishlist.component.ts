import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../../store/app.reducer';
import { Book } from '../books/shared/book';
import { wishlistActions } from './store/wishlist.actions';
import { wishlistSelectors } from './store/wishlist.selectors';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishlistComponent {
  books$: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books$ = this.store.select(wishlistSelectors.selectBooks);
  }

  removeBook(book: Book): void {
    this.store.dispatch(wishlistActions.removeBook({ book }));
  }
}
