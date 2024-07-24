import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { CommentsActions } from './comments.actions';

@Injectable({ providedIn: 'root' })
export class CommentsFacade {
  private readonly store = inject(Store);

  loadComments() {
    this.store.dispatch(CommentsActions.loadComments());
  }
}
