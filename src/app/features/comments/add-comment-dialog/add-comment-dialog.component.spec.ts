import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommentDialogComponent } from './add-comment-dialog.component';
import { CommentsFacade } from '../state/comments.facade';
import { CommentsMockFacade } from '../state/mocks/comments.facade.mock';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AddCommentDialogComponent', () => {
  let component: AddCommentDialogComponent;
  let fixture: ComponentFixture<AddCommentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCommentDialogComponent, NoopAnimationsModule],
      providers: [{ provide: CommentsFacade, useClass: CommentsMockFacade }]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
