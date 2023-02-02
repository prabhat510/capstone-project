import { Component, OnInit, OnChanges, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, AfterViewInit {

  @ViewChild('titleInput') titleInput: ElementRef;
  @ViewChild('authorInput') authorInput: ElementRef;
  @ViewChild('publisherInput') publisherInput: ElementRef;
  @ViewChild('dateInput') dateInput: ElementRef;
  @ViewChild('genreInput') genreInput: ElementRef;
  @ViewChild('descriptionInput') descriptionInput: ElementRef;
  @ViewChild('imageInput') imageInput: ElementRef;

  errorMessage: string = '';
  loading: boolean = true;
  bookId_param: string = ''
  // book attributes---two way data binding
  book_form = {
    title: '',
    author: '',
    publisher: '',
    genre: '',
    description: '',
    image: '',
    date_published: ''
  };


  constructor(private authservice: AuthService, private bookservice: BooksService, private router: Router, private activatedroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    // check if the user is valid or not
    this.authservice.verifyToken(`http://localhost:3000/verify/token`).subscribe(data => console.log(data),
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login'])
          }
        }
      }
    );
    this.activatedroute.queryParamMap.subscribe(params => this.bookId_param = params.get('id'));
    console.log('book id param', this.bookId_param);

    if (this.bookId_param) {
      this.bookservice.getBook(`http://localhost:3000/books/${this.bookId_param}`).subscribe(data => {
        this.populateDom(data);
        this.loading = false
      })
      // once we got the book that we need to edit, we will populate the dom with the previous data
    } else {
      this.loading = false;
    }
  }
  ngAfterViewInit(): void {
    this.titleInput.nativeElement.focus();
  }
  checkInvalidForm() {
    console.log('checkInvalidForm called ');
    if (!this.book_form.title) {
      this.titleInput.nativeElement.focus();
    } else if (!this.book_form.author) {
      this.authorInput.nativeElement.focus();
    } else if (!this.book_form.publisher) {
      this.publisherInput.nativeElement.focus();
    } else if (!this.book_form.genre) {
      this.genreInput.nativeElement.focus();
    } else if (!this.book_form.image) {
      this.imageInput.nativeElement.focus();
    }
  }
  populateDom(data: any) {
    this.book_form.title = data.title
    this.book_form.author = data.author
    this.book_form.publisher = data.publisher
    this.book_form.genre = data.genre
    this.book_form.description = data.description
    this.book_form.date_published = data.date_published
    this.book_form.image = data.image
  }
  // it decides whether to call submitBook method or updateBook method
  confirmEvent(bok_form: NgForm) {
    if (bok_form.valid) {
      // update the book, when this component was rendered by the click of a edit button
      if (this.bookId_param) {
        this.updateBook();
      } else {
        // add a new book, when this component was rendered by the click of a admin button from navbar
        this.submitBook();
      }
    } else {
      this.errorMessage = "all fields are mandatory";
      this.checkInvalidForm();
    }

  }
  submitBook() {
    this.bookservice.addBook('http://localhost:3000/books/add/book', this.book_form).subscribe(data => console.log(data));
    // redirecting to home page
    this.router.navigate(['']);
  }
  updateBook() {
    this.bookservice.updateBook(`http://localhost:3000/books/edit/${this.bookId_param}`, this.book_form).subscribe(data => console.log(data)
    )
    this.router.navigate(['/book', this.bookId_param])
  }
}
