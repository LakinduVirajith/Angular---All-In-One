import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-binding',
  templateUrl: './host-binding.component.html',
  styleUrls: ['./host-binding.component.scss']
})
export class HostBindingComponent {
 constructor(){}

 isHighlighted: boolean = false;

 backgroundHighlight() {
   this.isHighlighted = !this.isHighlighted;
 }
}
