import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveComponent } from './custom-directive.component';

describe('CustomDirectiveComponent', () => {
  let component: CustomDirectiveComponent;
  let fixture: ComponentFixture<CustomDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
