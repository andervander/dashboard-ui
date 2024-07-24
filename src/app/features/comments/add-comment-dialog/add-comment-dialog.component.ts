import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { CommentsFacade } from '../state/comments.facade';

@Component({
  selector: 'app-add-comment-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ReactiveFormsModule, MatSelectModule, MatInputModule, AsyncPipe],
  templateUrl: './add-comment-dialog.component.html',
  styleUrl: './add-comment-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCommentDialogComponent {
  private commentsFacade = inject(CommentsFacade);

  addForm = inject(FormBuilder).nonNullable.group({
    postId: [1, Validators.required],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    body: ['', Validators.required]
  });

  postIds = [...Array(101).keys()].slice(1);
  loading$ = this.commentsFacade.loading$;
  error$ = this.commentsFacade.error$;

  addComment() {
    if (this.addForm.invalid) {
      Object.values(this.addForm.controls).forEach((control) => control.markAsTouched());
      return;
    }

    const comment = {
      postId: this.addForm.controls.postId.value,
      name: this.addForm.controls.name.value,
      email: this.addForm.controls.email.value,
      body: this.addForm.controls.body.value
    };

    this.commentsFacade.addComment(comment);
  }
}
