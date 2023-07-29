import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDoubleClickListener]'
})
export class DoubleClickListenerDirective {

  constructor() { }

  /* LISTENS TO THE 'DBLCLICK' (DOUBLE-CLICK) EVENT ON THE HOST ELEMENT. */
  @HostListener('dblclick')
  onDoubleClick() {
    window.alert('Double Click Listener Triggered!');
  }
}
