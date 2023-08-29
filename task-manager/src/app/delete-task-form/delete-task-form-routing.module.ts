import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteTaskFormComponent } from './delete-task-form.component';

const routes: Routes = [
  {
    path: '',
    component: DeleteTaskFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteTaskFormRoutingModule { }
