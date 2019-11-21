import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RestrictUserGuard } from './restrict-user.guard';


const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'dashboard'},
  { path: "login", component: LoginComponent},
  { path: "register", component: RegistrationComponent},
 //{ path: "dashboard", component: DashboardComponent, canActivate: [RestrictUserGuard]}
  { path: "dashboard", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
