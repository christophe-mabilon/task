import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  standalone:true,
  selector: '[appTaskStatusColor]'
})
export class TaskStatusColorDirective {
  @Input() set appTaskStatusColor(status: string) {
    switch (status) {
      case 'EN_COURS':
        this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
        break;
      case 'A_FAIRE':
        this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
        break;
      case 'TERMINEE':
        this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
        break;
      default:
        this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}