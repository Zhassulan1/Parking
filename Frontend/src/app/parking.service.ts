import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ParkingService {
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  // login(username: string, password: string): Observable<Token> {
  //   return this.http.post<Token>(
  //     `${this.BASE_URL}/api/login/`, 
  //     {username,password})
  // }
}
