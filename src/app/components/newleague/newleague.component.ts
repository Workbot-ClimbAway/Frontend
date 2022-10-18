import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newleague',
  templateUrl: './newleague.component.html',
  styleUrls: ['./newleague.component.css'],
})
export class NewleagueComponent implements OnInit {
  leagueName = '';
  urlPhoto = '';
  description = '';
  name?: any = '';
  id?: any = 0;
  constructor(private activeRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.name = this.activeRouter.snapshot.paramMap.get('name');
    this.id = this.activeRouter.snapshot.paramMap.get('id');
  }

  /*
  <!--:name/:id/my-leagues-->
  <a [routerLink]="['/', name, id, 'my-leagues']">Create League</a>

*/
  myleague(name: string, id: number) {
    this.router.navigate(['/', name, id, 'my-leagues']);
  }
}
