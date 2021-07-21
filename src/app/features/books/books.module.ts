import { NgModule } from '@angular/core';

import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookDetailDialogComponent } from './components/book-detail-dialog/book-detail-dialog.component';
import { BookItemComponent } from './components/book-list/book-item/book-item.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookRowItemComponent } from './components/book-row-item/book-row-item.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    BookDetailComponent,
    BookDetailDialogComponent,
    BookItemComponent,
    BookListComponent,
    BookRowItemComponent,
  ],
  imports: [SharedModule],
  exports: [BookListComponent, BookRowItemComponent],
})
export class BooksModule {}
