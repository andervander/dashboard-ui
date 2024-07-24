import { createFeature, createReducer, on } from '@ngrx/store';
import { CommentsActions } from './comments.actions';

export const commentsFeatureKey = 'comments';

export interface State {
  data: Comment[];
  loading: boolean;
  loaded: boolean;
  error: string | null;
}

export const initialState: State = {
  data: [],
  loading: false,
  loaded: false,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(CommentsActions.loadComments, (state) => ({ ...state, loading: true })),
  on(CommentsActions.loadCommentsSuccess, (state, { comments }) => ({ ...state, loading: false, data: comments }))
);

export const commentsFeature = createFeature({
  name: commentsFeatureKey,
  reducer
});
