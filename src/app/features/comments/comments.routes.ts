import { Routes } from '@angular/router';

import { CommentsComponent } from './comments.component';
import { CommentsTableComponent } from './comments-table/comments-table.component';
import { CommentsChartComponent } from './comments-chart/comments-chart.component';

export const CommentsRoutes: Routes = [
  {
    path: '',
    component: CommentsComponent,
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
