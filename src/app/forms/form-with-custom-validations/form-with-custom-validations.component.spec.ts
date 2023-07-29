import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithCustomValidationsComponent } from './form-with-custom-validations.component';

describe('FormWithCustomValidationsComponent', () => {
  let component: FormWithCustomValidationsComponent;
  let fixture: ComponentFixture<FormWithCustomValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithCustomValidationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWithCustomValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
