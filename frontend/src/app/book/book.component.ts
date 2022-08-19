import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  isAdmin: Boolean = false
  bookId: any = ''
  book: any = {}
  constructor(private activatedroute: ActivatedRoute, private bookservice: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.bookId = this.activatedroute.snapshot.paramMap.get('id')
    console.log(this.bookId);
    this.bookservice.getBook(`https://getbookinfo.herokuapp.com/books/${this.bookId}`).subscribe(data => this.book = data,
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
  changeBook() {
    this.router.navigate(['/admin'], { queryParams: { id: this.bookId } })
  }
}
