import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Router } from '@angular/router';

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

  constructor(private bookservice: BooksService, private router: Router) { }

  ngOnInit(): void {
  }
  submitBook() {
    const book = { title: this.title, author: this.author, publisher: this.publisher, genre: this.genre, description: this.description, image: this.image, date_published: this.date_published }
    console.log(book);
    this.bookservice.addBook('http://localhost:3000/books/add/book', book).subscribe(data => console.log(data)
    )
    this.router.navigate(['']).then(() => window.location.reload())
  }
}
