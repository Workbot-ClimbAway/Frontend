import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  climbingGym: any;
  climbingGymFeatures: any;
  climbingGymFeature: any;
  climbingGymImages: any;
  climbingGymNew_news: any;
  // Competition
  CompetitionGym: any;
  RankingByCompetition: any;
  // User 
  Scalers : any;

  dataSource! : MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  competitionGymData: any;
  images: any;
  id?: any = 0;
  homeId: number = 0;
  displayedColumns: string[] = ['photo', 'name', 'district', 'score'];
  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private api: ApiService,
  ) {
    this.climbingGym = null;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    this.getData();
    this.getFeatures();
    this.getImages();
    this.getNew_news();
    this.getCompetition();
  }

  getData() {
    this.api.getClimbingGymData(this.id).subscribe({ next: (res) =>{
        this.climbingGym = res;
      }, error: (err) => {
          console.log(err)
      }
    })
  }
  getFeatures() {
    this.api.getClimbingGymFeatures(this.id).subscribe({ next: res =>{
      this.climbingGymFeature=res[0];
      },error: err => {
        console.log(err);
      }
    })
  }

  getImages() {
    this.api.getClimbingGymImages(this.id).subscribe({
      next: (res) =>{
        this.climbingGymImages = res
      }, error: (err) => {
          console.log(err);
      }
    })
  }

  getNew_news(){
    this.api.getClimbingGymNew_news(this.id).subscribe({next: res=>{
      this.climbingGymNew_news=res;
    }});
  }

  getCompetition(){
    this.api.getCompetitionByClimbingGymId(this.id).subscribe({
      next: (res) =>{
        this.CompetitionGym = res
        this.api.getRankingCompetitionByCompetitionId(this.CompetitionGym[0].id)
        .subscribe({
          next: (res) =>{
            this.RankingByCompetition = res
            this.RankingByCompetition.forEach( (element:any, index: number)  => {
              this.api.getScarlersById(element.scalerId).subscribe({
                next: (resH) =>{
                  this.RankingByCompetition[index].fullName = resH.first_name+" "+resH.last_name
                  this.RankingByCompetition[index].district = resH.district
                  this.RankingByCompetition[index].url_photo = resH.url_photo
                }, error: (errH) =>{

                  console.log(errH);
                }
              })
            });
            this.dataSource = new MatTableDataSource(this.RankingByCompetition);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            console.log("Aqiiiiiiii",this.RankingByCompetition);
          }, error: (err) => {
            console.log(err);
          }
        })
      }, error: (err) =>{
        console.log(err)
      }
    })
  }

}
