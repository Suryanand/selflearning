import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'selflearning';
  showHeadFoot :boolean = false;
  constructor(private route : Router){
    route.events.forEach((event) => {
      if(event instanceof NavigationStart){
        if(event['url'] == "/login" || event['url'] == "/register"){
          this.showHeadFoot = false;
        }else{
          this.showHeadFoot = true;
        }
      }
    })


  }
}
