import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddComment, Comment } from './state/comments.model';

@Injectable({ providedIn: 'root' })
export class CommentsApiService {
  private readonly API = 'https://jsonplaceholder.typicode.com';

  private http = inject(HttpClient);

  getAllComments() {
    return this.http.get<Comment[]>(`${this.API}/comments`);
  }

  addComment(comment: AddComment) {
    return this.http.post<Comment>(`${this.API}/comments`, comment);
  }
}
