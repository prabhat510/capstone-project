import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksService } from './services/books.service';
import { BookComponent } from './book-detail/book.component';
import { AddBookComponent } from './add-book/add-book..component';
import { LoginComponent } from './user-login/login.component';
import { RegisterComponent } from './user-registration/register.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { NavComponent } from './navbar/nav.component';
import { FooterComponent } from './footer/footer.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';

// the HTTP_INTERCEPTORS module is used to send the token to the backend and verify the token using the TokenInterceptorService 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    AddBookComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    FooterComponent,
    UpdateBookComponent,
    AlertBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [BooksService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
