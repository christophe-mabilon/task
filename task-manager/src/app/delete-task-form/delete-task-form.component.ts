import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/model/task';
import { CRUDTaskListService } from 'src/service/crudtask-list.service';

@Component({
  selector: 'app-delete-task-form',
  templateUrl: './delete-task-form.component.html',
  styleUrls: ['./delete-task-form.component.scss'],
})
export class DeleteTaskFormComponent implements OnInit {
  form!: FormGroup;
  private unsubscribe$ = new Subject();
  selectedTask!: Task[];
  successDelete = false;
  constructor(
    private fb: FormBuilder,
    private crudTaskListService: CRUDTaskListService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.unsubscribeObservables();
  }

  unsubscribeObservables(): void {
    this.unsubscribe$.next(void 0);
    this.unsubscribe$.complete;
  }

  ngOnInit(): void {
    this.initSearch();
  }

  initSearch() {
    this.form = this.fb.group({
      search: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  findTask() {
    this.crudTaskListService
      .read()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (result: Task[]) => {
          console.log(result);
          this.selectedTask = result.filter(
            (task) =>
              task.title.toLowerCase() ===
              this.form.controls['search'].value.toLowerCase()
          );
        },
      });
  }

  deleteTask(task: Task): void {
    this.crudTaskListService
      .deleteById(task.id!)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (result: Task) => {
          if (result) {
            this.successDelete = true;
            setTimeout(() => {
              this.router.navigateByUrl('/display');
            }, 1500);
          }
        },
      });
  }
}
