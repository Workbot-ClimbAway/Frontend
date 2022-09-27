import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-climbing-gym-details',
  templateUrl: './climbing-gym-details.component.html',
  styleUrls: ['./climbing-gym-details.component.css']
})
export class ClimbingGymDetailsComponent implements OnInit {

  text : string = "";
  id ?: any =0;

  constructor(private activeRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    console.log(this.id);
    this.text = "Climbing Gym Details " + this.id;
  }

  windows(){
    alert("Windows is :" + this.id);
  }

  

}
