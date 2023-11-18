import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { getServiceUrl } from '../urls';
import { AuthService } from '../services/auth.service';
import { isPlatformBrowser } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  isAdmin = false;
  bookId = '';
  isBrowser = false;
  book: any;
  bookStateKey: any = makeStateKey<any>('book-data');
  constructor(private activatedroute: ActivatedRoute, private bookservice: BooksService, private router: Router,
    private authservice: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object, private transferState: TransferState) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.transferState.hasKey(this.bookStateKey)) {
      console.log('key is present');
      const cachedBookData = this.transferState.get(this.bookStateKey, {});
      this.transferState.remove(this.bookStateKey);
      this.book = cachedBookData;
      console.log('cacheddata', cachedBookData);
    } else if (!this.isBrowser) {
      this.bookId = this.activatedroute.snapshot.paramMap.get('id');
      console.log('data not cached fetching it from the server');
      this.bookservice.getBook(`${getServiceUrl().bookServiceAPI}/books/${this.bookId}`).subscribe(data => {
        this.book = data;
        this.transferState.set(this.bookStateKey, data);
      });
    }
    if (this.isBrowser) {
      const isLoggedIn = this.authservice.isLoggedIn;
      this.isAdmin = isLoggedIn && JSON.parse(localStorage.getItem('userData')) ? JSON.parse(localStorage.getItem('userData')).isAdmin : false;
      this.bookservice.scrollToTop();
    }
  }

  removeBook() {
    this.bookservice.deleteBook(`${getServiceUrl().bookServiceAPI}/books/remove/${this.bookId}`).subscribe();
    setTimeout(() => {
      this.router.navigate(['']).then(() => window.location.reload());
    }, 1000)
  }
  changeBook() {
    this.router.navigate(['/update-book'], { queryParams: { id: this.bookId } })
  }
}
