import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  basePath = 'http://localhost:8080/api/v1/';
  constructor(private http: HttpClient) {}

  // Get all climbing gyms
  //---------------------------------------------Works---------------------------------------------
  getAllClimbingGyms() {
    return this.http.get(this.basePath + 'climbing-gyms');
  }
  //---------------------------------------------Works---------------------------------------------
  getClimbingGymData(id: number) {
    return this.http.get<any>(this.basePath + `climbing-gyms/${id}`);
  }
  //---------------------------------Works---------------------------------------------------------
  getClimbingGymFeatures(id: number) {
    return this.http.get<any>(this.basePath + `features?climbingGymId=${id}`);
  }
  //-------------------------------Works-----------------------------------------------------------
  getClimbingGymImages(id: number) {
    return this.http.get<any>(this.basePath + `images?climbingGymId=${id}`);
  }
  //----------------------------------FALTAN CORS--------------------------------------------------------
  postClimbingGym(data: any) {
    return this.http.post<any>(this.basePath + 'climbing-gyms', data);
  }

  // News
  //------------------------------------------------------------------------------------------
  getClimbingGymNew_news(id: number) {
    //return this.http.get<any>(this.basePath + `new_news?climbingGymId=${id}`);
    return this.http.get<any>(this.basePath + `news/climbingGym/${id}`);
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

  postScaler(data: any) {
    return this.http.post<any>(this.basePath + 'scalers', data);
  }

  // Leagues
  postLeague(data: any) {
    return this.http.post<any>(this.basePath + 'league', data);
  }

  getLeaguesByClimbingGymId(id: number) {
    return this.http.get<any>(this.basePath + `league?climbingGymId=${id}`);
  }
}
