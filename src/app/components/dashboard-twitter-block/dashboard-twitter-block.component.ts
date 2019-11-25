import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-dashboard-twitter-block',
  templateUrl: './dashboard-twitter-block.component.html',
  styleUrls: ['./dashboard-twitter-block.component.scss']
})
export class DashboardTwitterBlockComponent implements OnInit {
  @Input() followers;
  @Output() addCount = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  followerCount(){
    this.followers = this.followers+1;
    this.addCount.emit(this.followers);
    console.log("Added Inside Child TS file");
  }

}
