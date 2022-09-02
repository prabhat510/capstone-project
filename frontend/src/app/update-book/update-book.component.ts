import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { AuthService } from '../services/auth.service';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  title: string = ''
  author: string = ''
  publisher: string = ''
  genre: string = ''
  description: string = ''
  image: string = ''
  date_published: string = ''
  bookId: string = ''
  isLoading: boolean;

  constructor(private authservice: AuthService, private bookservice: BooksService, private router: Router, private activatedroute: ActivatedRoute) { }
  ngOnInit(): void {
    this.isLoading = true
    // check if the user is valid or not
    this.authservice.verifyToken(`https://getbookinfo.herokuapp.com/verify/token`).subscribe(data => {
      this.isLoading = false
    },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login'])
          }
        }
      }
    )
    this.bookId = this.activatedroute.snapshot.paramMap.get('id')

    // once we got the book that we need to edit, we will populate the dom with the previous data
    this.bookservice.getBook(`https://getbookinfo.herokuapp.com/books/${this.bookId}`).subscribe(data => this.populateDom(data)
    )

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

  updateBook() {
    const book = { title: this.title, author: this.author, publisher: this.publisher, genre: this.genre, description: this.description, image: this.image, date_published: this.date_published }
    console.log(book);
    this.bookservice.updateBook(`https://getbookinfo.herokuapp.com/books/edit/${this.bookId}`, book).subscribe(data => console.log(data)
    )
    this.router.navigate(['/book', this.bookId])
  }
}
