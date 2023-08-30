import { Component } from '@angular/core';

export
@Component({
  template: `<div [appTaskStatusColor]="status"></div>`,
})
class TestComponent {
  status = '';
}
