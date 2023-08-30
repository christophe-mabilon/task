import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUpdateTaskComponent } from './main-update-task/main-update-task.component';

const routes: Routes = [{ path: '', component: MainUpdateTaskComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTaskRoutingModule {}
