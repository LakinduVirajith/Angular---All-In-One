import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHostBinding1]'
})
export class HostBinding1Directive {
  @Input('appHostBinding1') condition: boolean = false;

  constructor() { }

  @HostBinding('style.backgroundColor') setBackgroundColor: string = 'white';

  ngOnChanges() {
    this.setBackgroundColor = this.condition ? 'goldenrod' : 'white';
  }
}
