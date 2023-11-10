import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { getServiceUrl } from '../urls';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  loading = true;
  isAdmin = false;
  bookId = '';
  isBrowser = false;
  book: any;
  constructor(private activatedroute: ActivatedRoute, private bookservice: BooksService, private router: Router,
    private authservice: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object) { 
      this.isBrowser = isPlatformBrowser(platformId);
    }

  ngOnInit(): void {
    if(this.isBrowser) {
      const isLoggedIn = this.authservice.isLoggedIn;
      this.bookId = this.activatedroute.snapshot.paramMap.get('id');
      this.isAdmin = isLoggedIn && JSON.parse(localStorage.getItem('userData'))? JSON.parse(localStorage.getItem('userData')).isAdmin : false;
      this.bookservice.getBook(`${getServiceUrl().bookServiceAPI}/books/${this.bookId}`).subscribe(data => {
        this.book = data;
        this.loading = false;
        this.bookservice.scrollToTop();
      });
    }
  }
  
  removeBook() {
    this.bookservice.deleteBook(`${getServiceUrl().bookServiceAPI}/books/remove/${this.bookId}`).subscribe();
    setTimeout(()=> {
      this.router.navigate(['']).then(() => window.location.reload());
    }, 1000)
  }
  changeBook() {
    this.router.navigate(['/update-book'], { queryParams: { id: this.bookId } })
  }
}
