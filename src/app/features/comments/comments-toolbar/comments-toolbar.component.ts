import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-comments-toolbar',
  standalone: true,
  imports: [],
  templateUrl: './comments-toolbar.component.html',
  styleUrl: './comments-toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsToolbarComponent {}
