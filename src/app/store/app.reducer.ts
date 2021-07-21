import { ActionReducerMap } from '@ngrx/store';

import { authReducer } from '../features/auth/store/auth.reducer';
import { AuthState } from '../features/auth/store/auth.state';
import { wishlistReducer } from '../features/wishlist/store/wishlist.reducer';
import { WishlistState } from '../features/wishlist/store/wishlist.state';

export interface AppState {
  auth: AuthState;
  wishlist: WishlistState;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: authReducer,
  wishlist: wishlistReducer,
};
