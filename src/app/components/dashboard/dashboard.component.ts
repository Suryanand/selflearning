import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import data from './data.json';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  test: any = (data as any).default;
  usedSpaceTotal = data.usedSpaceTotal;
  usedSpaceActual = data.usedSpaceActual;
  revenueTotal = data.revenueTotal;
  usedCustomCssClass: string;
  usedCustomIcon: string;
  usedCustomText: string;
  usedTopIconBackground: string;
  players : any = data.players;
  followers: any = data.twitterFollowers;
  fixedIssues: any = data.fixedIssues;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    // const loggedIn = this.loginService.isLoggedIn;
    // if(!loggedIn){
    //   alert("Session expired please login");
    //   this.router.navigate(['login']);
    // }
    
    if(this.usedSpaceActual > this.usedSpaceTotal - 5){
       this.usedCustomCssClass = 'material-icons text-success';
       this.usedCustomIcon = 'drag_handle';
       this.usedCustomText = "Great Going";
       this.usedTopIconBackground = 'card-header card-header-success card-header-icon';
    }else{
      this.usedCustomCssClass = 'material-icons text-danger';
      this.usedCustomIcon = 'warning';
      this.usedCustomText = "Get More Space...";
      this.usedTopIconBackground = 'card-header card-header-warning card-header-icon';
    }
    
  }
  followersCount(){ //function returns the count of followers from Child 
    
  }

  issueCount(){
    this.fixedIssues = this.fixedIssues + 1;
    console.log("Added Inside Parent TS file");
  }
}
