import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'app-error-min-length',
  templateUrl: './error-min-length.component.html',
  styleUrls: ['./error-min-length.component.scss'],
  imports: [CommonModule, MatInputModule],
})
export class ErrorMinLengthComponent {
  @Input() fieldName: string = '';
  @Input() showError: boolean | undefined = false;
  @Input() require: boolean | undefined = false;
  @Input() minLength: number| undefined = 0;
  @Input() maxLength: number| undefined = 0;
}
