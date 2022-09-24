import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ClimbingGym } from 'src/app/service/ClimbingGym';
import { Features } from 'src/app/service/Features';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-climbing-gym-details',
  templateUrl: './climbing-gym-details.component.html',
  styleUrls: ['./climbing-gym-details.component.css'],
})
export class ClimbingGymDetailsComponent implements OnInit {
  climbingGymData: ClimbingGym;
  climbingGymFeatures: Features[];
  climbingGymFeature: Features;

  id?: any = 0;

  homeId: number = 0;

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {
    this.climbingGymData = {} as ClimbingGym;
    this.climbingGymFeatures = [] as Features[];
    this.climbingGymFeature = {} as Features;
  }

  ngOnInit(): void {
    /*
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    console.log(this.id);
    this.text = 'Climbing Gym Details ' + this.id;
*/
    this.getData();
    this.getFeatures();
    // console.log(this.homeComponent.id);
  }

  getData() {
    var index = localStorage.getItem('agencyId');
    var numIndex = Number(index);

    this.api.getClimbingGymData(numIndex).subscribe((data: ClimbingGym) => {
      this.climbingGymData = { ...data };
      console.log(data);
    });
  }

  getFeatures() {
    var index = localStorage.getItem('agencyId');
    var numIndex = Number(index);

    this.api.getClimbingGymFeatures(numIndex).subscribe((data: Features[]) => {
      this.climbingGymFeatures = { ...data };
      this.climbingGymFeature = {
        ...this.climbingGymFeatures[numIndex - 1],
      };
    });
  }
}
