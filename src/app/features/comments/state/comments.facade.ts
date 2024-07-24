import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { CommentsActions } from './comments.actions';
import { selectCommentsSorted, selectSort } from './comments.reducer';
import { SortModel } from './comments.model';

@Injectable({ providedIn: 'root' })
export class CommentsFacade {
  private readonly store = inject(Store);

  commentsSorted$ = this.store.select(selectCommentsSorted);
  sort$ = this.store.select(selectSort);

  loadComments() {
    this.store.dispatch(CommentsActions.loadComments());
  }

  sortComments(sort: SortModel) {
    this.store.dispatch(CommentsActions.sortComments({ sort }));
  }
}
