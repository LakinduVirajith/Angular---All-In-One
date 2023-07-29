import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormWithFormBuilderComponent } from './reactive-form-with-form-builder.component';

describe('ReactiveFormWithFormBuilderComponent', () => {
  let component: ReactiveFormWithFormBuilderComponent;
  let fixture: ComponentFixture<ReactiveFormWithFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormWithFormBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormWithFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
