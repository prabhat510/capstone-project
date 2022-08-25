import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: Boolean;
  books: any;
  filterTerm: string = '';
  constructor(private booksservice: BooksService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true
    this.booksservice.getAllBooks('http://localhost:3000/home').subscribe(data => {
      this.books = data;
      this.isLoading = false;
    },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login'])
          }
        }
      })

  }


  onSelect(event) {
    console.log(event.target.value);
    this.booksservice.getAllBooks(`http://localhost:3000/home/${event.target.value}`).subscribe(data => this.books = data
    )
    // window.location.reload()
  }
}
