import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFixedIssuesComponent } from './dashboard-fixed-issues.component';

describe('DashboardFixedIssuesComponent', () => {
  let component: DashboardFixedIssuesComponent;
  let fixture: ComponentFixture<DashboardFixedIssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFixedIssuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFixedIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
