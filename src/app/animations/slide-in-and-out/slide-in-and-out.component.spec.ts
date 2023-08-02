import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideInAndOutComponent } from './slide-in-and-out.component';

describe('SlideInAndOutComponent', () => {
  let component: SlideInAndOutComponent;
  let fixture: ComponentFixture<SlideInAndOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideInAndOutComponent]
    });
    fixture = TestBed.createComponent(SlideInAndOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
