import { ClimbingGym } from './ClimbingGym';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Features } from './Features';
import { Images } from './Images';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  basePath = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  // Get all climbing gyms

  getAllClimbingGyms() {
    return this.http.get(this.basePath + 'climbingGyms');
  }

  getClimbingGymData(id: number) {
    return this.http.get<ClimbingGym>(this.basePath + `climbingGyms/${id}`);
  }

  getClimbingGymFeatures(id: number) {
    return this.http.get<Features[]>(
      this.basePath + `features?climbingGymId=${id}`
    );
  }

  //http://localhost:3000/images?climbingGymId=1
  getClimbingGymImages(id: number) {
    return this.http.get<Images[]>(
      this.basePath + `images?climbingGymId=${id}`
    );
  }

  getClimbingGymNew_news(id :number){
     return this.http.get<any>(
      this.basePath + `new_news?climbingGymId=${id}`
     );
  }
}
