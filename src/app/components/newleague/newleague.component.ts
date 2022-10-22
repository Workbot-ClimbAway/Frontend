import { ApiService } from './../../service/api.service';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-newleague',
  templateUrl: './newleague.component.html',
  styleUrls: ['./newleague.component.css'],
})
export class NewleagueComponent implements OnInit {
  newLeagueForm!: FormGroup;
  leagueName = '';
  urlPhoto = '';
  description = '';
  name?: any = '';
  id?: any = 0;

  constructor(
    private api: ApiService,
    private activeRouter: ActivatedRoute,
    private router: Router,
    private dataInfo: SharedService
  ) {
    this.newLeagueForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      url_photo: new FormControl('', [Validators.required]),
      description: new FormControl(''),
    });

  }

  ngOnInit(): void {
    this.name = this.activeRouter.snapshot.paramMap.get('name');
    this.id = this.activeRouter.snapshot.paramMap.get('id');
  }

  // myleague(name: string, id: number) {
  //   this.addLeague(this.newLeagueForm.value);
  //   this.router.navigate(['/', name, id, 'my-leagues']);
  // }

  addLeague() {

    if (this.dataInfo.getAddUsuario()) {
      if (this.newLeagueForm.valid) {
        let data : any = {};
        data = this.newLeagueForm.value;
        data.scalerId = this.dataInfo.getAddUsuario().id;
        data.climbingGymId = this.id;
        data.number_participants = 1;
        this.api.postLeague(data).subscribe({
          next: (res) => {
            this.router.navigate(['/join-league', this.id]);
            this.newLeagueForm.reset();
            alert('League added successfully');
          },
          error: (err) => {
            console.log(err);
          },
        });
      } else {
        alert('You must fill in all the fields');
      }
    } else {
      alert('You must be logged in to create a league');
    }
  }
}
