import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HomeComponent } from './home/home.component';
import { SubmitFeedbackComponent } from './submit-feedback/submit-feedback.component';
import { DisplayFeedbacksComponent } from './display-feedbacks/display-feedbacks.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AuthGuard } from './auth.guard';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DisplayUsersComponent } from './display-users/display-users.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'book/:id', component: BookDetailComponent
  },
  {
    path: 'admin', component: AddBookComponent,
    // when we try to navigate to this route, AuthGuard is executed, if it returns true navigation is allowed otherwise it 
    // redirects us to login page
    canActivate: [AuthGuard]
  },
  {
    path: 'book/edit/:id',
    component: UpdateBookComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'feedback', component: SubmitFeedbackComponent
  },
  {
    path: 'feedbacks', component: DisplayFeedbacksComponent,
    canActivate: [AuthGuard]
  },
  { path: 'users', component: DisplayUsersComponent, canActivate:[AuthGuard] },
  { path: 'login', component: LoginUserComponent },
  { path: 'register', component: RegisterUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// whenever you make a request to the backend, the authVerify method will validate the token that was sent using the HttpInterceptor