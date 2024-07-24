import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-comments-chart',
  standalone: true,
  imports: [],
  templateUrl: './comments-chart.component.html',
  styleUrl: './comments-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsChartComponent {}
