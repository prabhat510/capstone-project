import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book..component';
import { BookComponent } from './book-detail/book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user-login/login.component';
import { RegisterComponent } from './user-registration/register.component';
import { AuthGuard } from './auth.guard';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'book/:id', component: BookComponent,
  },
  {
    path: 'add-book', component: AddBookComponent,
    // when we try to navigate to this route, AuthGuard is executed, if it returns true navigation is allowed otherwise it 
    // redirects us to login page
    canActivate: [AuthGuard]
  },
  {
    path: 'update-book', component: UpdateBookComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// whenever you make a request to the backend, the authVerify method will validate the token that was sent using the HttpInterceptor