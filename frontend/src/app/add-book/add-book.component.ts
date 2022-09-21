import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Book } from '../models/book';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookModel = new Book('', '', '', '', '', '', new Date(), '');
  isLoading: boolean;

  constructor(private titleservice:Title, private authservice: AuthService, private bookservice: BooksService, private router: Router, private activatedroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.titleservice.setTitle('add new book');
    this.isLoading = true;
    // check if the user is valid or not
    this.authservice.verifyToken(`http://localhost:3000/verify/token`).subscribe(data => {
      console.log(data);
        this.isLoading = false;
    },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      }
    )


  }

  submitBook() {
  
    this.bookservice.addBook('http://localhost:3000/books/add/book', this.bookModel).subscribe(data => console.log(data),
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login'])
          }
        }
      }
    )
    // redirecting to home page
    this.router.navigate([''])
  }

}
