import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {
  @Input() books: any;
  @Input() filterTerm: string = '';
  constructor() { }

  ngOnInit(): void {
 
  }

}
