import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactRequest } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly apiUrl = 'http://localhost:8080/api/contact/';

  constructor(private http: HttpClient){}

  sendMessageContact(contactRequest: ContactRequest): Observable<string>{
    return this.http.post<string>(this.apiUrl, contactRequest);
  }
}
