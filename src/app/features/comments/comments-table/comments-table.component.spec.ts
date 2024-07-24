import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CommentsTableComponent } from './comments-table.component';
import { CommentsFacade } from '../state/comments.facade';
import { CommentsMockFacade } from '../state/mocks/comments.facade.mock';

describe('CommentsTableComponent', () => {
  let component: CommentsTableComponent;
  let fixture: ComponentFixture<CommentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsTableComponent, NoopAnimationsModule],
      providers: [{ provide: CommentsFacade, useClass: CommentsMockFacade }]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
