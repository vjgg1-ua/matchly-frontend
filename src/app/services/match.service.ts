import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateMatchRequest, MatchResponse } from '../models/match.model';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse.model';

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

  getAllMatches(): Observable<ApiResponse<MatchResponse[]>> {
    return this.http.get<ApiResponse<MatchResponse[]>>(`${this.apiUrl}/matches`);
  }

  getMatchDetails(id: Number): Observable<ApiResponse<MatchResponse>> {
    return this.http.get<ApiResponse<MatchResponse>>(`${this.apiUrl}/show-matches/${id}`);
  }
}
