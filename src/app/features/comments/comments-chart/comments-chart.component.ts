import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, inject, NgZone } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import * as PlotlyJS from 'plotly.js-dist-min';
import { Data, Layout } from 'plotly.js-dist-min';

import { CommentsFacade } from '../state/comments.facade';
import { Comment } from '../state/comments.model';

@Component({
  selector: 'app-comments-chart',
  standalone: true,
  imports: [],
  templateUrl: './comments-chart.component.html',
  styleUrl: './comments-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsChartComponent implements AfterViewInit {
  readonly layout: Partial<Layout> = {
    height: 800,
    width: 700
  };

  comments$ = inject(CommentsFacade).comments$;

  private ngZone = inject(NgZone);
  private destroyRef = inject(DestroyRef);

  ngAfterViewInit() {
    this.comments$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((comments) => {
      this.partsCommentsQty(comments);
    });
  }

  private partsCommentsQty(comments: Comment[]) {
    const dataSet = comments.reduce<Record<string, number>>((acc, item) => {
      acc[item.postId] = (acc[item.postId] ?? 0) + 1;
      return acc;
    }, {});

    const chartData: Data[] = [
      {
        type: 'pie',
        textinfo: 'none',
        values: Object.values(dataSet),
        labels: Object.keys(dataSet)
      }
    ];

    this.ngZone.runOutsideAngular(() => {
      this.renderChart('posts-qty-chart', chartData);
    });
  }

  private renderChart(id: string, data: Data[]) {
    PlotlyJS.newPlot(id, data, this.layout, { responsive: true });
  }
}
