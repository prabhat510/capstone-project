import { HttpErrorResponse } from '@angular/common/http';
import { Component, VERSION, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: any;
  filterTerm: string = '';
  constructor(private booksservice: BooksService, private router: Router) { }

  ngOnInit() {
    this.booksservice.getAllBooks('http://localhost:3000/home').subscribe(data => this.books = data,
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
    this.booksservice.getAllBooks(`http://localhost:3000/home/${event.target.value}`).subscribe(data => console.log(data)
    )

  }
}
