import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageComponent } from './local-storage.component';

describe('LocalStorageComponent', () => {
  let component: LocalStorageComponent;
  let fixture: ComponentFixture<LocalStorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalStorageComponent]
    });
    fixture = TestBed.createComponent(LocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
