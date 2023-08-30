import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/display', pathMatch: 'full' },
  {
    path: 'display',
    loadChildren: () =>
      import('./task/task.module').then((module) => module.TaskModule),
  },
  {
    path: 'archived-tasks',
    loadChildren: () =>
      import('./archived-tasks/archived-tasks.module').then((module) => module.ArchivedTasksModule),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./add-task-form/add-task-form.module').then(
        (module) => module.AddTaskFormModule
      ),
  },
  {
    path: 'delete',
    loadChildren: () =>
      import('./delete-task-form/delete-task-form.module').then(
        (module) => module.DeleteTaskFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
