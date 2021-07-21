import { NgModule } from '@angular/core';

import { BooksModule } from '../books/books.module';
import { SharedModule } from '../../shared/shared.module';
import { WishlistComponent } from './wishlist.component';
import { WishlistRoutingModule } from './wishlist-routing.module';

@NgModule({
  declarations: [WishlistComponent],
  imports: [BooksModule, SharedModule, WishlistRoutingModule],
})
export class WishlistModule {}
