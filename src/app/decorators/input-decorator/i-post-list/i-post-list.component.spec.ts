import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPostListComponent } from './i-post-list.component';

describe('IPostListComponent', () => {
  let component: IPostListComponent;
  let fixture: ComponentFixture<IPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPostListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
