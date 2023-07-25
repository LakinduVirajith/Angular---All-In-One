import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleComponent } from './ng-style.component';

describe('NgStyleComponent', () => {
  let component: NgStyleComponent;
  let fixture: ComponentFixture<NgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
