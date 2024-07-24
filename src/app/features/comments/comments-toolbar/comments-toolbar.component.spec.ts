import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsToolbarComponent } from './comments-toolbar.component';

describe('CommentsToolbarComponent', () => {
  let component: CommentsToolbarComponent;
  let fixture: ComponentFixture<CommentsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
