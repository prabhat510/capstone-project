import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksComponent } from './display-feedbacks.component';

describe('FeedbacksComponent', () => {
  let component: FeedbacksComponent;
  let fixture: ComponentFixture<FeedbacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
