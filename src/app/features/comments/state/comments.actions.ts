import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CommentsActions = createActionGroup({
  source: 'Comments',
  events: {
    'Load Comments': emptyProps,
    'Load Comments Success': props<{ comments: Comment[] }>(),
    'Load Comments Failure': emptyProps(),
    'Clear Comments': emptyProps()
  }
});
