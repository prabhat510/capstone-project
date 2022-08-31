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
    this.booksservice.getAllBooks('https://getbookinfo.herokuapp.com/home').subscribe(data => {
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
    //  sort using logic
  }
}
