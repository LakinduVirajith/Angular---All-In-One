import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionStorageComponent } from './session-storage.component';

describe('SessionStorageComponent', () => {
  let component: SessionStorageComponent;
  let fixture: ComponentFixture<SessionStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionStorageComponent]
    });
    fixture = TestBed.createComponent(SessionStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
