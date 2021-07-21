import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from './book';
import { environment } from '../../../../environments/environment';
import { Pagination } from '../../../shared/shared/pagination';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly booksApiUrl = `${environment.baseApiUrl}/volumes`;

  constructor(private httpClient: HttpClient) {}

  search({
    startIndex,
    q,
  }: {
    startIndex: number;
    q: string;
  }): Observable<Pagination<Book>> {
    let params = new HttpParams();

    params = params.append('q', q);
    params = params.append('startIndex', startIndex);
    params = params.append('maxResults', 20);

    return this.httpClient.get<Pagination<Book>>(this.booksApiUrl, {
      params: params,
    });
  }
}
