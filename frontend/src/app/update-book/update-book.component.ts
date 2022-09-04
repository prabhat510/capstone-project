import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Book } from '../models/book';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  // instead of using data variable in the component we are using book model class which has all the data variables
  //  of book therefore multiple components can use same model to store corresponding properties of a book
  bookModel = new Book('', '', '', '', '', '', new Date(), '');
  isLoading: boolean;

  constructor(private titleservice: Title, private authservice: AuthService, private bookservice: BooksService, private router: Router, private activatedroute: ActivatedRoute) { }
  ngOnInit(): void {
    this.isLoading = true
    // check if the user is valid or not
    this.authservice.verifyToken(`https://getbookinfo.herokuapp.com/verify/token`).subscribe(data => {
      this.isLoading = false;
    },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login'])
          }
        }
      }
    )
    this.bookModel.bookId = this.activatedroute.snapshot.paramMap.get('id');

    // once we got the book that we need to edit, we will populate the dom with the previous data
    this.bookservice.getBook(`https://getbookinfo.herokuapp.com/books/${this.bookModel.bookId}`).subscribe(data => {
      this.titleservice.setTitle(data.title);
      this.bookModel.title = data.title;
      this.bookModel.author = data.author;
      this.bookModel.publisher = data.publisher;
      this.bookModel.genre = data.genre;
      this.bookModel.description = data.description;
      this.bookModel.date_published = data.date_published;
      this.bookModel.image = data.image;
    }
    )
  }

  updateBook() {
    this.bookservice.updateBook(`https://getbookinfo.herokuapp.com/books/edit/${this.bookModel.bookId}`, this.bookModel)
    .subscribe(data => console.log(data));
    this.router.navigate(['/book', this.bookModel.bookId]);
  }
}
