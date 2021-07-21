import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgxSeoService } from '@avivharuzi/ngx-seo';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from './store/app.reducer';
import { authSelectors } from './features/auth/store/auth.selectors';
import { User } from './features/auth/shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  user$: Observable<User | null>;

  constructor(
    private ngxSeoService: NgxSeoService,
    private store: Store<AppState>
  ) {
    this.user$ = this.store.select(authSelectors.selectUser);
  }

  ngOnInit(): void {
    this.ngxSeoService.subscribe();
  }
}
