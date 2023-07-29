import { Component } from '@angular/core';

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.scss']
})
export class HostListenerComponent {
  mousePosition: string = 'Mouse position: X:NaN, Y:NaN';
  windowResized: string = 'Window resized: W:NaN, H:Nan';
  scrollPosition: string = 'Scroll position: NaN';

  constructor() { }

  /* GETTING LISTENERS DATA */
  onMousePositionChange(mousePosition: string) {
    this.mousePosition = mousePosition;
  }

  onWindowResizedChange(windowResized: string) {
    this.windowResized = windowResized;
  }

  onScrollPositionChange(scrollPosition: string){
    this.scrollPosition = scrollPosition;
  }
}
