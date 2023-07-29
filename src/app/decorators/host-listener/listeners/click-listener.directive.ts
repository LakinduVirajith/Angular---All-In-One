import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickListener]'
})
export class ClickListenerDirective {

  constructor() { }

  /* LISTENS TO THE 'CLICK' EVENT ON THE HOST ELEMENT. */
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log(event);
    window.alert('Click Listener Triggered!');
  }
}
