import { Component, ViewChild } from '@angular/core';
import { VcPostListComponent } from '../vc-post-list/vc-post-list.component';

@Component({
  selector: 'app-vc-post',
  templateUrl: './vc-post.component.html',
  styleUrls: ['./vc-post.component.scss']
})
export class VcPostComponent {
  /* GET CHILD COMPONENT */
  @ViewChild('childRef') childComponent!: VcPostListComponent;

  changeChildMessage() {
    this.childComponent.message = 'Message updated from Parent!';
  }
}
