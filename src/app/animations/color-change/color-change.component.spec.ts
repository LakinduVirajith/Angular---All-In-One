import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChangeComponent } from './color-change.component';

describe('ColorChangeComponent', () => {
  let component: ColorChangeComponent;
  let fixture: ComponentFixture<ColorChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorChangeComponent]
    });
    fixture = TestBed.createComponent(ColorChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
