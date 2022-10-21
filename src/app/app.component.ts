import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClimbAway';
  constructor(private router: Router) { }

  nextPage(rute: String){
    this.router.navigate([rute]);
  }


}
