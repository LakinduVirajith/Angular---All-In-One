import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostBinding2]'
})
export class HostBinding2Directive {

  constructor() { }

  @HostBinding('style.backgroundColor') setBackgroundColor: string = 'aquamarine';
  @HostBinding('style.color') setColor: string = 'black';
  @HostBinding('style.borderRadius') setBorderRadius: string = '8px';
  @HostBinding('style.borderColor') setBorderColor: string = 'aquamarine';

  @HostListener('click') 
  onClick() {    
    this.setBackgroundColor = 'chocolate';
    this.setColor = 'white';
    this.setBorderRadius = '16px';
    this.setBorderColor = 'chocolate';
  }

  @HostListener('dblclick') 
  onDoubleClick() {    
    this.setBackgroundColor = 'crimson';
    this.setColor = 'white';
    this.setBorderRadius = '24px';
    this.setBorderColor = 'crimson';
  }

  @HostListener('mouseleave') 
  onMouseLeave() {    
    this.setBackgroundColor = 'aquamarine';
    this.setColor = 'black';
    this.setBorderRadius = '8px';
    this.setBorderColor = 'aquamarine';
  }
}
