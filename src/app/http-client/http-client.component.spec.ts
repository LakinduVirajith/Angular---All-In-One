import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientComponent } from './http-client.component';

describe('HttpClientComponent', () => {
  let component: HttpClientComponent;
  let fixture: ComponentFixture<HttpClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpClientComponent]
    });
    fixture = TestBed.createComponent(HttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
