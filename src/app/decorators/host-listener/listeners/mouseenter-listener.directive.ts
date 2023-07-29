import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseenterListener]'
})
export class MouseenterListenerDirective {
  changeType: number = 1;

  constructor(private element: ElementRef, private render: Renderer2) { }

  /* LISTENS TO THE 'MOUSEENTER' EVENT ON THE HOST ELEMENT. */
  @HostListener('mouseenter')
  onMouseEnter() {
    switch (this.changeType) {
      case 1:
        this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'darksalmon');
        this.render.setStyle(this.element.nativeElement, 'color', 'white');
        ++this.changeType;
        break;
      case 2:
        this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'aquamarine');
        this.render.setStyle(this.element.nativeElement, 'color', 'black');
        --this.changeType;
        break;
      default:
        break;
    }
   
  }
}
