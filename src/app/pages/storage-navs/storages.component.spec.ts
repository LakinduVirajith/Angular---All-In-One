import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoragesComponent } from './storages.component';

describe('StoragesComponent', () => {
  let component: StoragesComponent;
  let fixture: ComponentFixture<StoragesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoragesComponent]
    });
    fixture = TestBed.createComponent(StoragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
