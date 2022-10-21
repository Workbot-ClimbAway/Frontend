import { ApiService } from './../../service/api.service';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

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

  newLeagueForm = new FormGroup({
    leagueName: new FormControl('', [Validators.required]),
    urlPhoto: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(
    private api: ApiService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.name = this.activeRouter.snapshot.paramMap.get('name');
    this.id = this.activeRouter.snapshot.paramMap.get('id');
  }

  myleague(name: string, id: number) {
    this.addLeague(this.newLeagueForm.value);
    this.router.navigate(['/', name, id, 'my-leagues']);
  }

  addLeague(value: any) {
    this.api.postLeague(value).subscribe({
      next: (res) => {
        alert('League added successfully');
      },
      error: (err) => {
        console.log(err);
      },
    });
    console.log(this.newLeagueForm.value);
  }
}
