import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpclient: HttpClient) {

  }
  getAllBooks(url: string): Observable<any> {
    return this.httpclient.get(url)
  }
  getBook(url: string): Observable<any> {
    return this.httpclient.get(url)
  }
  deleteBook(url: string): Observable<any> {
    return this.httpclient.delete(url)
  }
  addBook(url: string, body: object): Observable<any> {
    return this.httpclient.post(url, body)
  }
  updateBook(url: string, body: object): Observable<any> {
    return this.httpclient.put(url, body)
  }
}
