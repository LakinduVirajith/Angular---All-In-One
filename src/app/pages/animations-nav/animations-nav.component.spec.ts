import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsNavComponent } from './animations-nav.component';

describe('AnimationsNavComponent', () => {
  let component: AnimationsNavComponent;
  let fixture: ComponentFixture<AnimationsNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationsNavComponent]
    });
    fixture = TestBed.createComponent(AnimationsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
