import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpclient: HttpClient) {

  }
  getAllBooks(url: string) {
    return this.httpclient.get(url)
  }
  getBook(url: string) {
    return this.httpclient.get(url)
  }
  deleteBook(url: string) {
    console.log('deletebook called');
    
    return this.httpclient.delete(url)
  }
  addBook(url: string, body: object) {
    return this.httpclient.post(url, body)
  }
  updateBook(url: string, body: object) {
    return this.httpclient.put(url, body)
  }
  scrollToTop() {
    window.scrollTo({behavior: 'smooth', top: 0});
  }
}
