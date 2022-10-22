import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.get<any>(this.basePath + `climbingGyms/${id}`);
  }

  getClimbingGymFeatures(id: number) {
    return this.http.get<any>(this.basePath + `features?climbingGymId=${id}`);
  }

  getClimbingGymImages(id: number) {
    return this.http.get<any>(this.basePath + `images?climbingGymId=${id}`);
  }

  postClimbingGym(data: any) {
    return this.http.post<any>(this.basePath + 'climbingGyms', data);
  }

  // News
  getClimbingGymNew_news(id: number) {
    return this.http.get<any>(this.basePath + `new_news?climbingGymId=${id}`);
  }

  // Competiton
  getCompetitionByClimbingGymId(id: number) {
    return this.http.get<any>(
      this.basePath + `competition_gyms?climbingGymId=${id}`
    );
  }
  getRankingCompetitionByCompetitionId(id: number) {
    return this.http.get<any>(
      this.basePath + `competition_gyms_ranking?competition_gymId=${id}`
    );
  }

  // Scarlers
  getScarlersById(id: number) {
    return this.http.get<any>(this.basePath + `scalers/${id}`);
  }

  getScalerByEmailAndPassword(email: string, password: string) {
    return this.http.get<any>(
      this.basePath + `scalers?email=${email}&password=${password}`
    );
  }

  postScaler(data: any){
    return this.http.post<any>(this.basePath + 'scalers', data);
  }

  // Leagues
  postLeague(data: any) {
    return this.http.post<any>(this.basePath + 'league', data);
  }

  getLeaguesByClimbingGymId(id: number) {
    return this.http.get<any>(
      this.basePath + `league?climbingGymId=${id}`
    );
  }
}