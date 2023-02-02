import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './add-book/admin.component';
import { BookComponent } from './book-detail/book.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './submit-feedback/feedback.component';
import { FeedbacksComponent } from './display-feedbacks/feedbacks.component';
import { LoginComponent } from './user-login/login.component';
import { RegisterComponent } from './user-registration/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'book/:id', component: BookComponent,
  },
  {
    path: 'admin', component: AdminComponent,
    // when we try to navigate to this route, AuthGuard is executed, if it returns true navigation is allowed otherwise it 
    // redirects us to login page
    canActivate: [AuthGuard]
  },
  {
    path: 'feedback', component: FeedbackComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'feedbacks', component: FeedbacksComponent,
  //   canActivate: [AuthGuard]
  // },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// whenever you make a request to the backend, the authVerify method will validate the token that was sent using the HttpInterceptor