import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

import { CommentsToolbarComponent } from './comments-toolbar/comments-toolbar.component';
import { CommentsFacade } from './state/comments.facade';
import { AddCommentDialogComponent } from './add-comment-dialog/add-comment-dialog.component';

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
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dialog = inject(MatDialog);

  private dialogRef: MatDialogRef<AddCommentDialogComponent> | null = null;
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.listenAddCommentParam();
    this.commentsFacade.loadComments();
  }

  onAddCommentNavigate() {
    this.router.navigate([], { queryParams: { add: true } });
  }

  private openAddCommentDialog() {
    this.dialogRef = this.dialog.open(AddCommentDialogComponent);
    this.dialogRef
      .afterClosed()
      .pipe(filter((value) => value !== 'onQuery'))
      .subscribe(() => {
        this.router.navigate([]);
        this.dialogRef = null;
      });
  }

  private closeAddCommentDialog() {
    if (this.dialogRef) {
      this.dialogRef.close('onQuery');
      this.dialogRef = null;
    }
  }

  private listenAddCommentParam() {
    this.route.queryParams.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      if (params['add']) {
        this.openAddCommentDialog();
      } else {
        this.closeAddCommentDialog();
      }
    });
  }
}
