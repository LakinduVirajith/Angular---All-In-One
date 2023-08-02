import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlippingComponent } from './flipping.component';

describe('FlippingComponent', () => {
  let component: FlippingComponent;
  let fixture: ComponentFixture<FlippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlippingComponent]
    });
    fixture = TestBed.createComponent(FlippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
