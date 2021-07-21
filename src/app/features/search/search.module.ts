import { NgModule } from '@angular/core';

import { BooksModule } from '../books/books.module';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [BooksModule, SearchRoutingModule, SharedModule],
})
export class SearchModule {}
