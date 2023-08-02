import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotateComponent } from './rotate.component';

describe('RotateComponent', () => {
  let component: RotateComponent;
  let fixture: ComponentFixture<RotateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotateComponent]
    });
    fixture = TestBed.createComponent(RotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
