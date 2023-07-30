import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicRouteGuardsComponent } from './route-guards.component';

describe('TopicRouteGuardsComponent', () => {
  let component: TopicRouteGuardsComponent;
  let fixture: ComponentFixture<TopicRouteGuardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopicRouteGuardsComponent]
    });
    fixture = TestBed.createComponent(TopicRouteGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
