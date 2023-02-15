import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddBookComponent } from './add-book..component';
import { FormsModule } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let bookservice: BooksService;
  let httpclient: HttpClient;
  let router: Router;
  let activatedroute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [AddBookComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    httpclient = TestBed.inject(HttpClient);
    router = TestBed.inject(Router);
    activatedroute = TestBed.inject(ActivatedRoute);
    bookservice = new BooksService(httpclient);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should subscribe the queryparams', () => {
    jest.spyOn(activatedroute, 'queryParamMap', 'get');
    component.ngOnInit();
    expect(activatedroute.queryParamMap.subscribe).toHaveBeenCalled();
  });


  describe('submitBook method', () => {
    it('should call bookservice to add a new book', () => {
      jest.spyOn(bookservice, 'addBook');
      jest.spyOn(router, 'navigate');
      const book_form = {
        title: '',
        author: '',
        publisher: '',
        genre: '',
        description: '',
        image: '',
        date_published: ''
      };
      component.submitBook();
      expect(bookservice.addBook).toHaveBeenCalledWith("", book_form);
      expect(router.navigate).toHaveBeenCalled();
    })
  })
});
