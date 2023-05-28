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
  loading: boolean = true;
  isAdmin: Boolean = false
  bookId: string = ''
  book: any;
  constructor(private activatedroute: ActivatedRoute, private bookservice: BooksService, private router: Router) { }

  ngOnInit(): void {
    this.bookId = this.activatedroute.snapshot.paramMap.get('id');
    this.bookservice.getBook(`https://bookstore-backend-hv3g.onrender.com/books/${this.bookId}`).subscribe(data => {
      this.book = data;
      if (localStorage.getItem('user')) {
        this.isAdmin = JSON.parse(localStorage.getItem('user')).isAdmin;
      }
      this.loading = false;
    });
  }
  
  removeBook() {
    this.bookservice.deleteBook(`https://bookstore-backend-hv3g.onrender.com/books/remove/${this.bookId}`).subscribe();
    setTimeout(()=> {
      this.router.navigate(['']).then(() => window.location.reload());
    }, 1000)
  }
  changeBook() {
    this.router.navigate(['/update-book'], { queryParams: { id: this.bookId } })
  }
}
