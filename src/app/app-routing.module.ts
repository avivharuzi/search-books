import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './features/auth/shared/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'search',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/search/search.module').then(m => m.SearchModule),
  },
  {
    path: 'wishlist',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/wishlist/wishlist.module').then(m => m.WishlistModule),
  },
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      paramsInheritanceStrategy: 'always',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'corrected',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
