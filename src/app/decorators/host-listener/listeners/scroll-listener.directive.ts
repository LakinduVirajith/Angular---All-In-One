import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollListener]'
})
export class ScrollListenerDirective {
  @Output() scrollPositionChange = new EventEmitter<string>();
  scrollPosition!: string;

  constructor() { }

  /* LISTENS TO THE 'SCROLL' EVENT ON THE WINDOW OBJECT. */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    console.log(event);
    this.scrollPosition = `Scroll position: ${window.scrollY}`;
    this.scrollPositionChange.emit(this.scrollPosition);
  }
}
