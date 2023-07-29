import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcPostListComponent } from './vc-post-list.component';

describe('VcPostListComponent', () => {
  let component: VcPostListComponent;
  let fixture: ComponentFixture<VcPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcPostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
