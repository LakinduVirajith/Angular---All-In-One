import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appKeyupListener]'
})
export class KeyupListenerDirective {
  /* THIS IS REQUIRED TO MAKE THE DIV FOCUSABLE */
  @HostBinding('tabindex') tabIndex = 0;

  constructor() { }

  /* LISTENS TO THE 'KEYUP' EVENT ON THE DOCUMENT OBJECT. */
  @HostListener('keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    console.log(event);
    window.alert(`Key released: ${event.key}`);
  }

  /* USED TO APPLY TO DOCUMENT */
  /* @HostListener('document:keyup', ['$event']) */
}
