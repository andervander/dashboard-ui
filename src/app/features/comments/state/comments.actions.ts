import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AddComment, Comment, SortModel } from './comments.model';

export const CommentsActions = createActionGroup({
  source: 'Comments',
  events: {
    'Load Comments': emptyProps,
    'Load Comments Success': props<{ comments: Comment[] }>(),
    'Load Comments Failure': emptyProps(),
    'Sort Comments': props<{ sort: SortModel }>(),
    'Add Comment': props<{ comment: AddComment }>(),
    'Add Comment Success': props<{ comment: Comment }>(),
    'Add Comment Failure': emptyProps(),
    'Clear Comments': emptyProps()
  }
});
