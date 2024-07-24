import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CommentsActions } from './comments.actions';
import { CommentsApiService } from '../comments-api.service';

@Injectable()
export class CommentsEffects {
  private actions$ = inject(Actions);
  private commentsApiService = inject(CommentsApiService);
  private router = inject(Router);

  loadComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentsActions.loadComments),
      switchMap(() =>
        this.commentsApiService.getAllComments().pipe(
          map((comments) => CommentsActions.loadCommentsSuccess({ comments })),
          catchError(() => of(CommentsActions.loadCommentsFailure()))
        )
      )
    )
  );

  addComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentsActions.addComment),
      switchMap(({ comment }) =>
        this.commentsApiService.addComment(comment).pipe(
          map((comment) => CommentsActions.addCommentSuccess({ comment })),
          catchError(() => of(CommentsActions.addCommentFailure()))
        )
      )
    )
  );

  closeAddDialogOnAddCommentSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CommentsActions.addCommentSuccess),
        tap(() => {
          this.router.navigate([]);
        })
      ),
    { dispatch: false }
  );
}
