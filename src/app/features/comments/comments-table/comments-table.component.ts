import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-comments-table',
  standalone: true,
  imports: [],
  templateUrl: './comments-table.component.html',
  styleUrl: './comments-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsTableComponent {}
