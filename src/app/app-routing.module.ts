import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimbingGymDetailsComponent } from './components/climbing-gym-details/climbing-gym-details.component';
import { HomeComponent } from './components/home/home.component';

import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

import { MyleaguesComponent } from './components/myleagues/myleagues.component';
import { NewleagueComponent } from './components/newleague/newleague.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'climbing-gym-details/:id', component: ClimbingGymDetailsComponent },
  { path: 'newleague/:name/:id', component: NewleagueComponent },
  { path: ':name/:id/my-leagues', component: MyleaguesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
