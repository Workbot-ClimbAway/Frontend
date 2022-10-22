import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-join-league',
  templateUrl: './join-league.component.html',
  styleUrls: ['./join-league.component.css']
})
export class JoinLeagueComponent implements OnInit {
  leagues : any;
  id?: any = 0;
  constructor(private api: ApiService, private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    this.getLeagues();
  }

  getLeagues(){
    this.api.getLeaguesByClimbingGymId(this.id).subscribe({next: (res) => {
      this.leagues = res;
    }, error: (err) => {
      console.log(err);
    }});
  }

}
