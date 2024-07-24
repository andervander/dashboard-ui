import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { CommentsActions } from './comments.actions';
import { SortModel, Comment } from './comments.model';

export const commentsFeatureKey = 'comments';

export interface State {
  data: Comment[];
  sort: SortModel | null;
  loading: boolean;
  loaded: boolean;
  error: string | null;
}

export const initialState: State = {
  data: [],
  sort: null,
  loading: false,
  loaded: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(CommentsActions.loadComments, (state) => ({ ...state, loading: true })),
  on(CommentsActions.loadCommentsSuccess, (state, { comments }) => ({ ...state, loading: false, data: comments })),
  on(CommentsActions.sortComments, (state, { sort }) => ({ ...state, sort })),
  on(CommentsActions.clearComments, () => initialState)
);

export const commentsFeature = createFeature({
  name: commentsFeatureKey,
  reducer,
  extraSelectors: ({ selectData, selectSort }) => ({
    selectCommentsSorted: createSelector(selectData, selectSort, (data, sort) => {
      if (!sort || !sort.active || sort.direction === '') {
        return data;
      }
      return [...data].sort((a, b) => compare(a[sort.active as keyof Comment], b[sort.active as keyof Comment], sort.direction === 'asc'));
    })
  })
});

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

export const { selectLoading, selectCommentsSorted, selectSort, selectData } = commentsFeature;
