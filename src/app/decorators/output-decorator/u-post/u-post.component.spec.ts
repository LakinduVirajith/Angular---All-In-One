import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPostComponent } from './u-post.component';

describe('UPostComponent', () => {
  let component: UPostComponent;
  let fixture: ComponentFixture<UPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
