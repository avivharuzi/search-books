import { createReducer, on } from '@ngrx/store';

import { initialWishlistState } from './wishlist.state';
import { wishlistActions } from './wishlist.actions';

export const wishlistReducer = createReducer(
  initialWishlistState,
  on(wishlistActions.addBook, (state, { book }) => {
    return {
      ...state,
      books: [...state.books, book],
    };
  }),
  on(wishlistActions.removeBook, (state, { book }) => {
    return {
      ...state,
      books: state.books.filter(filteredBook => filteredBook.id !== book.id),
    };
  })
);
