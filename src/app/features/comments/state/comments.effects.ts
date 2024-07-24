import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommentsActions } from './comments.actions';
import { CommentsApiService } from '../comments-api.service';

@Injectable()
export class CommentsEffects {
  private actions$ = inject(Actions);
  private commentsApiService = inject(CommentsApiService);

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
}
