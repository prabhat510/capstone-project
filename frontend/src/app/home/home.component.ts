import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { getServiceUrl } from '../urls';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: any = [];
  filterTerm: string = '';
  loading = true;
  offset = 0;
  limit = 12;
  loadingMoreBooks = false;
  pendingBooksCount = 0;
  loadMoreOptionAvailable = true;
  constructor(private booksservice: BooksService) { }

  ngOnInit() {
    this.loadBooks();
  }
  onSelect(event) {
    console.log(event.target.value);
    this.booksservice.getAllBooks(`${getServiceUrl().bookServiceAPI}/home/${event.target.value}`).subscribe(data => this.books = data
    )
  }
  loadBooks() {
    if(!this.loading){this.loadingMoreBooks = true;}
    this.booksservice.getAllBooks(`${getServiceUrl().bookServiceAPI}/books?offset=${this.offset}&limit=${this.limit}`).subscribe((data: any) => {
      this.books = this.books.concat(data.books);
      this.offset += this.limit
      if(this.loading) {
        this.pendingBooksCount = data.totalCount;
        this.loading = false;
      } else {
        this.loadingMoreBooks = false;
      }
      this.pendingBooksCount -= this.books.length;
      if(this.pendingBooksCount <=0)this.loadMoreOptionAvailable = false;
      console.log('total count and pending count', data.totalCount, this.pendingBooksCount);
    }); 
  }
  goToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
