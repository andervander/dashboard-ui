import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { CommentsActions } from './comments.actions';
import { selectCommentsSorted, selectData, selectError, selectLoading, selectSort } from './comments.reducer';
import { AddComment, SortModel } from './comments.model';

@Injectable({ providedIn: 'root' })
export class CommentsFacade {
  private readonly store = inject(Store);

  comments$ = this.store.select(selectData);
  commentsSorted$ = this.store.select(selectCommentsSorted);
  sort$ = this.store.select(selectSort);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  loadComments() {
    this.store.dispatch(CommentsActions.loadComments());
  }

  sortComments(sort: SortModel) {
    this.store.dispatch(CommentsActions.sortComments({ sort }));
  }

  addComment(comment: AddComment) {
    this.store.dispatch(CommentsActions.addComment({ comment }));
  }
}
