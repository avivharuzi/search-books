import { createAction, props } from '@ngrx/store';

import { Book } from '../../books/shared/book';

const addBook = createAction('[Wishlist] Add Book', props<{ book: Book }>());
const removeBook = createAction(
  '[Wishlist] Remove Book',
  props<{ book: Book }>()
);

export const wishlistActions = {
  addBook,
  removeBook,
};
