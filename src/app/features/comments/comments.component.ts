import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommentsToolbarComponent } from './comments-toolbar/comments-toolbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommentsToolbarComponent, RouterOutlet],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent {}
