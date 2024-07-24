import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { provideRouter } from '@angular/router';

import { CommentsToolbarComponent } from './comments-toolbar.component';
import { CommentsFacade } from '../state/comments.facade';
import { CommentsMockFacade } from '../state/mocks/comments.facade.mock';
import { CommentsTableComponent } from '../comments-table/comments-table.component';
import { CommentsChartComponent } from '../comments-chart/comments-chart.component';

describe('CommentsToolbarComponent', () => {
  let component: CommentsToolbarComponent;
  let fixture: ComponentFixture<CommentsToolbarComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsToolbarComponent],
      providers: [
        provideRouter([
          { path: 'table', component: CommentsTableComponent },
          { path: 'chart', component: CommentsChartComponent }
        ]),
        { provide: CommentsFacade, useClass: CommentsMockFacade }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsToolbarComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to table view when Table view link is clicked', async () => {
    const tableViewLink = fixture.nativeElement.querySelector('a[aria-label="Table view"]');
    tableViewLink.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(location.path()).toBe('/table');
  });

  it('should navigate to chart view when Chart view link is clicked', async () => {
    const chartViewLink = fixture.nativeElement.querySelector('a[aria-label="Chart view"]');
    chartViewLink.click();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(location.path()).toBe('/chart');
  });
});
