import { Book } from '../../books/shared/book';

export interface WishlistState {
  books: Book[];
}

export const initialWishlistState: WishlistState = {
  books: [],
};
