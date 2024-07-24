import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsComponent } from './comments.component';
import { provideRouter } from '@angular/router';
import { CommentsFacade } from './state/comments.facade';
import { CommentsMockFacade } from './state/mocks/comments.facade.mock';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsComponent],
      providers: [provideRouter([]), { provide: CommentsFacade, useClass: CommentsMockFacade }]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
