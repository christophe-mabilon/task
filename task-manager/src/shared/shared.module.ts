import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ErrorMinLengthComponent } from './error-min-length/error-min-length.component';

@NgModule({
  declarations: [ErrorMinLengthComponent],
  imports: [CommonModule, CommonModule, MatInputModule],
  exports: [ErrorMinLengthComponent],
})
export class SharedModule {}
