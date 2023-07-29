import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseleaveListener]'
})
export class MouseleaveListenerDirective {

  constructor() { }

  /* LISTENS TO THE 'MOUSELEAVE' EVENT ON THE HOST ELEMENT. */
  @HostListener('mouseleave')
  onMouseLeave() {
    window.alert('Mouseleave Listener Triggered!');
  }
}
