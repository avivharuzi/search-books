import { ChangeDetectionStrategy, Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

import { Book } from '../books/shared/book';
import { BookService } from '../books/shared/book.service';
import { Pagination } from '../../shared/shared/pagination';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  querySubject: Subject<{ pageIndex: number; value: string }>;

  books$: Observable<Pagination<Book> | null>;

  constructor(private bookService: BookService) {
    this.querySubject = new Subject<{ pageIndex: number; value: string }>();
    this.books$ = this.querySubject.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(({ pageIndex, value }) => {
        if (!value) {
          return of(null);
        }

        const startIndex = pageIndex * 20;
        return this.bookService.search({ startIndex, q: value });
      })
    );
  }

  onInput(value: string): void {
    this.querySubject.next({
      pageIndex: 0,
      value,
    });
  }

  onPage(value: string, pageEvent: PageEvent) {
    this.querySubject.next({
      pageIndex: pageEvent.pageIndex,
      value,
    });
  }
}
