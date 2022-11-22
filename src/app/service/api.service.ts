import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  user : any ;
  basePath = 'https://climbaway.herokuapp.com/api/v1/';
  //basePath = 'http://localhost:8080/api/v1/';
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.user=this.sharedService.getAddUsuario();
  }

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
    const headerRequest = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.user.token,
      },
    };
    return this.http.get<any>(
      this.basePath + `competition_gyms?climbingGymId=${id}`,
      headerRequest
    );
  }
  //----------------------------------In process-------------------------------------------------------
  getRankingCompetitionByCompetitionId(id: number) {
    const headerRequest = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.user.token,
      },
    };
    return this.http.get<any>(
      this.basePath + `competition_gyms_ranking?competition_gymId=${id}`,
      headerRequest
    );
  }

  // Scarlers
  //--------------------------------In process for paginator---------------------------------------------------------
  getScarlersById(id: number) {
    return this.http.get<any>(this.basePath + `scaler/${id}`);
  }

  //-------------------------------------Login----------------------------------------------------
  getScalerByEmailAndPassword(email: string, password: string) {
    return this.http.get<any>(
      this.basePath + `scaler/email/${email}`
    );
  }
  login(data: any) {
    return this.http.post<any>(this.basePath + 'login', data);
  }
  //---------------------------------------WORKS--------------------------------------------------
  postScaler(data: any) {
    return this.http.post<any>(this.basePath + 'scaler', data);
  }

  // Leagues
  //-----------------------------------------------------------------------------------------
  postLeague(data: any) {
    const headerRequest = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.user.token,
      },
    };
    return this.http.post<any>(this.basePath + 'league', data, headerRequest);
  }
  //-----------------------------------------------------------------------------------------
  //http://localhost:8080/api/v1/league/climbing-gym/1
  getLeaguesByClimbingGymId(id: number) {
    const headerRequest = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.user.token,
      },
    };
    return this.http.get<any>(this.basePath + `league/climbing-gym/${id}`,headerRequest);
  }
}
