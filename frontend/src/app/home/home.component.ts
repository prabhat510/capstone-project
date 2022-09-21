import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  booksData: any;
  filterTerm: string = '';
  constructor(private titleservice:Title, private booksservice: BooksService, private router: Router) { }

  ngOnInit() {
    this.titleservice.setTitle('BookStore');
    this.isLoading = true;
    this.getAllBooks();
  }

  getAllBooks(filter?: string) {
    this.booksservice.getAllBooks('http://localhost:3000/home').subscribe(data => {
      if (filter === 'reverse') {
        data.reverse();
      }
      this.booksData = data;
      this.isLoading = false;
    })
  }

  onSelect(event) {
    console.log(event.target.value);
    this.getAllBooks('reverse')
    this.isLoading=true;
  }
}
