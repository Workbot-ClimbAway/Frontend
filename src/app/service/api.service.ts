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
  //-------------------------------------Works-----------------------------------------------------
  getClimbingGymNew_news(id: number) {
    //return this.http.get<any>(this.basePath + `new_news?climbingGymId=${id}`);
    return this.http.get<any>(this.basePath + `news/climbingGym/${id}`);
  }

  // Competition
  //---------------------------------In process--------------------------------------------------------
  getCompetitionByClimbingGymId(id: number) {
    return this.http.get<any>(
      this.basePath + `competition_gyms?climbingGymId=${id}`
    );
  }
  //----------------------------------In process-------------------------------------------------------
  getRankingCompetitionByCompetitionId(id: number) {
    return this.http.get<any>(
      this.basePath + `competition_gyms_ranking?competition_gymId=${id}`
    );
  }

  // Scarlers
  //--------------------------------In process for paginator---------------------------------------------------------
  getScarlersById(id: number) {
    return this.http.get<any>(this.basePath + `scaler/${id}`);
  }

  //-------------------------------------WORKS----------------------------------------------------
  //http://localhost:8080/api/v1/scaler/email/scaler1@gmail.com/password/scaler123
  getScalerByEmailAndPassword(email: string, password: string) {
    return this.http.get<any>(
      this.basePath + `scaler/email/${email}/password/${password}`
    );
  }

  //---------------------------------------WORKS--------------------------------------------------
  postScaler(data: any) {
    return this.http.post<any>(this.basePath + 'scaler', data);
  }

  // Leagues
  //-----------------------------------------------------------------------------------------
  postLeague(data: any) {
    return this.http.post<any>(this.basePath + 'league', data);
  }
  //-----------------------------------------------------------------------------------------
  getLeaguesByClimbingGymId(id: number) {
    return this.http.get<any>(this.basePath + `league?climbingGymId=${id}`);
  }
}
