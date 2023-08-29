import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: '/display', pathMatch: 'full' },
  {
    path: 'display',
    loadChildren: () =>
      import('./task/task.module').then((module) => module.TaskModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
