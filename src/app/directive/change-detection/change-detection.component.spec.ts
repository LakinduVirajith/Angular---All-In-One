import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionComponent } from './change-detection.component';

describe('ChangeDetectionComponent', () => {
  let component: ChangeDetectionComponent;
  let fixture: ComponentFixture<ChangeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
