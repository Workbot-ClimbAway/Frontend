import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-climbing-gym-details',
  templateUrl: './climbing-gym-details.component.html',
  styleUrls: ['./climbing-gym-details.component.css']
})
export class ClimbingGymDetailsComponent implements OnInit {

  text : string = "";

  constructor(private activeRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const heroId = this.activeRouter.snapshot.paramMap.get('id');
    console.log(heroId);
    this.text = "Climbing Gym Details " + heroId;
  }

}
