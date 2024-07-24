import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideRouter, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { cold, hot } from 'jasmine-marbles';

import { CommentsEffects } from './comments.effects';
import { CommentsApiService } from '../comments-api.service';
import { CommentsActions } from './comments.actions';
import { Comment } from './comments.model';

describe('CommentsEffects', () => {
  let actions$: Observable<any>;
  let effects: CommentsEffects;
  let commentsApiService: jasmine.SpyObj<CommentsApiService>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommentsEffects,
        provideMockActions(() => actions$),
        provideRouter([]),
        { provide: CommentsApiService, useValue: jasmine.createSpyObj('CommentsApiService', ['getAllComments', 'addComment']) }
      ]
    });

    effects = TestBed.inject(CommentsEffects);
    commentsApiService = TestBed.inject(CommentsApiService) as jasmine.SpyObj<CommentsApiService>;
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadComments$', () => {
    it('should return a loadCommentsSuccess action with comments on success', () => {
      const comments: Comment[] = [{ id: 1, name: 'andrii', email: 'andrii@test.com', postId: 1, body: 'some text' }];
      const action = CommentsActions.loadComments();
      const outcome = CommentsActions.loadCommentsSuccess({ comments });

      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: comments });
      const expected = cold('--b', { b: outcome });
      commentsApiService.getAllComments.and.returnValue(response);

      expect(effects.loadComments$).toBeObservable(expected);
    });
  });

  describe('addComments$', () => {
    it('should return an addCommentSuccess action with the added comment on success', () => {
      const payload = { name: 'andrii', email: 'andrii@test.com', postId: 1, body: 'some text' };
      const comment = { ...payload, id: 1 };
      const action = CommentsActions.addComment({ comment: payload });
      const outcome = CommentsActions.addCommentSuccess({ comment });

      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: comment });
      const expected = cold('--b', { b: outcome });
      commentsApiService.addComment.and.returnValue(response);

      expect(effects.addComments$).toBeObservable(expected);
    });
  });

  describe('closeAddDialogOnAddCommentSuccess$', () => {
    it('should navigate on addCommentSuccess action', () => {
      const action = CommentsActions.addCommentSuccess({
        comment: {
          id: 1,
          name: 'andrii',
          email: 'andrii@test.com',
          postId: 1,
          body: 'some text'
        }
      });

      actions$ = hot('-a', { a: action });
      const expected = cold('-a', { a: action });
      const navigateSpy = spyOn(router, 'navigate');

      effects.closeAddDialogOnAddCommentSuccess$.subscribe(() => {
        expect(navigateSpy).toHaveBeenCalledWith([]);
      });

      expect(actions$).toBeObservable(expected);
    });
  });
});
