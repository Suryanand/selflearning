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
  players = [
    {id:1 , name: 'Sachin', salary: '33000' ,country: 'India', phone : '1234567890' },
    {id:2 , name: 'Virat', salary: '34000' ,country: 'India', phone : '1234567891'},
    {id:3 , name: 'Dhoni', salary: '32000' ,country: 'India', phone : '1234567892'},
    {id:4 , name: 'Yuvi', salary: '21000' ,country: 'India', phone : '1234567893'},
    {id:5 , name: 'Dravid', salary: '22000' ,country:'India', phone : '1234567894' }
  ]
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    const loggedIn = this.loginService.isLoggedIn;
    if(!loggedIn){
      alert("Session expired please login");
      this.router.navigate(['login']);
    }
    
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

}
