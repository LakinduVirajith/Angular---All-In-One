import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appMousemoveListener]'
})
export class MousemoveListenerDirective {
  @Output() mousePositionChange = new EventEmitter<string>();
  mousePosition!: string;

  constructor() { }

  /* LISTENS TO THE 'MOUSEMOVE' EVENT ON THE HOST ELEMENT. */
  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    console.log(event);
    this.mousePosition = `Mouse position: X:${event.clientX}, Y:${event.clientY}`;
    this.mousePositionChange.emit(this.mousePosition);
  }
}
