import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsChartComponent } from './comments-chart.component';
import { CommentsFacade } from '../state/comments.facade';
import { CommentsMockFacade } from '../state/mocks/comments.facade.mock';

describe('CommentsChartComponent', () => {
  let component: CommentsChartComponent;
  let fixture: ComponentFixture<CommentsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsChartComponent],
      providers: [{ provide: CommentsFacade, useClass: CommentsMockFacade }]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
