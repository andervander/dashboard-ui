import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CommentsApiService {
  private readonly API = 'https://jsonplaceholder.typicode.com';

  private http = inject(HttpClient);

  getAllComments() {
    return this.http.get<Comment[]>(`${this.API}/comments`);
  }
}
