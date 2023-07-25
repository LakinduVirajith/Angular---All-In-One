import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenFormComponent } from './driven-form.component';

describe('DrivenFormComponent', () => {
  let component: DrivenFormComponent;
  let fixture: ComponentFixture<DrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
