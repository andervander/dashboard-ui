import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { CommentsComponent } from './comments.component';
import { CommentsTableComponent } from './comments-table/comments-table.component';
import { CommentsChartComponent } from './comments-chart/comments-chart.component';

import * as fromComments from './state/comments.reducer';
import { CommentsEffects } from './state/comments.effects';

export const CommentsRoutes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    providers: [provideState(fromComments.commentsFeature), provideEffects(CommentsEffects)],
    children: [
      {
        path: 'table',
        component: CommentsTableComponent
      },
      {
        path: 'chart',
        component: CommentsChartComponent
      },
      {
        path: '**',
        redirectTo: 'table'
      }
    ]
  }
];
