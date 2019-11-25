import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header_sidebar_footer/header/header.component';
import { FooterComponent } from './header_sidebar_footer/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NumberOnlyDirective } from './number-only.directive';
import { MaskPipe } from './mask.pipe';
import { DashboardTwitterBlockComponent } from './components/dashboard-twitter-block/dashboard-twitter-block.component';
import { DashboardFixedIssuesComponent } from './components/dashboard-fixed-issues/dashboard-fixed-issues.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    NumberOnlyDirective,
    MaskPipe,
    DashboardTwitterBlockComponent,
    DashboardFixedIssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
