import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMatchRequest, MatchResponse } from '../models/match.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  private readonly apiUrl = 'http://localhost:8080/api/match';

	constructor(private http: HttpClient){}

  createMatch(matchRequest: CreateMatchRequest): Observable<MatchResponse>{
    //console.log(matchRequest)
    return this.http.post<MatchResponse>(`${this.apiUrl}/createMatch`, matchRequest);
  }
}
