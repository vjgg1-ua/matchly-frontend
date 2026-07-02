import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DisciplineResponse, SubdisciplineResponse } from '../models/discipline.model';

@Injectable({
  providedIn: 'root',
})

export class DisciplineService {
  private readonly DISCIPLINE_ENDPOINT = 'http://localhost:8080/api/discipline';
  private readonly SUBDISCIPLINE_ENDPOINT = 'http://localhost:8080/api/discipline/subdiscipline';

  constructor(private http: HttpClient){}

  getDisciplines() {
    return this.http.get<DisciplineResponse[]>(this.DISCIPLINE_ENDPOINT);
  }

  getSubdisciplines() {
    return this.http.get<SubdisciplineResponse[]>(this.SUBDISCIPLINE_ENDPOINT);
  }

  getSubdisciplineByParent(id: number){
    return this.http.get<SubdisciplineResponse[]>(`${this.DISCIPLINE_ENDPOINT}/${id}/subdiscipline`);
  }
}
