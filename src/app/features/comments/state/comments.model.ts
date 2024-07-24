import { Sort } from '@angular/material/sort';

export interface Comment {
  id: number;
  postId: number;
  name: string;
  body: string;
  email: string;
}

export type SortModel = Sort;

export type AddComment = Omit<Comment, 'id'>;
