import { createSelector } from '@ngrx/store';

import { AppState } from '../../../store/app.reducer';

const selectWishlist = (state: AppState) => state.wishlist;

const selectBooks = createSelector(selectWishlist, state => state.books);

export const wishlistSelectors = {
  selectBooks,
};
