import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-join-league',
  templateUrl: './join-league.component.html',
  styleUrls: ['./join-league.component.css'],
})
export class JoinLeagueComponent implements OnInit {
  league: any;
  id?: any = 0;
  constructor(private api: ApiService, private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    this.getLeagues(this.id);
  }

  getLeagues(id: number) {
    this.api.getLeaguesByClimbingGymId(id).subscribe({
      next: (res) => {
        this.league = res;
        console.log(this.league);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
