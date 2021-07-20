import { createAction, props } from '@ngrx/store';

import { User } from '../shared/user';

const login = createAction('[Auth] Login User', props<{ user: User }>());

export const authActions = {
  login,
};
