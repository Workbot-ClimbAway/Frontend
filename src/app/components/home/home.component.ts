import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  climbingGym :any[]=[];
  climbingGymchange :any[]=[];
  textoDeInput: string="";
  constructor(private router:Router,private api: ApiService) { }

  ngOnInit(): void {
    this.getAllClimbingGyms();
  }

  change(event : any){
    if(event.target.value === ""){
      this.climbingGymchange = this.climbingGym;
    }
  }

  search(){
      this.climbingGymchange = this.climbingGym;
      this.climbingGymchange = this.climbingGym.filter((item:any) => {
        return item.name.toLowerCase().includes(this.textoDeInput.toLowerCase());
      });
  }

  more(id :number){
    this.router.navigate(['/climbing-gym-details',id]);
  }

  getAllClimbingGyms() {
    this.api.getAllClimbingGyms().subscribe((data: any) => {
      this.climbingGym = data;
      this.climbingGymchange = data;
    });
  }
}