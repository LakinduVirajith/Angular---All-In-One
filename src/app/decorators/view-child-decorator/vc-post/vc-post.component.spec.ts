import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcPostComponent } from './vc-post.component';

describe('VcPostComponent', () => {
  let component: VcPostComponent;
  let fixture: ComponentFixture<VcPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VcPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
