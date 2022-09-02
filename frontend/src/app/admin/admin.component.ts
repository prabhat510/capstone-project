import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Router,ActivatedRoute } from '@angular/router';
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
  isLoading: boolean;

  constructor(private authservice: AuthService, private bookservice: BooksService, private router: Router, private activatedroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.isLoading = true
    // check if the user is valid or not
    this.authservice.verifyToken(`https://getbookinfo.herokuapp.com/verify/token`).subscribe(data => {
      console.log(data);
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

}
