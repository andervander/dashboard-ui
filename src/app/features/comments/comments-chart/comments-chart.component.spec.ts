import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsChartComponent } from './comments-chart.component';

describe('CommentsChartComponent', () => {
  let component: CommentsChartComponent;
  let fixture: ComponentFixture<CommentsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
