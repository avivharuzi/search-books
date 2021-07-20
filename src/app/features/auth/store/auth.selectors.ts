import { createSelector } from '@ngrx/store';

import { AppState } from '../../../store/app.reducer';
const selectAuth = (state: AppState) => state.auth;

const selectUser = createSelector(selectAuth, state => state.user);
const selectIsUserLoggedIn = createSelector(selectAuth, state => !!state.user);

export const authSelectors = {
  selectUser,
  selectIsUserLoggedIn,
};
