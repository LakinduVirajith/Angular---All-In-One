import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanActivateComponent } from './can-activate.component';

describe('CanActivateComponent', () => {
  let component: CanActivateComponent;
  let fixture: ComponentFixture<CanActivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanActivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
