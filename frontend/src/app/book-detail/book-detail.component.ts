import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  isLoading: boolean;
  isAdmin: boolean = false
  bookId: any = ''
  book: any = {}
  constructor(private titleservice:Title, private activatedroute: ActivatedRoute, private bookservice: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.bookId = this.activatedroute.snapshot.paramMap.get('id')
    console.log(this.bookId);
    this.bookservice.getBook(`https://getbookinfo.herokuapp.com/books/${this.bookId}`).subscribe(data => {
      this.book = data;
      this.titleservice.setTitle(this.book.title);
      this.isLoading = false;
    },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login'])
          }
        }
      })
    this.isAdmin = JSON.parse(localStorage.getItem('user')).isAdmin
  }
  removeBook() {
    this.bookservice.deleteBook(`https://getbookinfo.herokuapp.com/books/remove/${this.bookId}`).subscribe()
    this.router.navigate(['']).then(() => window.location.reload())
  }

}
