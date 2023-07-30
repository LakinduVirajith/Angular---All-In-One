import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanDeactivateComponent } from './can-deactivate.component';

describe('CanDeactivateComponent', () => {
  let component: CanDeactivateComponent;
  let fixture: ComponentFixture<CanDeactivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanDeactivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanDeactivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
