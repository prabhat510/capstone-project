import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/books.service';

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
  limit = 10;
  loadingMoreBooks = false;
  constructor(private activatedroute: ActivatedRoute, private booksservice: BooksService, private router: Router) { }

  ngOnInit() {
    this.booksservice.getAllBooks(`https://bookstore-backend-hv3g.onrender.com/books?offset=${this.offset}&limit=${this.limit}`).subscribe((data) => {
      this.books = this.books.concat(data);
      this.loading = false;
      this.offset += this.limit
    });
    this.activatedroute.url.subscribe(res => console.log("url is::::", res[0]));
  }
  onSelect(event) {
    console.log(event.target.value);
    this.booksservice.getAllBooks(`https://bookstore-backend-hv3g.onrender.com/home/${event.target.value}`).subscribe(data => this.books = data
    )
  }
  loadMoreBooks() {
    this.loadingMoreBooks = true;
    this.booksservice.getAllBooks(`https://bookstore-backend-hv3g.onrender.com/books?offset=${this.offset}&limit=${this.limit}`).subscribe((data) => {
      this.books = this.books.concat(data);
      this.loadingMoreBooks = false;
      this.offset += this.limit
    });
  }
  goToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
}
