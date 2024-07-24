import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { Observable, take } from 'rxjs';

import { CommentsFacade } from '../state/comments.facade';
import { Comment } from '../state/comments.model';

@Component({
  selector: 'app-comments-table',
  standalone: true,
  imports: [TitleCasePipe, AsyncPipe, MatSortModule],
  styleUrl: './comments-table.component.scss',
  templateUrl: './comments-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsTableComponent implements AfterViewInit {
  @ViewChild(MatSort) sort: MatSort | undefined;

  private commentsFacade = inject(CommentsFacade);
  private cd = inject(ChangeDetectorRef);

  columns: (keyof Comment)[] = ['id', 'postId', 'name', 'body', 'email'];
  comments$: Observable<Comment[]> = this.commentsFacade.commentsSorted$;

  ngAfterViewInit() {
    this.initTableSort();
  }

  sortData(sort: Sort) {
    this.commentsFacade.sortComments(sort);
  }

  private initTableSort() {
    this.commentsFacade.sort$.pipe(take(1)).subscribe((sortState) => {
      if (!sortState || !this.sort) return;
      this.sort.sort({ id: sortState.active, start: sortState.direction, disableClear: false });
      this.cd.markForCheck();
    });
  }
}
