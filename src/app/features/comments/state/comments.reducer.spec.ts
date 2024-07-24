import { reducer, initialState, commentsFeature } from './comments.reducer';
import { provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { Comment, SortModel } from './comments.model';

describe('Comments Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

describe('Comments Selectors', () => {
  let selectCommentsSorted: typeof commentsFeature.selectCommentsSorted;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })]
    });

    selectCommentsSorted = commentsFeature.selectCommentsSorted;
  });

  it('should return sorted comments by portId ascending', () => {
    const sort: SortModel = { active: 'postId', direction: 'asc' };
    const comments: Comment[] = [
      { postId: 3, id: 3, name: 'test', email: 'Eliseo@gardner.biz', body: 'test' },
      { postId: 2, id: 2, name: 'test', email: 'Jayne_Kuhic@sydney.com', body: 'test' },
      { postId: 1, id: 1, name: 'test', email: 'Eliseo@gardner.biz', body: 'test' }
    ];

    const result: Comment[] = selectCommentsSorted.projector(comments, sort);

    expect(result).toEqual([
      { postId: 1, id: 1, name: 'test', email: 'Eliseo@gardner.biz', body: 'test' },
      { postId: 2, id: 2, name: 'test', email: 'Jayne_Kuhic@sydney.com', body: 'test' },
      { postId: 3, id: 3, name: 'test', email: 'Eliseo@gardner.biz', body: 'test' }
    ]);
  });

  it('should return sorted comments by portId descending', () => {
    const sort: SortModel = { active: 'postId', direction: 'desc' };
    const comments: Comment[] = [
      { postId: 1, id: 1, name: 'test', email: 'Eliseo@gardner.biz', body: 'test' },
      { postId: 2, id: 2, name: 'test', email: 'Jayne_Kuhic@sydney.com', body: 'test' },
      { postId: 3, id: 3, name: 'test', email: 'Eliseo@gardner.biz', body: 'test' }
    ];

    const result: Comment[] = selectCommentsSorted.projector(comments, sort);

    expect(result).toEqual([
      { postId: 3, id: 3, name: 'test', email: 'Eliseo@gardner.biz', body: 'test' },
      { postId: 2, id: 2, name: 'test', email: 'Jayne_Kuhic@sydney.com', body: 'test' },
      { postId: 1, id: 1, name: 'test', email: 'Eliseo@gardner.biz', body: 'test' }
    ]);
  });
});
