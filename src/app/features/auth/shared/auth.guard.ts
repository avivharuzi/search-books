import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { first, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../../../store/app.reducer';
import { authSelectors } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(authSelectors.selectIsUserLoggedIn).pipe(
      first(),
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          return this.router.navigate(['/auth/login']).then();
        }

        return of(true);
      })
    );
  }
}
