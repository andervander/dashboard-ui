import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Comment, SortModel } from './comments.model';

export const CommentsActions = createActionGroup({
  source: 'Comments',
  events: {
    'Load Comments': emptyProps,
    'Load Comments Success': props<{ comments: Comment[] }>(),
    'Load Comments Failure': emptyProps(),
    'Sort Comments': props<{ sort: SortModel }>(),
    'Clear Comments': emptyProps()
  }
});
