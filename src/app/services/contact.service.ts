import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactRequest } from '../models/contact.model';
import { ApiResponse } from '../models/ApiResponse.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly apiUrl = 'http://localhost:8080/api/contact/';

  constructor(private http: HttpClient){}

  sendMessageContact(contactRequest: ContactRequest): Observable<ApiResponse>{
    return this.http.post<ApiResponse>(this.apiUrl, contactRequest);
  }
}
