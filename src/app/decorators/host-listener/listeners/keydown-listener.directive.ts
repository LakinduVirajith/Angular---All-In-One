import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeydownListener]'
})
export class KeydownListenerDirective {
  /* THIS IS REQUIRED TO MAKE THE DIV FOCUSABLE */
  @HostBinding('tabindex') tabIndex = 0;

  constructor() { }

  /* LISTENS TO THE 'KEYDOWN' EVENT ON THE HOST ELEMENT. */
  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    console.log(event);
    window.alert(`Key pressed: ${event.key}`);
  }

  /* USED TO APPLY TO DOCUMENT */
  /* @HostListener('document:keydown', ['$event']) */
}
