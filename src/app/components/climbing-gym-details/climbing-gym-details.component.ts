import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ClimbingGym } from 'src/app/service/ClimbingGym';
import { Features } from 'src/app/service/Features';
import { Images } from 'src/app/service/Images';
@Component({
  selector: 'app-climbing-gym-details',
  templateUrl: './climbing-gym-details.component.html',
  styleUrls: ['./climbing-gym-details.component.css'],
})
export class ClimbingGymDetailsComponent implements OnInit {
  climbingGymData: ClimbingGym;
  climbingGymFeatures: Features[];
  climbingGymFeature: Features;
  climbingGymImages: Images[];
  climbingGymNew_news: any;
  competitionGymData: any;
  images: any;
  id?: any = 0;
  homeId: number = 0;
  displayedColumns: string[] = ['photo', 'name', 'district', 'score'];
  dataSource: any;
  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {
    this.climbingGymData = {} as ClimbingGym;
    this.climbingGymFeatures = [] as Features[];
    this.climbingGymFeature = {} as Features;
    this.climbingGymImages = [] as Images[];
    this.images = {} as any;
    this.competitionGymData= {} as any;
  }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id');

    this.getData();
    this.getFeatures();
    this.getImages();
    this.getNew_news();
    this.getScalersByCompetitionGym();
  }

  getData() {
    this.api.getClimbingGymData(this.id).subscribe((data: ClimbingGym) => {
      this.climbingGymData = { ...data };
    });
  }

  getFeatures() {
    this.api.getClimbingGymFeatures(this.id).subscribe((data: Features[]) => {
      this.climbingGymFeatures = { ...data };
      this.climbingGymFeature = {
        ...this.climbingGymFeatures[this.id - 1],
      };
    });
  }

  getImages() {
    this.api.getClimbingGymImages(this.id).subscribe((data: Images[]) => {
      this.climbingGymImages = { ...data };

      const arr = Object.values(this.climbingGymImages).filter((item) => {
        return item.url_photo;
      });

      this.images = arr.map((item) => {
        return item.url_photo;
      });
    });
  }

    getNew_news(){
      this.api.getClimbingGymNew_news(this.id).subscribe({next: res=>{
        this.climbingGymNew_news=res;
      }});
    }

    getScalersByCompetitionGym(){
      this.api.getScalersByCompetitionGymId(this.id).subscribe({next: res2=>{this.getScalersByCompetitionGym=res2;}})
    }
    getCompetitionRankingOfScalersByCompetitionGym(){
      this.api.getCompetitionRankingOfScalersByCompetitionGymId(this.id, this.id).subscribe({next: res3=>{
        this.getCompetitionRankingOfScalersByCompetitionGym=res3;
      }})
    }
    getCompetitionData(){
      this.api.getCompetitionData(this.id).subscribe((data: any) => {
        this.competitionGymData = { ...data };
      });
}
}
