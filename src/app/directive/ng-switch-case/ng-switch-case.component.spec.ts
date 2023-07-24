import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchCaseComponent } from './ng-switch-case.component';

describe('NgSwitchCaseComponent', () => {
  let component: NgSwitchCaseComponent;
  let fixture: ComponentFixture<NgSwitchCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSwitchCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
