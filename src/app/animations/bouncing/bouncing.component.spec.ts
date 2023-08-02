import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncingComponent } from './bouncing.component';

describe('BouncingComponent', () => {
  let component: BouncingComponent;
  let fixture: ComponentFixture<BouncingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BouncingComponent]
    });
    fixture = TestBed.createComponent(BouncingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
