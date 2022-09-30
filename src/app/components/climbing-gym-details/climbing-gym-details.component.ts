import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ClimbingGym } from 'src/app/service/ClimbingGym';
import { Features } from 'src/app/service/Features';
import { Images } from 'src/app/service/Images';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
  images: any;
  id?: any = 0;
  homeId: number = 0;
  displayedColumns: string[] = ['photo', 'name', 'district', 'score'];
  dataSource = ELEMENT_DATA;
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
  }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id');

    this.getData();
    this.getFeatures();
    this.getImages();
    this.getNew_news();
    this.getScalersByCompetitionGym();
    this.getCompetitionRankingOfScalersByCompetitionGym();
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
}

