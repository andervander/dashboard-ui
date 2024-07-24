import { of } from 'rxjs';

export class CommentsMockFacade {
  comments$ = of([]);
  commentsSorted$ = of([]);
  sort$ = of(null);

  loadComments() {
    return;
  }

  addComment() {
    return;
  }

  sortComments() {
    return;
  }
}
