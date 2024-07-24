import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommentsToolbarComponent } from './comments-toolbar/comments-toolbar.component';
import { CommentsFacade } from './state/comments.facade';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommentsToolbarComponent, RouterOutlet],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit {
  private commentsFacade = inject(CommentsFacade);

  ngOnInit() {
    this.commentsFacade.loadComments();
  }
}
