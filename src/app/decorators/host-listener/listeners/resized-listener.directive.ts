import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appResizedListener]'
})
export class ResizedListenerDirective {
  @Output() windowResizedChange = new EventEmitter<string>();
  windowResized!: string;

  constructor() { }

  /* LISTENS TO THE 'RESIZE' EVENT ON THE WINDOW OBJECT. */
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.windowResized = `Window resized: W:${window.innerWidth}, H${window.innerHeight}`;
    this.windowResizedChange.emit(this.windowResized);
  }
}
