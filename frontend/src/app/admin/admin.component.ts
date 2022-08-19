import { Component, OnInit, OnChanges } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // book attributes---two way data binding
  title: string = ''
  author: string = ''
  publisher: string = ''
  genre: string = ''
  description: string = ''
  image: string = ''
  date_published: string = ''
  bookId: any = ''


  constructor(private authservice: AuthService, private bookservice: BooksService, private router: Router, private activatedroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    // check if the user is valid or not
    this.authservice.verifyToken(`https://getbookinfo.herokuapp.com/verify/token`).subscribe(data => console.log(data),
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login'])
          }
        }
      }
    )
    this.activatedroute.queryParamMap.subscribe(params => this.bookId = params.get('id'))
    console.log(this.bookId);
    if (this.bookId) {
      this.bookservice.getBook(`https://getbookinfo.herokuapp.com/books/${this.bookId}`).subscribe(data => this.populateDom(data))
      // once we got the book that we need to edit, we will populate the dom with the previous data
    } else {
      console.log('null');
    }
  }

  populateDom(data: any) {
    this.title = data.title
    this.author = data.author
    this.publisher = data.publisher
    this.genre = data.genre
    this.description = data.description
    this.date_published = data.date_published
    this.image = data.image
  }
  // it decides whether to call submitBook method or updateBook method
  confirmEvent() {
    // update the book, when this component was rendered by the click of a edit button
    if (this.bookId) {
      this.updateBook()
    } else {
      // add a new book, when this component was rendered by the click of a admin button from navbar
      this.submitBook()
    }
  }
  submitBook() {
    const book = { title: this.title, author: this.author, publisher: this.publisher, genre: this.genre, description: this.description, image: this.image, date_published: this.date_published }
    console.log(book);
    this.bookservice.addBook('https://getbookinfo.herokuapp.com/books/add/book', book).subscribe(data => console.log(data),
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
  updateBook() {
    const book = { title: this.title, author: this.author, publisher: this.publisher, genre: this.genre, description: this.description, image: this.image, date_published: this.date_published }
    console.log(book);
    this.bookservice.updateBook(`https://getbookinfo.herokuapp.com/books/edit/${this.bookId}`, book).subscribe(data => console.log(data)
    )
    this.router.navigate(['/book', this.bookId])
  }
}
