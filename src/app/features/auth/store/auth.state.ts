import { User } from '../shared/user';

export interface AuthState {
  user: User | null;
}

export const initialAuthState: AuthState = {
  user: null,
};
