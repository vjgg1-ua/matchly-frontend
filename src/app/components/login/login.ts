import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRequest } from '../../models/auth.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  credentials: LoginRequest = {
    email: '',
    password: ''
  };
 
  errorMessage: string | null = null;
 
  constructor(private authService: AuthService, private router: Router) { }
 
  onSubmit(): void {
    this.errorMessage = null;
 
    this.authService.login(this.credentials).subscribe({
      next: () => {
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        this.errorMessage = err.error?.error ?? 'Error al iniciar sesion';
      }
    });
  }
}
