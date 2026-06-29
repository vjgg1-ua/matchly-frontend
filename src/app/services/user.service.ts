import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { RegisterRequest, UserResponse } from '../models/auth.model';

@Injectable({
  	providedIn: 'root',
})

export class UsuarioService {
	private readonly apiUrl = 'http://localhost:8080/api/user';

	constructor(private http: HttpClient){}

	registrar(user: RegisterRequest): Observable<UserResponse> {
		return this.http.post<UserResponse>(`${this.apiUrl}/register`, user);
	}
}
