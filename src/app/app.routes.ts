import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'comments',
    loadChildren: () => import('./features/comments/comments.routes').then((r) => r.CommentsRoutes)
  },
  {
    path: '**',
    redirectTo: 'comments'
  }
];
