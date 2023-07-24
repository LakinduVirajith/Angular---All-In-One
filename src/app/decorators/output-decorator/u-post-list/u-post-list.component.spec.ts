import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPostListComponent } from './u-post-list.component';

describe('UPostListComponent', () => {
  let component: UPostListComponent;
  let fixture: ComponentFixture<UPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UPostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
