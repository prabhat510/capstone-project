import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookId: any = ''
  book: any = {}
  constructor(private activatedroute: ActivatedRoute, private bookservice: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.bookId = this.activatedroute.snapshot.paramMap.get('id')
    console.log(this.bookId);
    this.bookservice.getBook(`http://localhost:3000/books/${this.bookId}`).subscribe(data => this.book = data)
  }
  removeBook() {
    this.bookservice.deleteBook(`http://localhost:3000/books/remove/${this.bookId}`).subscribe()
    this.router.navigate(['']).then(() => window.location.reload())
  }
  changeBook() {
    this.router.navigate(['/admin'], { queryParams: { id: this.bookId } })
  }
}
