import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksService } from './services/books.service';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SubmitFeedbackComponent } from './submit-feedback/submit-feedback.component';
import { DisplayFeedbacksComponent } from './display-feedbacks/display-feedbacks.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { NavComponent } from './nav/nav.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { DisplayBooksComponent } from './display-books/display-books.component';

// the HTTP_INTERCEPTORS module is used to send the token to the backend and verify the token using the TokenInterceptorService 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookDetailComponent,
    AddBookComponent,
    SubmitFeedbackComponent,
    DisplayFeedbacksComponent,
    LoginUserComponent,
    RegisterUserComponent,
    NavComponent,
    UpdateBookComponent,
    DisplayUsersComponent,
    DisplayBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    LoadingBarRouterModule
  ],
  providers: [BooksService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
