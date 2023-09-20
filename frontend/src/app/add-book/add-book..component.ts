import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { BooksService } from '../services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';
import { getServiceUrl } from '../urls';

@Component({
  selector: 'app-add-book.',
  templateUrl: './add-book..component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit, AfterViewInit {
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
  bookId_param: string = '';
  // book attributes---two way data binding
  book_form = {
    title: '',
    author: '',
    publisher: '',
    genre: '',
    description: '',
    image: '',
    date_published: '',
  };

  constructor(
    private authservice: AuthService,
    private bookservice: BooksService,
    private router: Router,
    private activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedroute.queryParamMap.subscribe(
      (params) => (this.bookId_param = params.get('id'))
    );
    console.log('book id param', this.bookId_param);

    if (this.bookId_param) {
      this.bookservice
        .getBook(
          `${getServiceUrl().bookServiceAPI}/books/${this.bookId_param}`
        )
        .subscribe((data) => {
          this.populateDom(data);
          this.loading = false;
        });
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
    this.book_form.title = data.title;
    this.book_form.author = data.author;
    this.book_form.publisher = data.publisher;
    this.book_form.genre = data.genre;
    this.book_form.description = data.description;
    this.book_form.date_published = data.date_published;
    this.book_form.image = data.image;
  }

  submitBook(bok_form: NgForm) {
    this.showLoader = true;
    if (bok_form.valid) {
      this.bookservice
        .addBook(
          `${getServiceUrl().bookServiceAPI}/books/add/book`,
          this.book_form
        )
        .subscribe((data) => console.log(data));
      // redirecting to home page
     setTimeout(() => {
      this.router.navigate(['']).catch((error => {
        console.log('error navigating from addBook component', error);
      }))
     }, 1000);
    } else {
      this.errorMessage = 'Please fill all the fields';
      this.checkInvalidForm();
      this.showLoader = false;
    }
  }
  updateBook() {
    this.bookservice
      .updateBook(
        `${getServiceUrl().bookServiceAPI}/books/edit/${this.bookId_param}`,
        this.book_form
      )
      .subscribe((data) => console.log(data));
    this.router.navigate(['/book', this.bookId_param]);
  }
}
