import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-fixed-issues',
  templateUrl: './dashboard-fixed-issues.component.html',
  styleUrls: ['./dashboard-fixed-issues.component.scss']
})
export class DashboardFixedIssuesComponent implements OnInit {
  @Input() fixedIssues;
  @Output() issueCount = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  countIssues(){
  }
}
