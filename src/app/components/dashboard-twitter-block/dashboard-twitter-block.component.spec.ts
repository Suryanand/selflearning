import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTwitterBlockComponent } from './dashboard-twitter-block.component';

describe('DashboardTwitterBlockComponent', () => {
  let component: DashboardTwitterBlockComponent;
  let fixture: ComponentFixture<DashboardTwitterBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTwitterBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTwitterBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
