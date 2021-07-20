import { createReducer, on } from '@ngrx/store';

import { authActions } from './auth.actions';
import { initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(authActions.login, (state, { user }) => {
    return {
      ...state,
      user,
    };
  })
);
