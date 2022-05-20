import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'feedbacks', component: FeedbacksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
