import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Parking } from './models';
import { Token } from './models'

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(
      `${this.BASE_URL}/api/login/`, 
      {username,password})
  }

  ParkingList(): Observable<Parking[]> {
    return this.http.post<Parking[]>(`${this.BASE_URL}/api/user/${1}/parkings/`, {"user_coordinates": [43.207890, 76.668825]});
  }

  getBalance(): Observable<any>{
    return this.http.get<any>(`${this.BASE_URL}/api/user/1/`);
  }
}
