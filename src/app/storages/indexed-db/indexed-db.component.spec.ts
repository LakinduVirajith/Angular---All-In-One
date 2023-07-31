import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexedDbComponent } from './indexed-db.component';

describe('IndexedDbComponent', () => {
  let component: IndexedDbComponent;
  let fixture: ComponentFixture<IndexedDbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexedDbComponent]
    });
    fixture = TestBed.createComponent(IndexedDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
