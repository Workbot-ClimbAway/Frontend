import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  basePath = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  // Get all climbing gyms

  getAllClimbingGyms() {
    return this.http.get(this.basePath + 'climbingGyms');
  }
}
