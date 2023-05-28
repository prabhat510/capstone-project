import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit, AfterViewInit {
  showLoader = false;
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
    console.log('ngoninit called');
    // check if the user is valid or not
    this.authservice.verifyToken(`https://bookstore-backend-hv3g.onrender.com/verify/token`).subscribe(data => console.log(data),
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
      this.bookservice.getBook(`https://bookstore-backend-hv3g.onrender.com/books/${this.bookId_param}`).subscribe(data => {
        this.populateDom(data);
        this.loading = false
        this.bookservice.scrollToTop();
      })
      // once we got the book that we need to edit, we will populate the dom with the previous data
    } else {
      this.loading = false;
      this.bookservice.scrollToTop();
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

  updateBook(bok_form: NgForm) {
    this.showLoader = true;
    if (bok_form.valid) {
      this.bookservice.updateBook(`https://bookstore-backend-hv3g.onrender.com/books/edit/${this.bookId_param}`, this.book_form).subscribe(data => console.log(data)
      )
      setTimeout(()=> {
        this.router.navigateByUrl(`/book/${this.bookId_param}`).catch(error => {
          this.showLoader = false;
          console.log('error navigating', error);
        });
      }, 1000)
    } else {
      this.errorMessage = "Please fill all the fields";
      this.checkInvalidForm();
      this.showLoader = false;
    }
  }

}
