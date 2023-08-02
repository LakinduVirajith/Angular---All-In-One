import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeInAndOutComponent } from './fade-in-and-out.component';

describe('FadeInAndOutComponent', () => {
  let component: FadeInAndOutComponent;
  let fixture: ComponentFixture<FadeInAndOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FadeInAndOutComponent]
    });
    fixture = TestBed.createComponent(FadeInAndOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
