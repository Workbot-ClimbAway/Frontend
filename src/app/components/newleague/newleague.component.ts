import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newleague',
  templateUrl: './newleague.component.html',
  styleUrls: ['./newleague.component.css'],
})
export class NewleagueComponent implements OnInit {
  name?: any = '';
  id?: any = 0;
  constructor(private activeRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('name');
    this.id = this.activeRouter.snapshot.paramMap.get('id');
  }
}
