import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimbingGymDetailsComponent } from './components/climbing-gym-details/climbing-gym-details.component';
import { HomeComponent } from './components/home/home.component';
import { NewleagueComponent } from './components/newleague/newleague.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'climbing-gym-details/:id', component: ClimbingGymDetailsComponent },
  { path: 'newleague/:name/:id', component: NewleagueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
