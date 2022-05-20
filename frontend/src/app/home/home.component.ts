import { Component, VERSION, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: any;
  filterTerm: string = '';
  constructor(private booksservice: BooksService) { }

  ngOnInit() {
    this.booksservice.getAllBooks('http://localhost:3000/home').subscribe(data => this.books = data)

  }
  onSelect(event) {
    console.log(event.target.value);
    this.booksservice.getAllBooks(`http://localhost:3000/home/${event.target.value}`).subscribe(data => console.log(data)
    )

  }
}
