import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: any = []
  constructor(private booksservice: BooksService) { }

  ngOnInit() {
    this.booksservice.getAllBooks('http://localhost:3000/home').subscribe(data => this.books = data)

  }

}
